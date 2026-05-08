import heroImg from "../assets/hero.png";

export function Hero() {
  return (
    <section
      className="relative text-white overflow-hidden"
      style={{ minHeight: "420px", backgroundColor: "#0D0D0D" }}
    >
      {/* Full background food image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      {/* Dark gradient overlay — left side darker, right side lighter */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.35) 100%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 w-full grid md:grid-cols-2 gap-8 items-center py-14 md:py-16">
        {/* LEFT: text content */}
        <div className="space-y-5">
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
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
              fontFamily: "'Lora', serif",
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
                fontFamily: "'Lora', serif",
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
                fontFamily: "'Lora', serif",
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

        {/* RIGHT: circular food image */}
        <div className="hidden md:flex justify-center items-center">
          <div
            style={{
              width: "320px",
              height: "320px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "3px solid rgba(255,255,255,0.15)",
              boxShadow: "0 0 60px rgba(0,0,0,0.6)",
              flexShrink: 0,
            }}
          >
            <img
              src={heroImg}
              alt="Delicious food"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
