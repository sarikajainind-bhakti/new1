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

function CurveSVG({ flip }: { flip?: boolean }) {
  return (
    <svg
      width="52"
      height="260"
      viewBox="0 0 52 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`opacity-40 shrink-0 ${flip ? "scale-x-[-1]" : ""}`}
    >
      <path
        d="M42 8 C 20 30, 4 55, 22 90 C 40 125, 50 140, 32 175 C 14 210, 4 230, 20 252"
        stroke="#8B2611"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="42" cy="8" r="3" fill="#8B2611" />
      <circle cx="20" cy="252" r="3" fill="#8B2611" />
    </svg>
  );
}

export function WorldCuisine() {
  return (
    <section className="bg-[#FAF9F6] py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="flex items-center gap-6 mb-12">
          <div className="flex-1 h-[1px] bg-[#D4A017]/30" />
          <div className="flex items-center gap-2">
            <span className="text-[#D4A017] text-[10px]">◆</span>
            <h2 
              className="text-xl md:text-2xl font-bold uppercase tracking-[0.2em]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              World Famous Food by Country
            </h2>
            <span className="text-[#D4A017] text-[10px]">◆</span>
          </div>
          <div className="flex-1 h-[1px] bg-[#D4A017]/30" />
        </div>

        <div className="flex items-center gap-4">
          <CurveSVG />
          
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

          <CurveSVG flip />
        </div>
      </div>
    </section>
  );
}

