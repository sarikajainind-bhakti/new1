const recipes = [
  {
    date: "January 13, 2026",
    title: "Masala Frankie Roll",
    desc: "Spicy vegetable stuffing wrapped in soft roll with tangy sauces. Loaded with fresh veggies and Indian spices for bold taste. A quick and filling street-style meal.",
    image: "/images/H9.png",
    imageLeft: false,
  },
  {
    date: "January 21, 2026",
    title: "Fruit Yogurt Bowl",
    desc: "Fresh seasonal fruits blended with creamy low-fat yogurt. Rich in vitamins, protein and natural sweetness. A refreshing and nutritious anytime snack.",
    image: "/images/H10.png",
    imageLeft: true,
  },
  {
    date: "January 21, 2026",
    title: "Air Fryer Paneer Tikka",
    desc: "Marinated paneer grilled to smoky perfection in air fryer. Low oil yet full of spicy and rich flavors. Great healthy alternative to fried snacks.",
    image: "/images/H11.png",
    imageLeft: false,
  },
  {
    date: "January 21, 2026",
    title: "Dal Tadka & Rice",
    desc: "Slow cooked lentils tempered with aromatic Indian spices. Served with steamed rice for comforting homemade taste. Simple, nutritious and satisfying everyday meal.",
    image: "/images/H12.png",
    imageLeft: true,
  },
];

export function Recipes() {
  return (
    <section className="relative bg-white py-24 px-6 overflow-hidden">
      {/* Decorative Wavy Lines - Right */}
      <div className="absolute top-10 right-0 w-[400px] h-full pointer-events-none opacity-20">
        <svg viewBox="0 0 200 800" className="w-full h-full">
          <path d="M200,0 Q140,100 200,200 T200,400 T200,600 T200,800" fill="none" stroke="#D4A017" strokeWidth="0.5" />
          <path d="M190,0 Q130,100 190,200 T190,400 T190,600 T190,800" fill="none" stroke="#D4A017" strokeWidth="0.5" />
          <path d="M180,0 Q120,100 180,200 T180,400 T180,600 T180,800" fill="none" stroke="#D4A017" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Decorative Wavy Lines - Left */}
      <div className="absolute top-10 left-0 w-[400px] h-full pointer-events-none opacity-20 scale-x-[-1]">
        <svg viewBox="0 0 200 800" className="w-full h-full">
          <path d="M200,0 Q140,100 200,200 T200,400 T200,600 T200,800" fill="none" stroke="#D4A017" strokeWidth="0.5" />
          <path d="M190,0 Q130,100 190,200 T190,400 T190,600 T190,800" fill="none" stroke="#D4A017" strokeWidth="0.5" />
          <path d="M180,0 Q120,100 180,200 T180,400 T180,600 T180,800" fill="none" stroke="#D4A017" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-[1250px] mx-auto relative z-10">
        <h2
          className="text-left font-normal mb-20 uppercase tracking-[0.2em]"
          style={{
            fontFamily: "'Cinzel Decorative', serif",
            fontSize: "clamp(32px, 5vw, 48px)",
            color: "#1A1A1A",
          }}
        >
          RECIPES SECTION
        </h2>

        <div className="space-y-12">
          {recipes.map((item, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Text Side */}
              <div className="flex-[1.2] text-left">
                <p className="text-[13px] text-gray-400 uppercase tracking-[0.3em] font-medium mb-4">
                  {item.date}
                </p>
                <h3 
                  className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4 leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {item.title}
                </h3>
                <p 
                  className="text-gray-600 leading-relaxed text-[17px] max-w-xl mb-6 font-light"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {item.desc}
                </p>
                <a
                  href="#"
                  className="inline-block text-[12px] font-bold uppercase tracking-[0.4em] text-[#D4A017] hover:text-black transition-all border-b border-transparent hover:border-[#D4A017]"
                >
                  CONTINUE READING
                </a>
              </div>

              {/* Image Side */}
              <div className="flex-[0.8] w-full aspect-[16/10] overflow-hidden shadow-xl relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-24 text-center">
          <button 
            className="group relative px-12 py-4 bg-[#1A1A1A] text-white overflow-hidden transition-all duration-500 hover:bg-[#D4A017]"
          >
            <span className="relative z-10 text-[13px] font-bold uppercase tracking-[0.4em]">
              View All Recipes
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

