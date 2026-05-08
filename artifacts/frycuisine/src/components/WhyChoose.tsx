import heroImg from "../assets/hero.png";
import avocadoImg from "../assets/avocado.png";
import greensaladImg from "../assets/greensalad.png";
import momoImg from "../assets/momo.png";

export function WhyChoose() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "52px 24px 60px" }}>
      <div style={{
        maxWidth: "900px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "48px",
        alignItems: "center",
      }}>

        {/* LEFT: image collage */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: "8px",
          height: "340px",
        }}>
          <div style={{ gridRow: "1 / 3", overflow: "hidden" }}>
            <img src={heroImg} alt="food" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
          <div style={{ overflow: "hidden" }}>
            <img src={avocadoImg} alt="food" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
          <div style={{ overflow: "hidden" }}>
            <img src={momoImg} alt="food" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
        </div>

        {/* RIGHT: text */}
        <div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
            fontWeight: 700,
            fontSize: "clamp(20px, 3vw, 30px)",
            color: "#1A1A1A",
            lineHeight: 1.3,
            marginBottom: "18px",
          }}>
            Why Food Lovers Choose Fry Cuisine
          </h2>

          <p style={{
            fontFamily: "'Lora', serif",
            fontSize: "14px",
            color: "#555555",
            lineHeight: 1.75,
            marginBottom: "14px",
          }}>
            At FryCuisine, we believe that food is more than just sustenance — it's an experience, a culture, and a way of bringing people together. Our premium digital food magazine explores the intersection of global culinary traditions and modern dining trends.
          </p>
          <p style={{
            fontFamily: "'Lora', serif",
            fontSize: "14px",
            color: "#555555",
            lineHeight: 1.75,
          }}>
            Whether you're searching for the internet's latest viral sensations, authentic street food recipes from bustling Asian markets, or balanced, nutritious diet plans — we curate the best gastronomic content for the modern food enthusiast.
          </p>
        </div>
      </div>
    </section>
  );
}
