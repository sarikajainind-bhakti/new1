export function Hero() {
  return (
    <section
      className="relative text-white overflow-hidden"
      style={{ minHeight: "500px", backgroundColor: "#0D0D0D" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('./images/H1.png')" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 100%)",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 w-full pt-24 pb-20">
        <div className="space-y-6 max-w-2xl">
          <h1
            className="font-bold leading-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(36px, 5vw, 60px)",
              color: "#D4A017",
            }}
          >
            Explore Trending, Global & <br/>Healthy Food at FryCuisine
          </h1>

          <p
            className="opacity-90 leading-relaxed max-w-lg"
            style={{
              fontFamily: "'Noto Serif', serif",
              fontSize: "18px",
              color: "#FFFFFF",
            }}
          >
            From viral food trends and world-famous dishes to healthy diets and
            easy recipes — everything about food in one place.
          </p>

          <div className="flex flex-wrap gap-5 pt-4">
            <button
              className="group flex items-center gap-3 px-8 py-3 rounded-full border border-white/40 hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest font-semibold text-xs"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              World cuisine
              <div className="w-6 h-6 rounded-full border border-current flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                 <span className="ml-[2px] text-[8px]">▶</span>
              </div>
            </button>

            <button
              className="group flex items-center gap-3 px-8 py-3 rounded-full border border-white/40 hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest font-semibold text-xs"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Diet Food
              <div className="w-6 h-6 rounded-full border border-current flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                 <span className="ml-[2px] text-[8px]">▶</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

