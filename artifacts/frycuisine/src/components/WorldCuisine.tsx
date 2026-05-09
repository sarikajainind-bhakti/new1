import nasigorengImg from "../assets/nasigoreng.png";
import momoImg from "../assets/momo.png";
import heroImg from "../assets/hero.png";

const countries = [
  {
    flag: "🇮🇳",
    name: "India",
    dishes: "Butter Chicken, Dosa",
    image: nasigorengImg,
  },
  {
    flag: "🇰🇷",
    name: "Korea",
    dishes: "Kimchi, Bibimbap",
    image: momoImg,
  },
  {
    flag: "🇮🇹",
    name: "Italy",
    dishes: "Pizza & Pasta",
    image: heroImg,
  },
];

function CurveSVG({ flip }: { flip?: boolean }) {
  return (
    <svg
      width="52"
      height="260"
      viewBox="0 0 52 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        flexShrink: 0,
        opacity: 0.6,
        transform: flip ? "scaleX(-1)" : undefined,
      }}
    >
      <path
        d="M42 8 C 20 30, 4 55, 22 90 C 40 125, 50 140, 32 175 C 14 210, 4 230, 20 252"
        stroke="#B8966A"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M28 4 C 8 28, 0 60, 14 95 C 28 130, 38 148, 22 182 C 6 216, 2 238, 14 256"
        stroke="#B8966A"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
        opacity="0.45"
      />
      <circle cx="42" cy="8" r="3" fill="#B8966A" />
      <circle cx="20" cy="252" r="3" fill="#B8966A" />
    </svg>
  );
}

export function WorldCuisine() {
  return (
    <section style={{ backgroundColor: "#FAF7F2", padding: "44px 0 52px" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 16px" }}>

        {/* Section heading — Libre Baskerville with flanking lines + diamonds */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "36px", padding: "0 44px" }}>
          <div style={{ flex: 1, borderTop: "1px solid #C4A882" }} />
          <span style={{ color: "#C4A882", fontSize: "12px" }}>◆</span>
          <h2 style={{
            fontFamily: "'Libre Baskerville', serif",
            fontWeight: 700,
            fontSize: "clamp(14px, 2.2vw, 20px)",
            color: "#1A1A1A",
            letterSpacing: "0.06em",
            whiteSpace: "nowrap",
          }}>
            World Famous Food by Country
          </h2>
          <span style={{ color: "#C4A882", fontSize: "12px" }}>◆</span>
          <div style={{ flex: 1, borderTop: "1px solid #C4A882" }} />
        </div>

        {/* Curves + Cards in a flex row — curves naturally centre-align with the cards */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>

          {/* Left decorative curve */}
          <CurveSVG />

          {/* 3 country cards */}
          <div style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {countries.map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "#fff",
                  border: "1px solid #EAE3D8",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Food image — full width */}
                <div style={{ width: "100%", height: "185px", overflow: "hidden" }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      transition: "transform 0.4s ease",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                  />
                </div>

                {/* Card body */}
                <div style={{
                  padding: "16px 14px 18px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: 1,
                }}>
                  {/* Flag + Country name */}
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                    <span style={{ fontSize: "20px", lineHeight: 1 }}>{item.flag}</span>
                    <p style={{
                      fontFamily: "'Playfair Display', serif",
                      fontStyle: "italic",
                      fontSize: "17px",
                      color: "#6E4B2A",
                      margin: 0,
                    }}>
                      {item.name}
                    </p>
                  </div>

                  {/* Dishes */}
                  <p style={{
                    fontFamily: "'Lora', serif",
                    fontSize: "13px",
                    color: "#555",
                    lineHeight: 1.55,
                    marginBottom: "14px",
                  }}>
                    {item.dishes}
                  </p>

                  {/* READ MORE button */}
                  <button
                    style={{
                      backgroundColor: "#B5451B",
                      color: "#fff",
                      border: "none",
                      padding: "9px 18px",
                      fontFamily: "'Vollkorn', serif",
                      fontWeight: 600,
                      fontSize: "10.5px",
                      letterSpacing: "1.8px",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      transition: "background-color 0.2s",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#8C3412")}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#B5451B")}
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right decorative curve (mirrored) */}
          <CurveSVG flip />

        </div>
      </div>
    </section>
  );
}
