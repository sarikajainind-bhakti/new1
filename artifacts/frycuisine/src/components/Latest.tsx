import nasigorengImg from "../assets/nasigoreng.png";
import avocadoImg from "../assets/avocado.png";
import proteinbowlImg from "../assets/proteinbowl.png";
import greensaladImg from "../assets/greensalad.png";
import breakfastImg from "../assets/breakfast.png";
import corndogsImg from "../assets/corndogs.png";
import chocolateImg from "../assets/chocolate.png";
import momoImg from "../assets/momo.png";
import pancakesImg from "../assets/pancakes.png";

const posts = [
  { title: "The Ultimate Guide to Perfect Pasta",        desc: "Learn the secrets of making handmade pasta from scratch like an Italian nonna.", image: nasigorengImg },
  { title: "Healthy Breakfast Ideas for Busy Mornings",  desc: "Quick, nutritious, and delicious ways to start your day right.",                image: breakfastImg },
  { title: "Exploring Asian Street Market Flavors",      desc: "A culinary journey through vibrant street food scenes of Southeast Asia.",       image: momoImg },
  { title: "Decadent Chocolate Desserts",                desc: "Indulge your sweet tooth with these rich and creamy chocolate recipes.",          image: chocolateImg },
  { title: "Fresh Summer Salads",                        desc: "Light and refreshing salad combinations using seasonal ingredients.",             image: greensaladImg },
  { title: "Korean Street Food Craze",                   desc: "Discover the hottest Korean street snacks taking the world by storm.",           image: corndogsImg },
  { title: "Japanese Pancake Perfection",                desc: "Master the art of cloud-like soufflé pancakes at home.",                         image: pancakesImg },
  { title: "Protein-Packed Power Bowls",                 desc: "High-protein meal prep ideas that taste as good as they look.",                  image: proteinbowlImg },
  { title: "Avocado Everything",                         desc: "Creative avocado recipes beyond the classic toast — from salads to smoothies.",   image: avocadoImg },
];

export function Latest() {
  return (
    <section style={{ backgroundColor: "#F8F6F1", padding: "44px 24px 52px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>

        {/* Heading */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{
            fontFamily: "'Lora', serif",
            fontWeight: 400,
            fontSize: "clamp(18px, 2.5vw, 24px)",
            color: "#888",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            display: "inline",
          }}>
            Latest from{" "}
          </h2>
          <span style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "clamp(30px, 5vw, 50px)",
            color: "#1A1A1A",
            letterSpacing: "0",
          }}>
            frycuisine
          </span>
        </div>

        {/* Masonry-style grid — 3 columns */}
        <div style={{
          columns: "3",
          columnGap: "16px",
        }}>
          {posts.map((post, idx) => (
            <div key={idx} style={{
              breakInside: "avoid",
              marginBottom: "16px",
              backgroundColor: "#fff",
              cursor: "pointer",
            }}>
              <img
                src={post.image}
                alt={post.title}
                style={{
                  width: "100%",
                  display: "block",
                  objectFit: "cover",
                  height: idx % 3 === 0 ? "180px" : idx % 3 === 1 ? "140px" : "160px",
                }}
              />
              <div style={{ padding: "10px 10px 12px" }}>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontWeight: 600,
                  fontSize: "14px",
                  color: "#6E4B2A",
                  marginBottom: "5px",
                  lineHeight: 1.35,
                }}>
                  {post.title}
                </h3>
                <p style={{
                  fontFamily: "'Lora', serif",
                  fontSize: "11.5px",
                  color: "#777",
                  lineHeight: 1.55,
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
