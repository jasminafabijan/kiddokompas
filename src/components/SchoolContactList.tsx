import { type ReactNode } from 'react'
import type { SchoolContact } from '../data/schools'
import {
  formatFacebookLabel,
  formatInstagramLabel,
  formatPhoneHref,
  formatTikTokLabel,
  formatWebsiteLabel,
  formatYouTubeLabel,
  getContactPhones,
} from '../data/schools'

export type ContactLink = {
  label: string
  href: string
  icon: ReactNode
  external: boolean
  extraHrefs?: Array<{ label: string; href: string }>
}

const PhoneIcon = () => (
  <svg
    aria-hidden="true"
    className="school-detail-contact-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const MailIcon = () => (
  <svg
    aria-hidden="true"
    className="school-detail-contact-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

const GlobeIcon = () => (
  <svg
    aria-hidden="true"
    className="school-detail-contact-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
)

const FacebookIcon = () => (
  <svg
    aria-hidden="true"
    className="school-detail-contact-icon school-detail-contact-icon--facebook"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="10" fill="currentColor" />
    <path
      fill="#fff"
      d="M13.4 20.5v-6.2h2.1l.3-2.5h-2.1V9.1c0-.7.2-1.2 1.1-1.2h1.2V5.4h-2.1c-2.2 0-3.2 1.1-3.2 2.9v1.6H8.5v2.5h1.7v6.2h2.2z"
    />
  </svg>
)

const InstagramIcon = () => (
  <svg
    aria-hidden="true"
    className="school-detail-contact-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

const TikTokIcon = () => (
  <svg
    aria-hidden="true"
    className="school-detail-contact-icon"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M14.2 3.2c.4 2.4 1.7 4.1 4 4.6v2.5c-1.4 0-2.7-.4-3.9-1.2v6.6c0 3.3-2.5 5.7-5.8 5.7S2.7 19 2.7 15.7c0-3.2 2.4-5.6 5.6-5.7v2.6c-1.6.1-2.9 1.4-2.9 3.1 0 1.7 1.4 3.1 3.1 3.1s3.1-1.4 3.1-3.1V3.2h2.6Z" />
  </svg>
)

const YouTubeIcon = () => (
  <svg
    aria-hidden="true"
    className="school-detail-contact-icon"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M23 12.2s0-3.2-.4-4.6c-.2-.9-.9-1.6-1.8-1.8C19.2 5.4 12 5.4 12 5.4s-7.2 0-8.8.4c-.9.2-1.6.9-1.8 1.8C1 9 1 12.2 1 12.2s0 3.2.4 4.6c.2.9.9 1.6 1.8 1.8 1.6.4 8.8.4 8.8.4s7.2 0 8.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.4.4-4.6.4-4.6zM9.8 15.5v-6.6l6.2 3.3-6.2 3.3z" />
  </svg>
)

export const LocationPinIcon = () => (
  <svg
    aria-hidden="true"
    className="school-detail-contact-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

export const buildContactLinks = (contact?: SchoolContact): ContactLink[] => {
  if (!contact) {
    return []
  }

  const phones = getContactPhones(contact.phone)
  const [primaryPhone, ...extraPhones] = phones
  const links: ContactLink[] = []

  if (primaryPhone) {
    links.push({
      label: primaryPhone,
      href: formatPhoneHref(primaryPhone),
      icon: <PhoneIcon />,
      external: false,
      extraHrefs: extraPhones.map((phone) => ({
        label: phone,
        href: formatPhoneHref(phone),
      })),
    })
  }

  if (contact.email) {
    links.push({
      label: contact.email,
      href: `mailto:${contact.email}`,
      icon: <MailIcon />,
      external: false,
    })
  }

  if (contact.website) {
    links.push({
      label: formatWebsiteLabel(contact.website),
      href: contact.website,
      icon: <GlobeIcon />,
      external: true,
    })
  }

  if (contact.facebook) {
    links.push({
      label: contact.facebookLabel ?? formatFacebookLabel(contact.facebook),
      href: contact.facebook,
      icon: <FacebookIcon />,
      external: true,
    })
  }

  if (contact.instagram) {
    links.push({
      label: formatInstagramLabel(contact.instagram),
      href: contact.instagram,
      icon: <InstagramIcon />,
      external: true,
    })
  }

  if (contact.tiktok) {
    links.push({
      label: formatTikTokLabel(contact.tiktok),
      href: contact.tiktok,
      icon: <TikTokIcon />,
      external: true,
    })
  }

  if (contact.youtube) {
    links.push({
      label: formatYouTubeLabel(contact.youtube),
      href: contact.youtube,
      icon: <YouTubeIcon />,
      external: true,
    })
  }

  return links
}

type SchoolContactListProps = {
  links: ContactLink[]
}

const SchoolContactList = ({ links }: SchoolContactListProps) => {
  if (links.length === 0) {
    return null
  }

  return (
    <ul className="school-detail-contact">
      {links.map((link) => (
        <li key={link.href}>
          {link.extraHrefs && link.extraHrefs.length > 0 ? (
            <div className="school-detail-contact-link">
              <span className="school-detail-contact-icon-wrap">{link.icon}</span>
              <span className="school-detail-contact-phones">
                {[{ label: link.label, href: link.href }, ...link.extraHrefs].map((phone) => (
                  <a key={phone.href} href={phone.href} className="school-detail-contact-phone">
                    {phone.label}
                  </a>
                ))}
              </span>
            </div>
          ) : (
            <a
              href={link.href}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="school-detail-contact-link"
            >
              <span className="school-detail-contact-icon-wrap">{link.icon}</span>
              <span className="school-detail-contact-label">{link.label}</span>
            </a>
          )}
        </li>
      ))}
    </ul>
  )
}

export default SchoolContactList
