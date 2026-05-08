import nasigorengImg from "../assets/nasigoreng.png";
import avocadoImg from "../assets/avocado.png";
import proteinbowlImg from "../assets/proteinbowl.png";
import greensaladImg from "../assets/greensalad.png";

const recipes = [
  {
    title: "Nasi Goreng Kit Kat",
    desc: "A unique fusion of sweet and savory flavors in this viral Indonesian fried rice variant with Kit Kat crumble.",
    image: nasigorengImg,
  },
  {
    title: "Dark Sugar Bowl",
    desc: "Rich, caramel-noted dessert bowl with brown sugar pearls, coconut milk, and aromatic spices.",
    image: avocadoImg,
  },
  {
    title: "Al Dente Pasta Thinking",
    desc: "The perfect pasta technique for your next Italian dinner night — firm, flavorful, and absolutely satisfying.",
    image: proteinbowlImg,
  },
  {
    title: "The Tiefste Wok",
    desc: "Deep-fried wok specialties that bring out the true bold flavor of Asian street food culture.",
    image: greensaladImg,
  },
];

export function Recipes() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "44px 24px 52px" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>

        {/* Heading */}
        <h2 style={{
          fontFamily: "'Cinzel Decorative', 'Cinzel', serif",
          fontWeight: 700,
          fontSize: "clamp(22px, 4vw, 36px)",
          color: "#1A1A1A",
          textTransform: "uppercase",
          letterSpacing: "0.04em",
          marginBottom: "32px",
        }}>
          Recipes Section
        </h2>

        {/* Recipe list */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {recipes.map((item, idx) => (
            <div key={idx} style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              padding: "20px 0",
              borderBottom: "1px solid #f0ece6",
            }}>
              {/* Text LEFT */}
              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
                  fontStyle: "italic",
                  fontWeight: 600,
                  fontSize: "20px",
                  color: "#6E4B2A",
                  marginBottom: "8px",
                  lineHeight: 1.3,
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontFamily: "'Lora', serif",
                  fontSize: "13.5px",
                  color: "#555555",
                  lineHeight: 1.65,
                  marginBottom: "14px",
                }}>
                  {item.desc}
                </p>
                <button style={{
                  border: "1px solid #555",
                  padding: "6px 18px",
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

              {/* Image RIGHT */}
              <div style={{
                width: "160px",
                height: "120px",
                flexShrink: 0,
                overflow: "hidden",
              }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
