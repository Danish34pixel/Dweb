import React, { useState } from 'react'

const portfolioItems = [
  {
    id: 1,
    category: 'PHOTOGRAPHY',
    year: '2024',
    title: 'RAPIDE X ALAWI',
    image: 'https://1085.studio/assets/images/front-portfolio/rapidexalawi-event-photography-2024.webp',
  },
  {
    id: 2,
    category: 'PRINT DESIGN',
    year: '2023',
    title: 'INEA ENGINEERING AG',
    image: 'https://1085.studio/assets/images/front-portfolio/inea-engineering-print-design-2023.webp',
  },
  {
    id: 3,
    category: 'EVENT PHOTOGRAPHY',
    year: '2025',
    title: 'KHELANI CRASH TOUR',
    image: 'https://1085.studio/assets/images/front-portfolio/kehlani-crash-tour-event-photography-2025.webp',
  },
  {
    id: 4,
    category: 'IDENTITY',
    year: '2024',
    title: 'BAYTEC SOLUTIONS AG',
    image: 'https://1085.studio/assets/images/front-portfolio/baytec-solutions-brand-identity-2024.webp',
  },
  {
    id: 5,
    category: 'SOCIAL MEDIA',
    year: '2024',
    title: 'ARISO BRAND',
    image: 'https://1085.studio/assets/images/front-portfolio/ariso-restaurant-social-media-2024.webp',
  },
  {
    id: 6,
    category: 'ADVERTISING',
    year: '2024',
    title: '1085 STUDIO',
    image: 'https://1085.studio/assets/images/front-portfolio/1085-studio-advertising-campaign-2024.webp',
  },
  {
    id: 7,
    category: 'LOGO & BRANDING',
    year: '2024',
    title: 'THE PEPINO',
    image: 'https://1085.studio/assets/images/front-portfolio/da-pepino-logo-branding-2024.webp',
  },
  {
    id: 8,
    category: 'WEB DEVELOPMENT',
    year: '2025',
    title: 'SALYTS MEDICAL',
    image: 'https://1085.studio/assets/images/front-portfolio/sanivis-web-development-2025.webp',
  },
]

const PortfolioCard = ({ item }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#111',
        cursor: 'pointer',
        overflow: 'hidden',
      }}
    >
      {/* Header row */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 4px 8px 4px',
        }}
      >
        <span
          style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontSize: '11px',
            fontWeight: '600',
            letterSpacing: '0.08em',
            color: '#fff',
            textTransform: 'uppercase',
          }}
        >
          {item.category}
        </span>
        <span
          style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontSize: '11px',
            fontWeight: '400',
            color: '#888',
            letterSpacing: '0.04em',
          }}
        >
          {item.year}
        </span>
      </div>

      {/* Image container */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '4/3',
          overflow: 'hidden',
        }}
      >
        <img
          src={item.image}
          alt={item.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transform: hovered ? 'scale(1.04)' : 'scale(1)',
            transition: 'transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        />
        {/* Hover overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.35)',
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.35s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
         
        </div>
      </div>

      {/* Title */}
      <div
        style={{
          padding: '10px 4px 16px 4px',
        }}
      >
        <span
          style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontSize: '13px',
            fontWeight: '500',
            letterSpacing: '0.06em',
            color: '#ccc',
            textTransform: 'uppercase',
          }}
        >
          {item.title}
        </span>
      </div>
    </div>
  )
}

const Card = () => {
  return (
    <div
      style={{
        background: '#0a0a0a',
        minHeight: '100vh',
        padding: '40px 24px',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2px',
          maxWidth: '1400px',
          margin: '0 auto',
        }}
      >
        {portfolioItems.map((item) => (
          <PortfolioCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default Card