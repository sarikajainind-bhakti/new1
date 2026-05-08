import heroImg from "../assets/hero.png";

export function Hero() {
  return (
    <section className="relative bg-[#1a1a2e] text-white min-h-[500px] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 opacity-40 mix-blend-overlay bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 grid md:grid-cols-2 gap-12 items-center py-16">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight text-[#D4A017]">
            Explore Trending, Global & Healthy Food at FryCuisine
          </h1>
          <p className="text-gray-300 text-lg max-w-md leading-relaxed">
            From viral food trends and world-famous dishes to healthy diets and easy recipes — everything about food in one place.
          </p>
          <div className="flex gap-4 pt-4">
            <button className="border-2 border-white/40 hover:bg-white/10 px-6 py-3 text-sm font-semibold tracking-wider uppercase transition-colors">
              World cuisine &gt;
            </button>
            <button className="border-2 border-[#D4A017] text-[#D4A017] hover:bg-[#D4A017] hover:text-white px-6 py-3 text-sm font-semibold tracking-wider uppercase transition-colors">
              Diet Food &gt;
            </button>
          </div>
        </div>
        
        <div className="hidden md:flex justify-center">
          <div className="w-80 h-80 rounded-full border-4 border-white/20 overflow-hidden shadow-2xl">
            <img src={heroImg} alt="Appetizing pasta" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
