export function WorldCuisine() {
  const countries = [
    { flag: "🇮🇳", name: "India",  dish: "Paneer Chicken Tikka" },
    { flag: "🇰🇷", name: "Korea",  dish: "Tteok-bokki" },
    { flag: "🇮🇹", name: "Italy",  dish: "Pasta Bolognese" },
  ];

  return (
    <section style={{ backgroundColor: "#ffffff", padding: "40px 24px 48px" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>

        {/* Section title with dashed lines + diamond */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "36px" }}>
          <div style={{ flex: 1, borderTop: "1px solid #bbb" }} />
          <span style={{ color: "#bbb", fontSize: "14px" }}>✦</span>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
            fontWeight: 600,
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

              {/* Country name italic */}
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "17px",
                color: "#6E4B2A",
                marginBottom: "4px",
              }}>
                {item.name}
              </p>

              {/* Dish name bold */}
              <h3 style={{
                fontFamily: "'Lora', serif",
                fontWeight: 700,
                fontSize: "14px",
                color: "#1A1A1A",
                marginBottom: "16px",
                lineHeight: 1.4,
              }}>
                {item.dish}
              </h3>

              {/* Explore button */}
              <button style={{
                border: "1px solid #333",
                padding: "6px 20px",
                fontSize: "11px",
                fontFamily: "'Lora', serif",
                fontWeight: 600,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: "#1A1A1A",
                background: "transparent",
                cursor: "pointer",
              }}>
                Explore
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
