import avocadoImg from "../assets/avocado.png";
import proteinbowlImg from "../assets/proteinbowl.png";
import greensaladImg from "../assets/greensalad.png";

const items = [
  {
    category: "Weight Loss Diet Foods",
    title: "Quinoa Veg Salad Bowl",
    desc: "Fresh vegetables with quinoa and light dressing. Perfect for healthy weight loss and clean eating.",
    image: greensaladImg,
  },
  {
    category: "High Protein Diet Foods",
    title: "Paneer Protein Power Bowl",
    desc: "High protein paneer with veggies and healthy options. Keeps you full and boosts energy.",
    image: proteinbowlImg,
  },
  {
    category: "Keto Food List",
    title: "Avocado Egg Keto Plate",
    desc: "Low carb avocado and eggs for keto lifestyle. Supports fat burning and steady energy.",
    image: avocadoImg,
  },
];

export function DietHealthy() {
  return (
    <section style={{ backgroundColor: "#F8F6F1", padding: "52px 24px 60px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>

        {/* Heading */}
        <div style={{ marginBottom: "40px" }}>
          <div style={{
            fontFamily: "'Cinzel', 'Cinzel Decorative', serif",
            fontWeight: 700,
            fontSize: "clamp(20px, 3.2vw, 30px)",
            color: "#1A1A1A",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            lineHeight: 1.15,
            marginBottom: "2px",
          }}>
            Diet &amp;
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div style={{ width: "60px", borderTop: "1.5px solid #C4A882", marginBottom: "4px", flexShrink: 0 }} />
            <span style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "clamp(32px, 5.5vw, 52px)",
              color: "#6E4B2A",
              lineHeight: 1.1,
              display: "block",
            }}>
              Healthy
            </span>
            <div style={{ flex: 1, maxWidth: "220px", borderTop: "1.5px solid #C4A882", marginBottom: "4px" }} />
          </div>
        </div>

        {/* 3-card grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
        }}>
          {items.map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "#ffffff",
                overflow: "hidden",
                boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                cursor: "pointer",
              }}
            >
              {/* Image */}
              <div style={{ width: "100%", height: "200px", overflow: "hidden" }}>
                <img
                  src={item.image}
                  alt={item.title}
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
              <div style={{ padding: "20px 18px 22px" }}>
                {/* Category label */}
                <p style={{
                  fontFamily: "'Lora', serif",
                  fontWeight: 700,
                  fontSize: "13px",
                  color: "#1A1A1A",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  marginBottom: "8px",
                }}>
                  {item.category}
                </p>

                {/* Recipe title — italic, underlined, brown */}
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
                  fontStyle: "italic",
                  fontWeight: 600,
                  fontSize: "17px",
                  color: "#6E4B2A",
                  textDecoration: "underline",
                  textDecorationColor: "#6E4B2A",
                  marginBottom: "10px",
                  lineHeight: 1.35,
                }}>
                  {item.title}
                </h3>

                {/* Description */}
                <p style={{
                  fontFamily: "'Lora', serif",
                  fontSize: "12.5px",
                  color: "#666666",
                  lineHeight: 1.65,
                  marginBottom: "18px",
                }}>
                  {item.desc}
                </p>

                {/* Read More button */}
                <button
                  style={{
                    backgroundColor: "#4A2C1A",
                    color: "#ffffff",
                    border: "none",
                    padding: "9px 22px",
                    fontFamily: "'Lora', serif",
                    fontWeight: 700,
                    fontSize: "11px",
                    letterSpacing: "1.8px",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "background-color 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#6E4B2A")}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#4A2C1A")}
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
