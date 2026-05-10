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
  const featured = recipes[0];
  const others = recipes.slice(1);

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-[1000px] mx-auto">
        <h2
          className="text-center font-bold mb-16 uppercase tracking-[0.2em]"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "36px",
            color: "#1A1A1A",
          }}
        >
          Recipes Section
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Featured Recipe */}
          <div className="md:col-span-7 group cursor-pointer">
            <div className="aspect-[16/10] overflow-hidden shadow-xl mb-8">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-4 font-serif italic">
                {featured.date}
              </p>
              <h3 
                className="text-3xl md:text-4xl font-semibold italic text-[#8B4513] mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {featured.title}
              </h3>
              <p 
                className="text-gray-600 leading-loose text-lg mb-8"
                style={{ fontFamily: "'Noto Serif', serif" }}
              >
                {featured.desc}
              </p>
              <a
                href="#"
                className="inline-block text-xs font-bold uppercase tracking-[0.25em] border-b-2 border-[#8B4513] pb-1 hover:text-black hover:border-black transition-all"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                Continue Reading
              </a>
            </div>
          </div>

          {/* List of Other Recipes */}
          <div className="md:col-span-5 space-y-10">
            {others.map((item, idx) => (
              <div key={idx} className="flex gap-6 group cursor-pointer border-b border-gray-50 pb-8 last:border-0">
                <div className="w-32 h-32 shrink-0 overflow-hidden shadow-md">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-2 font-serif italic">
                    {item.date}
                  </p>
                  <h4 
                    className="text-xl font-semibold italic text-[#1A1A1A] group-hover:text-[#8B4513] transition-colors mb-2 leading-tight"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed" style={{ fontFamily: "'Noto Serif', serif" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-20">
          <button
            className="bg-black text-white px-12 py-4 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#8B4513] transition-all duration-500 shadow-lg"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            View More Recipes
          </button>
        </div>
      </div>
    </section>
  );
}

