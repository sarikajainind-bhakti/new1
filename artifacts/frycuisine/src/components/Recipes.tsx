const recipes = [
  {
    date: "January 13, 2026",
    title: "Masala Frankie Roll",
    desc: "Spicy vegetable stuffing wrapped in soft roll with tangy sauces. Loaded with fresh veggies and Indian spices for bold taste. A quick and filling street-style meal.",
    image: "./images/H9.png",
    imageLeft: false,
  },
  {
    date: "January 21, 2026",
    title: "Fruit Yogurt Bowl",
    desc: "Fresh seasonal fruits blended with creamy low-fat yogurt. Rich in vitamins, protein and natural sweetness. A refreshing and nutritious anytime snack.",
    image: "./images/H10.png",
    imageLeft: true,
  },
  {
    date: "January 21, 2026",
    title: "Air Fryer Paneer Tikka",
    desc: "Marinated paneer grilled to smoky perfection in air fryer. Low oil yet full of spicy and rich flavors. Great healthy alternative to fried snacks.",
    image: "./images/H11.png",
    imageLeft: false,
  },
  {
    date: "January 21, 2026",
    title: "Dal Tadka & Rice",
    desc: "Slow cooked lentils tempered with aromatic Indian spices. Served with steamed rice for comforting homemade taste. Simple, nutritious and satisfying everyday meal.",
    image: "./images/H12.png",
    imageLeft: true,
  },
];

export function Recipes() {
  return (
    <section className="relative bg-white py-24 px-6 overflow-hidden">
      {/* Decorative Wavy Lines - Right */}
      <div className="absolute top-0 right-0 w-[500px] h-full pointer-events-none opacity-30">
        <svg viewBox="0 0 200 800" className="w-full h-full">
          <path d="M200,0 Q140,100 200,200 T200,400 T200,600 T200,800" fill="none" stroke="#D4A017" strokeWidth="0.3" />
          <path d="M190,0 Q130,100 190,200 T190,400 T190,600 T190,800" fill="none" stroke="#D4A017" strokeWidth="0.3" />
          <path d="M180,0 Q120,100 180,200 T180,400 T180,600 T180,800" fill="none" stroke="#D4A017" strokeWidth="0.3" />
          <path d="M170,0 Q110,100 170,200 T170,400 T170,600 T170,800" fill="none" stroke="#D4A017" strokeWidth="0.3" />
        </svg>
      </div>

      {/* Decorative Wavy Lines - Left */}
      <div className="absolute bottom-0 left-0 w-[500px] h-full pointer-events-none opacity-30 scale-x-[-1]">
        <svg viewBox="0 0 200 800" className="w-full h-full">
          <path d="M200,0 Q140,100 200,200 T200,400 T200,600 T200,800" fill="none" stroke="#D4A017" strokeWidth="0.3" />
          <path d="M190,0 Q130,100 190,200 T190,400 T190,600 T190,800" fill="none" stroke="#D4A017" strokeWidth="0.3" />
          <path d="M180,0 Q120,100 180,200 T180,400 T180,600 T180,800" fill="none" stroke="#D4A017" strokeWidth="0.3" />
          <path d="M170,0 Q110,100 170,200 T170,400 T170,600 T170,800" fill="none" stroke="#D4A017" strokeWidth="0.3" />
        </svg>
      </div>

      <div className="max-w-[1100px] mx-auto relative z-10">
        <h2
          className="text-left font-normal mb-20 uppercase tracking-[0.15em]"
          style={{
            fontFamily: "'Cinzel Decorative', serif",
            fontSize: "clamp(36px, 5vw, 52px)",
            color: "#1A1A1A",
          }}
        >
          RECIPES SECTION
        </h2>

        <div className="space-y-24">
          {recipes.map((item, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Text Side */}
              <div className="flex-1 text-left space-y-4">
                <p className="text-[14px] text-gray-400 uppercase tracking-widest font-serif">
                  {item.date}
                </p>
                <h3 
                  className="text-3xl md:text-4xl font-bold text-[#1A1A1A]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {item.title}
                </h3>
                <p 
                  className="text-gray-600 leading-relaxed text-[16px] max-w-lg"
                  style={{ fontFamily: "'Noto Serif', serif" }}
                >
                  {item.desc}
                </p>
                <a
                  href="#"
                  className="inline-block text-[13px] font-bold uppercase tracking-[0.2em] text-[#D4A017] hover:text-black transition-all"
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  Continue Reading
                </a>
              </div>

              {/* Image Side */}
              <div className="flex-1 w-full aspect-square md:aspect-[4/3] overflow-hidden shadow-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

