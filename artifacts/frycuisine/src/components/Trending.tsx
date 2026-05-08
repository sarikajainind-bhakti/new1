import corndogsImg from "../assets/corndogs.png";
import chocolateImg from "../assets/chocolate.png";
import momoImg from "../assets/momo.png";
import pancakesImg from "../assets/pancakes.png";

const trendingItems = [
  {
    image: corndogsImg,
    title: "Korean Corn Dogs",
    date: "January 1, 2026",
    tag: "Trending",
    desc: "Crispy outside, cheesy inside! Golden fried corn dogs with gooey cheese and bold Korean flavors.",
  },
  {
    image: chocolateImg,
    title: "Dubai Chocolate Bar",
    date: "January 1, 2026",
    tag: "Trending",
    desc: "Luxury in every bite Rich chocolate layered with premium fillings inspired by Dubai desserts.",
  },
  {
    image: momoImg,
    title: "Viral Street Momo",
    date: "January 2, 2026",
    tag: "Trending",
    desc: "The internet's favorite street snack Juicy Momo tossed in spicy sauces, full of desi street-style flavor.",
  },
  {
    image: pancakesImg,
    title: "Japanese Soufflé Pancakes",
    date: "January 2, 2026",
    tag: "Trending",
    desc: "Soft, fluffy & cloud-like Light-as-air pancakes that melt in your mouth with every bite.",
  },
];

export function Trending() {
  return (
    <section style={{ backgroundColor: "#F8F6F1", padding: "48px 24px 64px" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        {/* Section heading — left-aligned, large display font, no decorative lines */}
        <h2
          style={{
            fontFamily: "'Cinzel Decorative', 'Cinzel', 'Cormorant Garamond', serif",
            fontWeight: 700,
            fontSize: "clamp(26px, 5vw, 46px)",
            color: "#1A1A1A",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            marginBottom: "36px",
            lineHeight: 1.1,
          }}
        >
          Trending Food Right Now
        </h2>

        {/* 2x2 grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "48px 40px",
          }}
        >
          {trendingItems.map((item, idx) => (
            <div
              key={idx}
              style={{ cursor: "pointer" }}
            >
              {/* Food image — full width, no rounded corners */}
              <div
                style={{
                  width: "100%",
                  aspectRatio: "4/3",
                  overflow: "hidden",
                  marginBottom: "18px",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>

              {/* Card text — centered */}
              <div style={{ textAlign: "center", padding: "0 8px" }}>
                {/* Title */}
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
                    fontStyle: "italic",
                    fontWeight: 600,
                    fontSize: "22px",
                    color: "#6E4B2A",
                    marginBottom: "8px",
                    lineHeight: 1.3,
                  }}
                >
                  {item.title}
                </h3>

                {/* Date + Tag */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    fontSize: "12px",
                    color: "#888",
                    marginBottom: "10px",
                    fontFamily: "'Lora', serif",
                  }}
                >
                  <span>{item.date}</span>
                  <span style={{ color: "#ccc" }}>•</span>
                  <span style={{ color: "#888" }}>{item.tag}</span>
                </div>

                {/* Description */}
                <p
                  style={{
                    fontFamily: "'Lora', serif",
                    fontSize: "13.5px",
                    color: "#555555",
                    lineHeight: 1.65,
                    marginBottom: "14px",
                  }}
                >
                  {item.desc}
                </p>

                {/* Read More */}
                <a
                  href="#"
                  style={{
                    fontFamily: "'Lora', serif",
                    fontSize: "11px",
                    fontWeight: 600,
                    color: "#6E4B2A",
                    textDecoration: "none",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    borderBottom: "1px solid transparent",
                    paddingBottom: "2px",
                    transition: "border-color 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = "#6E4B2A")}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "transparent")}
                >
                  Read More...
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
