import { useState } from 'react'
import jasminaPhoto from '../assets/images/jasmina.png'
import AddActivityModal from '../components/AddActivityModal'
import Navbar from '../components/Navbar'
import { useI18n } from '../i18n/useI18n'

const AboutPage = () => {
  const { t } = useI18n()
  const [isAddActivityOpen, setIsAddActivityOpen] = useState(false)

  return (
    <div className="page-shell about-page">
      <Navbar />

      <div className="about-inner">
        <header className="about-intro">
          <div className="about-intro-media">
            <span className="about-intro-blob about-intro-blob--peach" />
            <span className="about-intro-blob about-intro-blob--mint" />
            <img
              src={jasminaPhoto}
              alt="Jasmina Fabijan"
              className="about-intro-photo"
              width={800}
              height={1075}
            />
          </div>

          <div className="about-intro-copy">
            <p className="about-eyebrow">{t('about.eyebrow')}</p>
            <h1 className="about-title">{t('about.title')}</h1>
            <p className="about-name">Jasmina Fabijan</p>
            <p className="about-role">{t('about.role')}</p>
          </div>
        </header>

        <div className="about-body">
          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>

          <blockquote className="about-quote">{t('about.quote')}</blockquote>

          <p>{t('about.p3')}</p>

          <aside className="about-notice" role="note">
            <span className="about-notice-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.75" />
                <path
                  d="M12 10.5v6"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
                <circle cx="12" cy="7.25" r="1.1" fill="currentColor" />
              </svg>
            </span>
            <p>{t('about.notice')}</p>
          </aside>
        </div>
      </div>

      <section className="about-cta" aria-labelledby="about-cta-title">
        <div className="about-cta-inner">
          <h2 id="about-cta-title" className="about-cta-title">
            {t('about.ctaTitle')}
          </h2>
          <p className="about-cta-text">{t('about.ctaText')}</p>
          <button
            type="button"
            className="btn btn-primary about-cta-button"
            onClick={() => setIsAddActivityOpen(true)}
          >
            {t('about.ctaButton')}
          </button>
        </div>
      </section>

      <AddActivityModal
        isOpen={isAddActivityOpen}
        onClose={() => setIsAddActivityOpen(false)}
      />
    </div>
  )
}

export default AboutPage
