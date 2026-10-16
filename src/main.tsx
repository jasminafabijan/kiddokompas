import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './fonts.css'
import './global.css'
import './responsive.css'

const preloadReloadKey = 'kk-preload-reload'

window.addEventListener('vite:preloadError', (event) => {
  event.preventDefault()

  if (sessionStorage.getItem(preloadReloadKey) === '1') {
    return
  }

  sessionStorage.setItem(preloadReloadKey, '1')
  window.location.reload()
})

window.setTimeout(() => {
  sessionStorage.removeItem(preloadReloadKey)
}, 10000)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

