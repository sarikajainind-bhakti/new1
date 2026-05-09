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

function CurveLeft() {
  return (
    <svg
      width="80"
      height="220"
      viewBox="0 0 80 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", opacity: 0.55 }}
    >
      <path
        d="M70 10 C 40 30, 10 50, 30 80 C 50 110, 80 120, 60 150 C 40 180, 10 190, 30 215"
        stroke="#B8966A"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M55 5 C 25 25, 5 55, 20 85 C 35 115, 65 125, 45 155 C 25 185, 5 200, 20 220"
        stroke="#B8966A"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
        opacity="0.5"
      />
      <circle cx="70" cy="10" r="3" fill="#B8966A" />
      <circle cx="30" cy="215" r="3" fill="#B8966A" />
    </svg>
  );
}

function CurveRight() {
  return (
    <svg
      width="80"
      height="220"
      viewBox="0 0 80 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%) scaleX(-1)", opacity: 0.55 }}
    >
      <path
        d="M70 10 C 40 30, 10 50, 30 80 C 50 110, 80 120, 60 150 C 40 180, 10 190, 30 215"
        stroke="#B8966A"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M55 5 C 25 25, 5 55, 20 85 C 35 115, 65 125, 45 155 C 25 185, 5 200, 20 220"
        stroke="#B8966A"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
        opacity="0.5"
      />
      <circle cx="70" cy="10" r="3" fill="#B8966A" />
      <circle cx="30" cy="215" r="3" fill="#B8966A" />
    </svg>
  );
}

export function WorldCuisine() {
  return (
    <section style={{ backgroundColor: "#FAF7F2", padding: "44px 0 52px", position: "relative", overflow: "hidden" }}>

      {/* Decorative curve lines */}
      <CurveLeft />
      <CurveRight />

      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 60px", position: "relative" }}>

        {/* Section heading — Libre Baskerville with flanking lines + diamonds */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "36px" }}>
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

        {/* 3 country cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
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
              <div style={{ width: "100%", height: "190px", overflow: "hidden" }}>
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
                padding: "18px 16px 20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                flex: 1,
              }}>
                {/* Flag + Country name */}
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                  <span style={{ fontSize: "22px", lineHeight: 1 }}>{item.flag}</span>
                  <p style={{
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: "italic",
                    fontSize: "18px",
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
                  marginBottom: "16px",
                }}>
                  {item.dishes}
                </p>

                {/* READ MORE button */}
                <button
                  style={{
                    backgroundColor: "#B5451B",
                    color: "#fff",
                    border: "none",
                    padding: "9px 20px",
                    fontFamily: "'Vollkorn', serif",
                    fontWeight: 600,
                    fontSize: "11px",
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
      </div>
    </section>
  );
}
