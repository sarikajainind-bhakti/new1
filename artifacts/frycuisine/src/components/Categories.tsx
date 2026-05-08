import breakfastImg from "../assets/breakfast.png";
import avocadoImg from "../assets/avocado.png";
import proteinbowlImg from "../assets/proteinbowl.png";
import greensaladImg from "../assets/greensalad.png";
import nasigorengImg from "../assets/nasigoreng.png";
import momoImg from "../assets/momo.png";

const categories = [
  { name: "Breakfast",   image: breakfastImg },
  { name: "Lunch",       image: proteinbowlImg },
  { name: "Dinner",      image: nasigorengImg },
  { name: "Street Food", image: momoImg },
  { name: "Fast Food",   image: avocadoImg },
  { name: "Salad",       image: greensaladImg },
];

export function Categories() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "44px 24px 52px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>

        {/* Section heading: "EXPLORE FOOD BY" + "Category" in script */}
        <div style={{ marginBottom: "36px" }}>
          <h2 style={{
            fontFamily: "'Cinzel', 'Cinzel Decorative', serif",
            fontWeight: 700,
            fontSize: "clamp(20px, 3.5vw, 32px)",
            color: "#1A1A1A",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            lineHeight: 1.2,
          }}>
            Explore Food by{" "}
            <span style={{
              fontFamily: "'Great Vibes', cursive",
              fontWeight: 400,
              fontSize: "clamp(28px, 5vw, 48px)",
              color: "#6E4B2A",
              textTransform: "none",
              letterSpacing: "0",
            }}>
              Category
            </span>
          </h2>
        </div>

        {/* Category circles row */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "12px",
          flexWrap: "wrap",
        }}>
          {categories.map((cat, idx) => (
            <div key={idx} style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
              width: "110px",
            }}>
              <div style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "3px solid #e8dfd4",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                marginBottom: "10px",
              }}>
                <img
                  src={cat.image}
                  alt={cat.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
              <span style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "14px",
                color: "#6E4B2A",
                textAlign: "center",
              }}>
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
