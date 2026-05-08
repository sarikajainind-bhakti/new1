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
  { tag: "Trending Food", date: "Jan 25", title: "Mexican Street Tacos", desc: "Spicy fillings wrapped in soft tortillas with cilantro and lime.", image: momoImg, imgH: 190 },
  { tag: "Street Food", date: "Jan 20", title: "Creamy Butter Chicken", desc: "Slow-cooked chicken in velvety butter sauce with aromatic spices.", image: heroImg, imgH: 130 },
  { tag: "Diet Time", date: "Jan 15", title: "Spinach Salad Bowl", desc: "Fresh spinach with strawberries, walnuts and balsamic dressing.", image: greensaladImg, imgH: 165 },
  { tag: "Trending Food", date: "Jan 12", title: "Creamy Chicken Korma", desc: "Rich north Indian curry with tender chicken in cashew cream base.", image: nasigorengImg, imgH: 140 },
  { tag: "Trending Food", date: "Jan 25", title: "Chocolate Lava Cake", desc: "Decadent molten chocolate center — warm, rich and irresistible.", image: chocolateImg, imgH: 145 },
  { tag: "Street Food", date: "Jan 20", title: "Samosa Chaat", desc: "Crispy samosas topped with chutneys, yoghurt and pomegranate.", image: breakfastImg, imgH: 175 },
  { tag: "Trending Food", date: "Jan 22", title: "Spicy Avocado Toast", desc: "Creamy avocado on sourdough with chilli flakes and poached egg.", image: avocadoImg, imgH: 120 },
  { tag: "Street Food", date: "Jan 10", title: "Loaded Veggie Sandwich", desc: "Grilled multi-grain sandwich packed with veggies, cheese and mayo.", image: corndogsImg, imgH: 150 },
  { tag: "Diet Time", date: "Jan 8", title: "Dark Chocolate Bar", desc: "No-bake bars with dark chocolate, oats, chia seeds and honey.", image: pancakesImg, imgH: 180 },
  { tag: "Street Food", date: "Jan 18", title: "Oats Breakfast Bowl", desc: "Wholesome bowl with oats, banana, berries, almond butter and honey.", image: proteinbowlImg, imgH: 135 },
  { tag: "Trending Food", date: "Jan 5", title: "Trending Momo Dumplings", desc: "Steamed dumplings with seasoned filling served with fiery chilli sauce.", image: momoImg, imgH: 160 },
  { tag: "Trending Food", date: "Jan 3", title: "Afghani Biryani", desc: "Fragrant rice layered with saffron, nuts and slow-braised tender meat.", image: heroImg, imgH: 145 },
];

export function Latest() {
  return (
    <section style={{ backgroundColor: "#F8F6F1", padding: "44px 20px 52px" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>

        {/* Heading */}
        <div style={{ marginBottom: "28px" }}>
          <span style={{
            fontFamily: "'Lora', serif",
            fontWeight: 400,
            fontSize: "18px",
            color: "#999",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
          }}>
            Latest from{" "}
          </span>
          <span style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "46px",
            color: "#1A1A1A",
            verticalAlign: "middle",
            lineHeight: 1,
          }}>
            frycuisine
          </span>
        </div>

        {/* True CSS masonry — 4 columns */}
        <div style={{ columns: 4, columnGap: "12px" }}>
          {posts.map((post, idx) => (
            <div
              key={idx}
              style={{
                breakInside: "avoid",
                marginBottom: "12px",
                backgroundColor: "#ffffff",
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              <div style={{ width: "100%", height: `${post.imgH}px`, overflow: "hidden" }}>
                <img
                  src={post.image}
                  alt={post.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>
              <div style={{ padding: "8px 10px 10px" }}>
                {/* Tag + date */}
                <div style={{ fontSize: "9px", fontFamily: "'Lora', serif", color: "#A67C52", textTransform: "uppercase", letterSpacing: "0.7px", marginBottom: "4px", display: "flex", gap: "5px" }}>
                  <span>{post.tag}</span>
                  <span style={{ color: "#ccc" }}>•</span>
                  <span style={{ color: "#aaa" }}>{post.date}</span>
                </div>
                {/* Title */}
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontWeight: 600,
                  fontSize: "13px",
                  color: "#1A1A1A",
                  lineHeight: 1.35,
                  marginBottom: "4px",
                }}>
                  {post.title}
                </h3>
                {/* Description */}
                <p style={{
                  fontFamily: "'Lora', serif",
                  fontSize: "10.5px",
                  color: "#777",
                  lineHeight: 1.5,
                  margin: 0,
                }}>
                  {post.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
