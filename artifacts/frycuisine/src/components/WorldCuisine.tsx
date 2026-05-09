export function WorldCuisine() {
  const countries = [
    { flag: "🇮🇳", name: "India",  dish: "Paneer Chicken Tikka" },
    { flag: "🇰🇷", name: "Korea",  dish: "Tteok-bokki" },
    { flag: "🇮🇹", name: "Italy",  dish: "Pasta Bolognese" },
  ];

  return (
    <section style={{ backgroundColor: "#ffffff", padding: "40px 24px 48px" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>

        {/* Section title — Libre Baskerville, centred with dashed lines */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "36px" }}>
          <div style={{ flex: 1, borderTop: "1px solid #bbb" }} />
          <span style={{ color: "#bbb", fontSize: "14px" }}>✦</span>
          <h2 style={{
            fontFamily: "'Libre Baskerville', serif",
            fontWeight: 700,
            fontSize: "clamp(14px, 2.2vw, 20px)",
            color: "#1A1A1A",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}>
            World Famous Food by Country
          </h2>
          <span style={{ color: "#bbb", fontSize: "14px" }}>✦</span>
          <div style={{ flex: 1, borderTop: "1px solid #bbb" }} />
        </div>

        {/* 3 country cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
          {countries.map((item, idx) => (
            <div key={idx} style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              padding: "24px 16px 20px",
              border: "1px solid #eee",
              backgroundColor: "#fff",
            }}>
              {/* Flag circle */}
              <div style={{
                width: "72px",
                height: "72px",
                borderRadius: "50%",
                border: "2px solid #e0d8cc",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "36px",
                marginBottom: "12px",
                backgroundColor: "#f9f6f1",
              }}>
                {item.flag}
              </div>

              {/* Country name — Playfair Display italic */}
              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontSize: "17px",
                color: "#6E4B2A",
                marginBottom: "4px",
              }}>
                {item.name}
              </p>

              {/* Dish name — Playfair Display bold (Hatton substitute) */}
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "14px",
                color: "#1A1A1A",
                marginBottom: "16px",
                lineHeight: 1.4,
              }}>
                {item.dish}
              </h3>

              {/* Description — Lora */}
              <p style={{
                fontFamily: "'Lora', serif",
                fontSize: "12px",
                color: "#666",
                lineHeight: 1.6,
                marginBottom: "16px",
              }}>
                {item.name === "India" && "Rich, aromatic spices with creamy paneer and tikka masala."}
                {item.name === "Korea" && "Spicy rice cakes in fiery sauce — Korea's beloved street food."}
                {item.name === "Italy" && "Slow-simmered meat sauce with pasta, the Italian classic."}
              </p>

              {/* Explore button — Vollkorn */}
              <button style={{
                border: "1px solid #333",
                padding: "7px 22px",
                fontSize: "11px",
                fontFamily: "'Vollkorn', serif",
                fontWeight: 600,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: "#1A1A1A",
                background: "transparent",
                cursor: "pointer",
                transition: "background 0.2s, color 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "#1A1A1A";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#1A1A1A";
              }}
              >
                Explore
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
