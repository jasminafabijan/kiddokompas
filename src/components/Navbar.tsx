import { useEffect, useId, useLayoutEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/images/kiddokompas-logo.png'
import { isCategoriesHash, isCategoryPath, isHomePath } from '../i18n/routes'
import { useI18n } from '../i18n/useI18n'
import { HOME_SCROLL_KEY, RESET_SCROLL_STATE, saveScroll } from '../utils/scrollRestoration'
import { isHomeCategoriesSectionActive, scrollToCategories } from '../utils/scrollToElement'
import AddActivityModal from './AddActivityModal'
import LanguageSwitcher from './LanguageSwitcher'

const Navbar = () => {
    const [isAddActivityOpen, setIsAddActivityOpen] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isCategoriesSectionInView, setIsCategoriesSectionInView] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    const { t, path } = useI18n()
    const menuId = useId()
    const isOnHome = isHomePath(location.pathname)
    const isCategoriesActive =
        isCategoryPath(location.pathname) || (isOnHome && isCategoriesSectionInView)
    const isHomeActive = isOnHome && !isCategoriesActive

    useEffect(() => {
        setIsMenuOpen(false)
    }, [location.pathname, location.hash])

    useLayoutEffect(() => {
        if (!isHomePath(location.pathname)) {
            setIsCategoriesSectionInView(false)
            return
        }

        const update = () => {
            setIsCategoriesSectionInView(isHomeCategoriesSectionActive())
        }

        update()

        let frame = 0
        const scheduleUpdate = () => {
            if (frame) {
                return
            }

            frame = window.requestAnimationFrame(() => {
                frame = 0
                update()
            })
        }

        window.addEventListener('scroll', scheduleUpdate, { passive: true })
        window.addEventListener('resize', scheduleUpdate)

        return () => {
            window.cancelAnimationFrame(frame)
            window.removeEventListener('scroll', scheduleUpdate)
            window.removeEventListener('resize', scheduleUpdate)
        }
    }, [location.pathname])

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 810px)')
        const closeOnDesktop = () => {
            if (mediaQuery.matches) {
                setIsMenuOpen(false)
            }
        }

        mediaQuery.addEventListener('change', closeOnDesktop)
        return () => mediaQuery.removeEventListener('change', closeOnDesktop)
    }, [])

    useEffect(() => {
        if (!isMenuOpen) {
            return
        }

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsMenuOpen(false)
            }
        }

        document.addEventListener('keydown', onKeyDown)
        document.body.style.overflow = 'hidden'

        return () => {
            document.removeEventListener('keydown', onKeyDown)
            document.body.style.overflow = ''
        }
    }, [isMenuOpen])

    const handleHomeClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        setIsMenuOpen(false)

        if (!isHomePath(location.pathname)) {
            return
        }

        event.preventDefault()

        if (location.hash) {
            navigate(path.home, { replace: true, state: RESET_SCROLL_STATE })
        }

        saveScroll(HOME_SCROLL_KEY, 0)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const handleCategoriesClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        setIsMenuOpen(false)

        if (isHomePath(location.pathname)) {
            event.preventDefault()
            scrollToCategories()

            if (!isCategoriesHash(location.hash)) {
                navigate(path.homeCategories, { replace: true })
            }
        }
    }

    return (
        <>
            <nav className="site-navbar">
                <div className="site-navbar-inner">
                    <Link
                        to={path.home}
                        state={RESET_SCROLL_STATE}
                        className="site-navbar-brand"
                        onClick={handleHomeClick}
                    >
                        <img
                            src={logo}
                            alt="KiddoKompas logo"
                            width={400}
                            height={160}
                            decoding="async"
                            className="site-navbar-logo"
                        />
                    </Link>

                    <div className="site-navbar-tools">
                        <LanguageSwitcher />
                        <button
                            type="button"
                            className="site-navbar-toggle"
                            aria-expanded={isMenuOpen}
                            aria-controls={menuId}
                            aria-label={isMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
                            onClick={() => setIsMenuOpen((open) => !open)}
                        >
                            <span className="site-navbar-toggle-icon" aria-hidden="true">
                                <span className="site-navbar-toggle-bar" />
                                <span className="site-navbar-toggle-bar site-navbar-toggle-bar--short" />
                                <span className="site-navbar-toggle-bar" />
                            </span>
                        </button>
                    </div>

                    <div
                        id={menuId}
                        className={`site-navbar-menu${isMenuOpen ? ' is-open' : ''}`}
                    >
                        <span className="site-navbar-menu-accent" aria-hidden="true" />
                        <Link
                            to={path.home}
                            state={RESET_SCROLL_STATE}
                            onClick={handleHomeClick}
                            className="navbar-categories-link site-navbar-menu-link"
                            aria-current={isHomeActive ? 'page' : undefined}
                        >
                            {t('nav.home')}
                        </Link>
                        <Link
                            to={path.homeCategories}
                            onClick={handleCategoriesClick}
                            className="navbar-categories-link site-navbar-menu-link"
                            aria-current={isCategoriesActive ? 'page' : undefined}
                        >
                            {t('nav.categories')}
                        </Link>
                        <NavLink
                            to={path.map}
                            end
                            onClick={() => setIsMenuOpen(false)}
                            className="navbar-categories-link site-navbar-menu-link"
                        >
                            {t('nav.map')}
                        </NavLink>
                        <NavLink
                            to={path.about}
                            end
                            onClick={() => setIsMenuOpen(false)}
                            className="navbar-categories-link site-navbar-menu-link"
                        >
                            {t('nav.about')}
                        </NavLink>
                        <LanguageSwitcher className="site-navbar-lang-menu" />
                        <span className="site-navbar-divider" aria-hidden="true" />
                        <button
                            type="button"
                            className="btn btn-primary site-navbar-cta"
                            onClick={() => {
                                setIsMenuOpen(false)
                                setIsAddActivityOpen(true)
                            }}
                        >
                            {t('nav.addActivity')}
                        </button>
                    </div>
                </div>
            </nav>

            {isMenuOpen ? (
                <button
                    type="button"
                    className="site-navbar-backdrop"
                    aria-label={t('nav.closeMenu')}
                    onClick={() => setIsMenuOpen(false)}
                />
            ) : null}

            <AddActivityModal
                isOpen={isAddActivityOpen}
                onClose={() => setIsAddActivityOpen(false)}
            />
        </>
    )
}

export default Navbar
