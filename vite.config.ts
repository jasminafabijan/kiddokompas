import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

const rootDir = path.dirname(fileURLToPath(import.meta.url))

const writeIdSetFile = (
  filePath: string,
  comment: string,
  exportName: string,
  ids: string[]
) => {
  const unique = [...new Set(ids.filter((id) => typeof id === 'string' && id.length > 0))].sort(
    (a, b) => a.localeCompare(b)
  )
  const lines = unique.map((id) => `  '${id}',`).join('\n')
  const contents = `/**
 * ${comment}
 */
export const ${exportName} = new Set<string>([
${lines}
])
`

  fs.writeFileSync(filePath, contents)
  return unique.length
}

const handleJsonIdListPost = (
  req: { method?: string; on: (event: string, listener: (chunk?: Buffer | string) => void) => void },
  res: { statusCode: number; end: (body?: string) => void },
  next: () => void,
  onIds: (ids: string[]) => number,
  logLabel: string,
  logger: { info: (msg: string) => void }
) => {
  if (req.method !== 'POST') {
    next()
    return
  }

  const chunks: Buffer[] = []
  req.on('data', (chunk) => {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk))
  })
  req.on('end', () => {
    try {
      const ids = JSON.parse(Buffer.concat(chunks).toString('utf8')) as unknown
      if (!Array.isArray(ids) || ids.some((id) => typeof id !== 'string')) {
        res.statusCode = 400
        res.end('invalid')
        return
      }

      const count = onIds(ids)
      logger.info(`[${logLabel}] wrote ${count} ids`)
      res.statusCode = 204
      res.end()
    } catch {
      res.statusCode = 400
      res.end('invalid')
    }
  })
}

/** Beacon rejects http://localhost:5173. The live origin is allowed, so production HTML stays as written. */
const omitAnalyticsInDev = (): Plugin => ({
  name: 'omit-analytics-in-dev',
  transformIndexHtml: {
    order: 'pre',
    handler(html, ctx) {
      if (!ctx.server) {
        return html
      }

      return html
        .replace(/\n\s*<link rel="preconnect" href="https:\/\/cloudflareinsights\.com" \/>/, '')
        .replace(/\n\s*<link rel="preconnect" href="https:\/\/static\.cloudflareinsights\.com" \/>/, '')
        .replace(
          /\n\s*<!-- Cloudflare Web Analytics -->[\s\S]*?<!-- End Cloudflare Web Analytics -->/,
          ''
        )
    },
  },
})

const adminSchoolIdsDevApi = (): Plugin => ({
  name: 'admin-school-ids-dev-api',
  configureServer(server) {
    const verifiedFile = path.join(rootDir, 'src/data/verifiedSchoolIds.ts')
    const contactedFile = path.join(rootDir, 'src/data/contactedSchoolIds.ts')

    server.middlewares.use('/__dev/verified-schools', (req, res, next) => {
      handleJsonIdListPost(
        req,
        res,
        next,
        (ids) =>
          writeIdSetFile(
            verifiedFile,
            'School ids shown on the public catalog, map and search — locally and on kiddokompas.rs.\n * Admin Provera writes this file in `npm run dev`. Unchecked schools stay in admin, not here.',
            'VERIFIED_SCHOOL_IDS',
            ids
          ),
        'verified-schools',
        server.config.logger
      )
    })

    server.middlewares.use('/__dev/contacted-schools', (req, res, next) => {
      handleJsonIdListPost(
        req,
        res,
        next,
        (ids) =>
          writeIdSetFile(
            contactedFile,
            'School ids marked Kontakt in admin. Written from `npm run dev` when the checkbox changes.',
            'CONTACTED_SCHOOL_IDS',
            ids
          ),
        'contacted-schools',
        server.config.logger
      )
    })
  },
})

export default defineConfig({
  plugins: [react(), omitAnalyticsInDev(), adminSchoolIdsDevApi()],
})
