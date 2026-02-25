import { useState } from "react";

const style = `
  .spec-btn { transition: color 0.25s ease; }
  .spec-btn:hover { color: #ff6a00 !important; }
  .spec-btn:hover .spec-plus { color: #ff6a00; }
  .spec-row { transition: border-color 0.25s ease; }
  .spec-row:hover { border-color: #ff6a00 !important; }
`;

const services = [
  {
    title: "STRATEGY & BRANDING",
    subtitle: null,
    description:
      "Crafting brand narratives and strategic frameworks that position your business for lasting impact. From market positioning to brand architecture, every decision is rooted in purpose.",
  },
  {
    title: "DESIGN & VISUAL IDENTITY",
    subtitle: null,
    description:
      "Building cohesive visual systems — logos, color palettes, typography, and guidelines — that communicate your values at a glance and scale seamlessly across every touchpoint.",
  },
  {
    title: "DIGITAL",
    subtitle: "Web Development",
    description:
      "Designing and developing performant, accessible web experiences. From landing pages to full-scale platforms, built with clean code and intentional UX.",
  },
  {
    title: "CONTENT CREATION",
    subtitle: "Photo/Video",
    description:
      "Producing compelling visual content that tells your story with authenticity. Photography, videography, and editing tailored to your brand's voice and audience.",
  },
  {
    title: "CAMPAIGNS & SOCIAL MEDIA",
    subtitle: null,
    description:
      "Strategizing and executing multi-channel campaigns that drive engagement and conversion. Data-informed creativity that keeps your brand culturally relevant.",
  },
];

export default function Specialization() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div
      style={{
        background: "#0a0a0a",
        minHeight: "100vh",
        padding: "60px 48px",
        fontFamily: "'Georgia', serif",
        color: "#fff",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "12px",
        }}
      >
        <h1
          style={{
            fontFamily: "'Arial Black', 'Helvetica Neue', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(32px, 5vw, 52px)",
            letterSpacing: "0.02em",
            margin: 0,
            textTransform: "uppercase",
          }}
        >
          SPECIALIZATION
        </h1>
        <span
          style={{
            fontFamily: "'Arial Black', 'Helvetica Neue', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(28px, 4vw, 48px)",
            letterSpacing: "0.02em",
          }}
        >
          S-5
        </span>
      </div>

      <style>{style}</style>
      <p
        style={{
          fontSize: "13px",
          color: "#ccc",
          fontFamily: "Georgia, serif",
          fontStyle: "normal",
          margin: "0 0 56px 0",
          letterSpacing: "0.01em",
        }}
      >
        My expertise spans five pillars, each designed to move ideas into impact.
      </p>

      {/* Accordion */}
      <div>
        {services.map((service, i) => (
          <div
            key={i}
            className="spec-row"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.2)",
              ...(i === services.length - 1
                ? { borderBottom: "1px solid rgba(255,255,255,0.2)" }
                : {}),
            }}
          >
            <button
              onClick={() => toggle(i)}
              className="spec-btn"
              style={{
                width: "100%",
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "28px 0",
                textAlign: "left",
                color: "#fff",
              }}
            >
              <span
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontStyle: "italic",
                  fontWeight: 700,
                  fontSize: "clamp(20px, 3vw, 32px)",
                  letterSpacing: "0.01em",
                  lineHeight: 1.1,
                }}
              >
                {service.title}
                {service.subtitle && (
                  <span
                    style={{
                      fontFamily: "Georgia, serif",
                      fontStyle: "italic",
                      fontWeight: 400,
                      fontSize: "clamp(12px, 1.5vw, 18px)",
                      marginLeft: "12px",
                      opacity: 0.9,
                    }}
                  >
                    ({service.subtitle})
                  </span>
                )}
              </span>

              <span
                className="spec-plus"
                style={{
                  fontSize: "24px",
                  fontWeight: 300,
                  lineHeight: 1,
                  transition: "transform 0.3s ease",
                  transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                  flexShrink: 0,
                  marginLeft: "24px",
                }}
              >
                +
              </span>
            </button>

            {/* Expanded content */}
            <div
              style={{
                maxHeight: openIndex === i ? "200px" : "0",
                overflow: "hidden",
                transition: "max-height 0.4s ease",
              }}
            >
              <p
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "15px",
                  lineHeight: "1.7",
                  color: "#bbb",
                  margin: "0 0 28px 0",
                  maxWidth: "680px",
                }}
              >
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}