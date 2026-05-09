import nasigorengImg from "../assets/nasigoreng.png";
import avocadoImg from "../assets/avocado.png";
import proteinbowlImg from "../assets/proteinbowl.png";
import breakfastImg from "../assets/breakfast.png";

const recipes = [
  {
    date: "January 13, 2026",
    title: "Masala Frankie Roll",
    desc: "Spicy vegetable stuffing wrapped in soft roll with tangy sauces. Loaded with fresh veggies and Indian spices for bold taste. A quick and filling street-style meal.",
    image: breakfastImg,
    imageLeft: false,
  },
  {
    date: "January 21, 2026",
    title: "Fruit Yogurt Bowl",
    desc: "Fresh seasonal fruits blended with creamy low-fat yogurt. Rich in vitamins, protein and natural sweetness. A refreshing and nutritious anytime snack.",
    image: avocadoImg,
    imageLeft: true,
  },
  {
    date: "January 21, 2026",
    title: "Air Fryer Paneer Tikka",
    desc: "Marinated paneer grilled to smoky perfection in air fryer. Low oil yet full of spicy and rich flavors. Great healthy alternative to fried snacks.",
    image: proteinbowlImg,
    imageLeft: false,
  },
  {
    date: "January 21, 2026",
    title: "Dal Tadka & Rice",
    desc: "Slow cooked lentils tempered with aromatic Indian spices. Served with steamed rice for comforting homemade taste. Simple, nutritious and satisfying everyday meal.",
    image: nasigorengImg,
    imageLeft: true,
  },
];

export function Recipes() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "44px 24px 52px" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>

        {/* Heading */}
        <div style={{ marginBottom: "32px" }}>
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
            Our Best
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
              Recipes
            </span>
            <div style={{ flex: 1, maxWidth: "220px", borderTop: "1.5px solid #C4A882", marginBottom: "4px" }} />
          </div>
        </div>

        {/* Recipe list */}
        <div>
          {recipes.map((item, idx) => (
            <div key={idx}>
              {/* Separator before each entry */}
              <div style={{ borderTop: "1px solid #e0d8ce" }} />

              {/* Entry row — alternating image side */}
              <div style={{
                display: "flex",
                flexDirection: item.imageLeft ? "row" : "row-reverse",
                gap: "32px",
                padding: "26px 0",
                alignItems: "center",
              }}>
                {/* Image */}
                <div style={{
                  width: "210px",
                  height: "170px",
                  flexShrink: 0,
                  overflow: "hidden",
                }}>
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

                {/* Text */}
                <div style={{ flex: 1 }}>
                  {/* Date */}
                  <p style={{
                    fontFamily: "'Lora', serif",
                    fontSize: "11px",
                    color: "#999",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: "7px",
                  }}>
                    {item.date}
                  </p>

                  {/* Title */}
                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
                    fontStyle: "italic",
                    fontWeight: 600,
                    fontSize: "22px",
                    color: "#6E4B2A",
                    marginBottom: "10px",
                    lineHeight: 1.25,
                  }}>
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p style={{
                    fontFamily: "'Lora', serif",
                    fontSize: "13.5px",
                    color: "#555555",
                    lineHeight: 1.72,
                    marginBottom: "16px",
                  }}>
                    {item.desc}
                  </p>

                  {/* Continue Reading */}
                  <a
                    href="#"
                    style={{
                      fontFamily: "'Lora', serif",
                      fontSize: "10.5px",
                      fontWeight: 600,
                      color: "#1A1A1A",
                      textDecoration: "none",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      borderBottom: "1px solid #1A1A1A",
                      paddingBottom: "2px",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = "#6E4B2A";
                      e.currentTarget.style.borderColor = "#6E4B2A";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = "#1A1A1A";
                      e.currentTarget.style.borderColor = "#1A1A1A";
                    }}
                  >
                    Continue Reading
                  </a>
                </div>
              </div>
            </div>
          ))}
          {/* Bottom separator */}
          <div style={{ borderTop: "1px solid #e0d8ce" }} />
        </div>

        {/* VIEW MORE button */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
          <button
            style={{
              backgroundColor: "#1A1A1A",
              color: "#ffffff",
              border: "none",
              padding: "14px 44px",
              fontFamily: "'Lora', serif",
              fontWeight: 700,
              fontSize: "11.5px",
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#6E4B2A")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#1A1A1A")}
          >
            View More
          </button>
        </div>
      </div>
    </section>
  );
}
