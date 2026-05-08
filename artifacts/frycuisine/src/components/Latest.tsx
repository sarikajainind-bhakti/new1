import nasigorengImg from "../assets/nasigoreng.png";
import avocadoImg from "../assets/avocado.png";
import proteinbowlImg from "../assets/proteinbowl.png";
import greensaladImg from "../assets/greensalad.png";
import breakfastImg from "../assets/breakfast.png";
import corndogsImg from "../assets/corndogs.png";
import chocolateImg from "../assets/chocolate.png";
import momoImg from "../assets/momo.png";
import pancakesImg from "../assets/pancakes.png";
import heroImg from "../assets/hero.png";

const posts = [
  {
    tag: "Trending Food",
    date: "Jan 25",
    title: "Mexican Tacos Street Style",
    desc: "Spicy fillings wrapped in soft tortillas, garnished with fresh cilantro and lime juice.",
    image: momoImg,
    imgHeight: 200,
  },
  {
    tag: "Trending Food",
    date: "Jan 25",
    title: "Chocolate Lava Cake",
    desc: "Decadent molten chocolate center that flows like lava — warm, rich and irresistible.",
    image: chocolateImg,
    imgHeight: 150,
  },
  {
    tag: "Street Food",
    date: "Jan 20",
    title: "Creamy Butter Chicken Korma",
    desc: "Slow-cooked chicken in velvety butter sauce with aromatic spices and fresh cream.",
    image: heroImg,
    imgHeight: 170,
  },
  {
    tag: "Street Food",
    date: "Jan 20",
    title: "Samosa Chaat",
    desc: "Crispy samosas crushed and topped with tangy chutneys, yoghurt, and pomegranate.",
    image: breakfastImg,
    imgHeight: 140,
  },
  {
    tag: "Trending Food",
    date: "Jan 22",
    title: "Spicy Samosa Chaat",
    desc: "Spicy, tangy, and absolutely addictive — India's most loved street chaat snack.",
    image: avocadoImg,
    imgHeight: 160,
  },
  {
    tag: "Street Food",
    date: "Jan 18",
    title: "Oats & Toast Breakfast Bowl",
    desc: "A wholesome morning bowl with oats, sliced banana, berries, almond butter and honey.",
    image: proteinbowlImg,
    imgHeight: 180,
  },
  {
    tag: "Diet Time",
    date: "Jan 15",
    title: "Spinach Salad Bowl",
    desc: "Fresh baby spinach tossed with strawberries, walnuts and balsamic vinaigrette.",
    image: greensaladImg,
    imgHeight: 155,
  },
  {
    tag: "Trending Food",
    date: "Jan 12",
    title: "Creamy Chicken Korma",
    desc: "Rich north Indian curry with tender chicken pieces simmered in a cashew cream base.",
    image: nasigorengImg,
    imgHeight: 165,
  },
  {
    tag: "Street Food",
    date: "Jan 10",
    title: "Loaded Veggie Cheese Sandwich",
    desc: "Grilled multi-grain sandwich packed with veggies, cheese and herb mayo spread.",
    image: corndogsImg,
    imgHeight: 145,
  },
  {
    tag: "Diet Time",
    date: "Jan 8",
    title: "Dark Chocolate Energy Bar",
    desc: "No-bake bars made with dark chocolate, oats, chia seeds and natural sweeteners.",
    image: pancakesImg,
    imgHeight: 175,
  },
  {
    tag: "Trending Food",
    date: "Jan 5",
    title: "Trending Momo Dumplings",
    desc: "Steamed pockets of seasoned minced meat and veggies served with fiery chilli sauce.",
    image: momoImg,
    imgHeight: 185,
  },
  {
    tag: "Trending Food",
    date: "Jan 3",
    title: "Afghani Briyani",
    desc: "Slow-cooked fragrant rice layered with saffron, nuts and slow-braised tender meat.",
    image: heroImg,
    imgHeight: 150,
  },
];

// Split posts into 3 columns for masonry
function splitIntoColumns(items: typeof posts, cols: number) {
  const columns: (typeof posts)[] = Array.from({ length: cols }, () => []);
  items.forEach((item, i) => columns[i % cols].push(item));
  return columns;
}

export function Latest() {
  const columns = splitIntoColumns(posts, 3);

  return (
    <section style={{ backgroundColor: "#F8F6F1", padding: "48px 24px 56px" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>

        {/* Heading: "Latest from frycuisine" */}
        <div style={{ marginBottom: "32px" }}>
          <span style={{
            fontFamily: "'Lora', serif",
            fontWeight: 400,
            fontSize: "clamp(16px, 2vw, 22px)",
            color: "#888888",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
          }}>
            Latest from{" "}
          </span>
          <span style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "clamp(32px, 5vw, 52px)",
            color: "#1A1A1A",
            verticalAlign: "middle",
          }}>
            frycuisine
          </span>
        </div>

        {/* 3-column masonry grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "14px",
          alignItems: "start",
        }}>
          {columns.map((col, colIdx) => (
            <div key={colIdx} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {col.map((post, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: "#ffffff",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
                    cursor: "pointer",
                    overflow: "hidden",
                  }}
                >
                  {/* Image */}
                  <div style={{ width: "100%", height: `${post.imgHeight}px`, overflow: "hidden" }}>
                    <img
                      src={post.image}
                      alt={post.title}
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
                  <div style={{ padding: "10px 12px 13px" }}>
                    {/* Tag + Date */}
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "5px",
                    }}>
                      <span style={{
                        fontFamily: "'Lora', serif",
                        fontSize: "10px",
                        fontWeight: 600,
                        color: "#A67C52",
                        textTransform: "uppercase",
                        letterSpacing: "0.8px",
                      }}>
                        {post.tag}
                      </span>
                      <span style={{ color: "#ccc", fontSize: "10px" }}>•</span>
                      <span style={{
                        fontFamily: "'Lora', serif",
                        fontSize: "10px",
                        color: "#aaa",
                        letterSpacing: "0.5px",
                      }}>
                        {post.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 style={{
                      fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
                      fontStyle: "italic",
                      fontWeight: 600,
                      fontSize: "14.5px",
                      color: "#1A1A1A",
                      lineHeight: 1.35,
                      marginBottom: "6px",
                    }}>
                      {post.title}
                    </h3>

                    {/* Description */}
                    <p style={{
                      fontFamily: "'Lora', serif",
                      fontSize: "11.5px",
                      color: "#666666",
                      lineHeight: 1.6,
                      margin: 0,
                    }}>
                      {post.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
