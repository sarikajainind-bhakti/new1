import { Play } from "lucide-react";

export function Hero() {
  return (
    <section
      className="relative text-white overflow-hidden"
      style={{ minHeight: "500px", backgroundColor: "#0D0D0D" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/H1.png')" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 100%)",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full pt-8 md:pt-10 pb-10">
        <div className="space-y-4 max-w-5xl">
          <h1
            className="font-normal leading-[1.1] tracking-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(43px, 7vw, 79px)",
              color: "#D4A017",
            }}
          >
            Explore Trending, Global & <br className="hidden md:block" /> Healthy Food
          </h1>

          <p
            className="opacity-90 leading-relaxed max-w-2xl"
            style={{
              fontFamily: "'Cardo', serif",
              fontSize: "28px",
              color: "#FFFFFF",
            }}
          >
            From viral food trends and world-famous dishes to healthy diets and
            easy recipes — everything about food in one place.
          </p>

          <div className="flex flex-wrap gap-8 pt-2">
            <button
              className="group flex items-center gap-4 px-10 py-4 rounded-full border-2 border-white/40 hover:bg-[#D4A017] hover:border-[#D4A017] hover:text-black transition-all duration-500 uppercase tracking-[0.2em] font-bold text-xs"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              World cuisine
              <div className="w-8 h-8 rounded-full border border-current flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                 <Play className="w-3 h-3 fill-current ml-1" />
              </div>
            </button>

            <button
              className="group flex items-center gap-4 px-10 py-4 rounded-full border-2 border-white/40 hover:bg-[#D4A017] hover:border-[#D4A017] hover:text-black transition-all duration-500 uppercase tracking-[0.2em] font-bold text-xs"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Diet Food
              <div className="w-8 h-8 rounded-full border border-current flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                 <Play className="w-3 h-3 fill-current ml-1" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

