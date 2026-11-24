import heroImg1Webp from '../assets/images/atletika.webp'
import heroImg1 from '../assets/images/atletika.png'
import heroImg3Webp from '../assets/images/balet.webp'
import heroImg3 from '../assets/images/balet.png'
import heroImg4Webp from '../assets/images/tenis.webp'
import heroImg4 from '../assets/images/tenis.jpg'

type HeroImageProps = {
    webp: string
    fallback: string
    alt: string
    className: string
    fetchPriority?: 'high' | 'low' | 'auto'
}

const HeroImage = ({ webp, fallback, alt, className, fetchPriority }: HeroImageProps) => (
    <picture>
        <source srcSet={webp} type="image/webp" />
        <img
            src={fallback}
            alt={alt}
            decoding="async"
            className={className}
            {...(fetchPriority
                ? ({ fetchpriority: fetchPriority } as { fetchpriority: 'high' | 'low' | 'auto' })
                : {})}
        />
    </picture>
)

const HeroMedia = () => (
    <div className="hero-media">
        <div className="hero-media-stage">
            <HeroImage
                webp={heroImg1Webp}
                fallback={heroImg1}
                alt="Atletika za decu"
                fetchPriority="high"
                className="hero-media-img hero-media-img--atletika shadow-card ring-4 ring-mint-soft"
            />
            <HeroImage
                webp={heroImg3Webp}
                fallback={heroImg3}
                alt="Ples i balet za decu"
                className="hero-media-img hero-media-img--balet shadow-card ring-4 ring-peach-soft"
            />
            <HeroImage
                webp={heroImg4Webp}
                fallback={heroImg4}
                alt="Tenis za decu"
                className="hero-media-img hero-media-img--tenis shadow-card ring-4 ring-peach-soft"
            />
        </div>
    </div>
)

export default HeroMedia
