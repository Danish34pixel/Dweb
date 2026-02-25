import React, { useEffect, useRef, useState } from 'react'
import DecryptedText from './DecryptedText'

const stats = [
  { value: '120+', label: 'creative assets delivered' },
  { value: '15+', label: 'industries served' },
  { value: '85%', label: 'returning clients &\nlong-term collaborations' },
  { value: '40+', label: 'partners &\ncollaborators' },
]

const NoBoundaries = () => {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div style={{
      background: '#000',
      minHeight: '100vh',
      color: '#fff',
      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
      padding: '0',
      margin: '0',
      boxSizing: 'border-box',
    }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .nav-link {
          color: #fff;
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: opacity 0.2s;
        }
        .nav-link:hover { opacity: 0.5; }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #fff;
          display: inline-block;
        }

        .hero-title {
          font-size: clamp(52px, 8vw, 120px);
          font-weight: 900;
          letter-spacing: -0.02em;
          line-height: 1;
          text-transform: uppercase;
        }

        .hero-code {
          font-size: clamp(52px, 8vw, 120px);
          font-weight: 900;
          letter-spacing: -0.02em;
          line-height: 1;
          text-transform: uppercase;
        }

        .stat-value {
          font-size: clamp(40px, 6vw, 80px);
          font-weight: 900;
          letter-spacing: -0.02em;
          line-height: 1;
          margin-bottom: 12px;
        }

        .stat-label {
          font-size: 13px;
          font-weight: 400;
          color: #fff;
          line-height: 1.5;
          white-space: pre-line;
        }

        .fade-item {
          opacity: 0;
          animation: fadeUp 0.7s ease forwards;
        }

        .fade-0 { animation-delay: 0.05s; }
        .fade-1 { animation-delay: 0.15s; }
        .fade-2 { animation-delay: 0.25s; }
        .fade-3 { animation-delay: 0.45s; }
        .fade-4 { animation-delay: 0.55s; }
        .fade-5 { animation-delay: 0.65s; }
        .fade-6 { animation-delay: 0.75s; }
        .fade-7 { animation-delay: 0.85s; }
        .fade-8 { animation-delay: 0.95s; }
        .fade-9 { animation-delay: 1.05s; }
      `}</style>

      {/* Nav */}
      
      {/* Hero */}
      <div style={{ padding: '32px 36px 0' }}>
        <div className="fade-item fade-1" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: 40,
        }}>
          <h1 className="hero-title">NO BOUNDARIES</h1>
          <span className="hero-code">S-0</span>
        </div>

        {/* Subtext */}
        <p className="fade-item fade-2" style={{
          fontSize: 15,
          lineHeight: 1.6,
          maxWidth: 520,
          color: '#fff',
          marginBottom: 80,
        }}>
          Zero isn't empty, it's potential. I design with zero compromise and zero noise: sharp identities, fast websites,
          and content that moves people and metrics.
        </p>

        {/* Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 24,
          marginBottom: 48,
        }}>
          {stats.map((stat, i) => (
            <div key={i} className={`fade-item fade-${5 + i}`}>
              <div className="stat-value">
                <DecryptedText 
                  text={stat.value}
                  sequential
                  revealDirection="start"
                  speed={80}
                  animateOn="both"
                  useOriginalCharsOnly={true}
                />
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="fade-item fade-9" style={{ fontSize: 12, color: '#fff', lineHeight: 1.6 }}>
          Selected metrics.<br />
          Last updated: Aug 2025.
        </p>
      </div>
    </div>
  )
}

export default NoBoundaries