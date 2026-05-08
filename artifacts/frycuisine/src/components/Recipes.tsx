import nasigorengImg from "../assets/nasigoreng.png";
import avocadoImg from "../assets/avocado.png";
import proteinbowlImg from "../assets/proteinbowl.png";
import breakfastImg from "../assets/breakfast.png";

const recipes = [
  {
    date: "January 13, 2026",
    title: "Masala Frankie Roll",
    desc: "Spicy vegetable stuffing wrapped in multi roll with tangy sauces, loaded with fresh veggies and Indian spices for Indian street style flavor.",
    image: breakfastImg,
  },
  {
    date: "January 21, 2026",
    title: "Fruit Yogurt Bowl",
    desc: "Fresh seasonal fruits blended with creamy low fat yogurt. Rich in vitamins, protein and natural sweetness. A refreshing and nutritious super snack.",
    image: avocadoImg,
  },
  {
    date: "January 21, 2026",
    title: "Air Fryer Paneer Tikka",
    desc: "Marinated paneer grilled to smoky perfection in an Air Fryer. Low calorie, full of taste and rich flavors. A wholesome and satisfying everyday meal.",
    image: proteinbowlImg,
  },
  {
    date: "January 21, 2026",
    title: "Dal Tadka & Rice",
    desc: "Comforting traditional lentils with aromatic Indian spices. Served with steamed rice for a wholesome homemade dish. Packed with protein and everyday nutrition.",
    image: nasigorengImg,
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
          marginBottom: "36px",
        }}>
          Recipes Section
        </h2>

        {/* Recipe list */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {recipes.map((item, idx) => (
            <div key={idx} style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "28px",
              padding: "24px 0",
              borderTop: idx === 0 ? "1px solid #e8e2d8" : "none",
              borderBottom: "1px solid #e8e2d8",
            }}>
              {/* Text LEFT */}
              <div style={{ flex: 1 }}>
                {/* Date */}
                <p style={{
                  fontFamily: "'Lora', serif",
                  fontSize: "11px",
                  color: "#999",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "6px",
                }}>
                  {item.date}
                </p>

                {/* Title */}
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
                  fontStyle: "italic",
                  fontWeight: 600,
                  fontSize: "20px",
                  color: "#6E4B2A",
                  marginBottom: "10px",
                  lineHeight: 1.3,
                }}>
                  {item.title}
                </h3>

                {/* Description */}
                <p style={{
                  fontFamily: "'Lora', serif",
                  fontSize: "13.5px",
                  color: "#555555",
                  lineHeight: 1.7,
                  marginBottom: "14px",
                }}>
                  {item.desc}
                </p>

                {/* Continue Reading link */}
                <a
                  href="#"
                  style={{
                    fontFamily: "'Lora', serif",
                    fontSize: "11px",
                    fontWeight: 600,
                    color: "#1A1A1A",
                    textDecoration: "none",
                    letterSpacing: "1.8px",
                    textTransform: "uppercase",
                    borderBottom: "1px solid #1A1A1A",
                    paddingBottom: "2px",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#6E4B2A", e.currentTarget.style.borderColor = "#6E4B2A")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#1A1A1A", e.currentTarget.style.borderColor = "#1A1A1A")}
                >
                  Continue Reading
                </a>
              </div>

              {/* Image RIGHT */}
              <div style={{
                width: "155px",
                height: "115px",
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
