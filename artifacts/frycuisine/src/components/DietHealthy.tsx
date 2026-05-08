import avocadoImg from "../assets/avocado.png";
import proteinbowlImg from "../assets/proteinbowl.png";
import greensaladImg from "../assets/greensalad.png";
import nasigorengImg from "../assets/nasigoreng.png";
import breakfastImg from "../assets/breakfast.png";

const items = [
  { title: "Keto Avocado Toast",      image: avocadoImg },
  { title: "High Protein Oats Bowl",  image: proteinbowlImg },
  { title: "Green Bowl Salad",        image: greensaladImg },
  { title: "High Light Protein",      image: nasigorengImg },
  { title: "Matcha Energy Bar",       image: breakfastImg },
];

export function DietHealthy() {
  return (
    <section style={{ backgroundColor: "#F8F6F1", padding: "44px 24px 52px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>

        {/* Heading — bold, centered */}
        <h2 style={{
          fontFamily: "'Cinzel Decorative', 'Cinzel', serif",
          fontWeight: 700,
          fontSize: "clamp(18px, 3.2vw, 30px)",
          color: "#1A1A1A",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          textAlign: "center",
          marginBottom: "36px",
        }}>
          Diet &amp; Healthy Food Queen
        </h2>

        {/* 5-card row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "20px",
        }}>
          {items.map((item, idx) => (
            <div key={idx} style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              cursor: "pointer",
            }}>
              {/* Square image */}
              <div style={{
                width: "100%",
                aspectRatio: "1",
                overflow: "hidden",
                marginBottom: "12px",
                border: "3px solid #fff",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                borderRadius: "50%",
              }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>

              {/* Title */}
              <p style={{
                fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
                fontStyle: "italic",
                fontSize: "14px",
                color: "#6E4B2A",
                lineHeight: 1.4,
                marginBottom: "10px",
                minHeight: "38px",
              }}>
                {item.title}
              </p>

              {/* Explore */}
              <button style={{
                border: "1px solid #888",
                padding: "4px 14px",
                fontSize: "10px",
                fontFamily: "'Lora', serif",
                fontWeight: 600,
                letterSpacing: "1.2px",
                textTransform: "uppercase",
                color: "#555",
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
