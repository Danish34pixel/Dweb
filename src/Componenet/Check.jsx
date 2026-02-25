import React, { useState } from 'react'

const PortfolioBar = () => {
  const [hovered, setHovered] = useState(null)

  const links = ['GRAPHIC DESIGN', 'PHOTOGRAPHY', 'WEB DEVELOPMENT']

  return (
    <div style={{
      background: '#000',
      padding: '22px 36px',
      display: 'flex',
      alignItems: 'center',
      gap: '40px',
      fontFamily: "'Arial Narrow', Arial, sans-serif",
      letterSpacing: '0.08em',
    }}>
      <span style={{
        color: '#fff',
        fontSize: '13px',
        fontWeight: '700',
        whiteSpace: 'nowrap',
      }}>
        CHECK OUR FULL PORTFOLIO:
      </span>

      <div style={{ display: 'flex', gap: '36px' }}>
        {links.map((link) => (
          <a
            key={link}
            href="#"
            onMouseEnter={() => setHovered(link)}
            onMouseLeave={() => setHovered(null)}
            style={{
              color: '#fff',
              fontSize: '13px',
              fontWeight: '400',
              fontStyle: 'italic',
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
              letterSpacing: '0.08em',
              cursor: 'pointer',
              color: hovered === link ? '#FF6B00' : '#fff',
              opacity: hovered && hovered !== link ? 0.45 : 1,
              transition: 'color 0.2s ease, opacity 0.2s ease',
            }}
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  )
}

export default PortfolioBar