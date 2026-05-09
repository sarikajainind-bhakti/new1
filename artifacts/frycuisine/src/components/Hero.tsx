import heroImg from "../assets/hero.png";

export function Hero() {
  return (
    <section
      className="relative text-white overflow-hidden"
      style={{ minHeight: "420px", backgroundColor: "#0D0D0D" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.35) 100%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 w-full py-14 md:py-16">
        <div className="space-y-5 max-w-xl">
          <h1
            style={{
              fontFamily: "'Cardo', serif",
              fontStyle: "italic",
              fontWeight: 700,
              fontSize: "clamp(28px, 4vw, 52px)",
              lineHeight: 1.2,
              color: "#C8A96B",
            }}
          >
            Explore Trending, Global &amp; Healthy Food at FryCuisine
          </h1>

          <p
            style={{
              fontFamily: "'Noto Serif', serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "15px",
              lineHeight: 1.7,
              color: "#E8DED0",
              maxWidth: "420px",
            }}
          >
            From viral food trends and world-famous dishes to healthy diets and
            easy recipes — everything about food in one place.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              style={{
                border: "1.5px solid #ffffff",
                borderRadius: "30px",
                padding: "10px 22px",
                color: "#ffffff",
                fontSize: "13px",
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 600,
                background: "transparent",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                letterSpacing: "0.5px",
              }}
            >
              World cuisine
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "22px",
                  height: "22px",
                  borderRadius: "50%",
                  border: "1.5px solid white",
                  fontSize: "10px",
                  flexShrink: 0,
                }}
              >
                &#9658;
              </span>
            </button>

            <button
              style={{
                border: "1.5px solid #ffffff",
                borderRadius: "30px",
                padding: "10px 22px",
                color: "#ffffff",
                fontSize: "13px",
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 600,
                background: "transparent",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                letterSpacing: "0.5px",
              }}
            >
              Diet Food
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "22px",
                  height: "22px",
                  borderRadius: "50%",
                  border: "1.5px solid white",
                  fontSize: "10px",
                  flexShrink: 0,
                }}
              >
                &#9658;
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
