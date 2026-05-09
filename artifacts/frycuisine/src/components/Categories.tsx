import breakfastImg from "../assets/breakfast.png";
import corndogsImg from "../assets/corndogs.png";
import proteinbowlImg from "../assets/proteinbowl.png";
import greensaladImg from "../assets/greensalad.png";
import nasigorengImg from "../assets/nasigoreng.png";
import momoImg from "../assets/momo.png";
import chocolateImg from "../assets/chocolate.png";
import avocadoImg from "../assets/avocado.png";

const categories = [
  { name: "Street Food",  image: momoImg },
  { name: "Fast Food",    image: corndogsImg },
  { name: "Vegan Food",   image: greensaladImg },
  { name: "Fried Food",   image: proteinbowlImg },
  { name: "Desserts",     image: chocolateImg },
  { name: "Snacks",       image: avocadoImg },
  { name: "Breakfast",    image: breakfastImg },
  { name: "Dinner",       image: nasigorengImg },
];

export function Categories() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "48px 24px 56px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>

        {/* Heading block */}
        <div style={{ marginBottom: "40px" }}>
          {/* Row 1: EXPLORE FOOD BY */}
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
            Explore Food By
          </div>

          {/* Row 2: line + "Category" script + line */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div style={{
              width: "60px",
              borderTop: "1.5px solid #C4A882",
              marginBottom: "4px",
              flexShrink: 0,
            }} />
            <span style={{
              fontFamily: "'Great Vibes', cursive",
              fontWeight: 400,
              fontSize: "clamp(32px, 5.5vw, 52px)",
              color: "#6E4B2A",
              lineHeight: 1.1,
              display: "block",
            }}>
              Category
            </span>
            <div style={{
              flex: 1,
              maxWidth: "220px",
              borderTop: "1.5px solid #C4A882",
              marginBottom: "4px",
            }} />
          </div>
        </div>

        {/* 4 × 2 oval grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px 16px",
        }}>
          {categories.map((cat, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
                gap: "10px",
              }}
            >
              {/* Oval image */}
              <div
                style={{
                  width: "148px",
                  height: "168px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "3px solid #EAE0D4",
                  boxShadow: "0 3px 14px rgba(0,0,0,0.09)",
                  flexShrink: 0,
                  transition: "box-shadow 0.3s ease",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 6px 22px rgba(0,0,0,0.18)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 3px 14px rgba(0,0,0,0.09)";
                }}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.4s ease",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.07)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>

              {/* Label */}
              <span style={{
                fontFamily: "'Lora', serif",
                fontStyle: "italic",
                fontSize: "13px",
                color: "#555",
                textAlign: "center",
                letterSpacing: "0.02em",
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
