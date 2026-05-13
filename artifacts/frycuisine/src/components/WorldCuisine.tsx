const countries = [
  {
    flag: "🇮🇳",
    name: "India",
    dishes: "Butter Chicken, Dosa",
    image: "/images/H6.png",
  },
  {
    flag: "🇰🇷",
    name: "Korea",
    dishes: "Kimchi, Bibimbap",
    image: "/images/H7.png",
  },
  {
    flag: "🇮🇹",
    name: "Italy",
    dishes: "Pizza & Pasta",
    image: "/images/H8.jpg",
  },
];

export function WorldCuisine() {
  return (
    <section className="bg-[#FAF9F6] pt-0 pb-16">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="flex items-center gap-6 mb-12">
          <div className="flex-1 h-[1px] bg-black/10" />
          <div className="flex items-center gap-2">
            <span className="text-black/30 text-[10px]">◆</span>
            <h2 
              className="text-xl md:text-2xl font-bold uppercase tracking-[0.2em]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              World Famous Food by Country
            </h2>
            <span className="text-black/30 text-[10px]">◆</span>
          </div>
          <div className="flex-1 h-[1px] bg-black/10" />
        </div>

        <div className="flex items-center gap-4">
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8">
            {countries.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#EAE3D8] overflow-hidden group shadow-sm"
              >
                <div className="h-[220px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6 text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <span className="text-2xl">{item.flag}</span>
                    <p 
                      className="text-xl font-semibold italic text-[#8B2611]"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {item.name}
                    </p>
                  </div>

                  <p 
                    className="text-gray-500 text-sm leading-relaxed mb-6 italic"
                    style={{ fontFamily: "'Noto Serif', serif" }}
                  >
                    {item.dishes}
                  </p>

                  <button
                    className="bg-[#8B2611] text-white px-8 py-2.5 text-[10px] uppercase tracking-widest font-bold hover:bg-black transition-colors duration-300"
                    style={{ fontFamily: "'Nunito', sans-serif" }}
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

