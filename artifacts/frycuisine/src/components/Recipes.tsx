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
    <section className="bg-white py-16 px-6">
      <div className="max-w-[800px] mx-auto">
        <h2
          className="text-center font-bold mb-12 uppercase tracking-widest"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "36px",
            color: "#1A1A1A",
          }}
        >
          Recipes Section
        </h2>

        <div className="space-y-0">
          {recipes.map((item, idx) => (
            <div key={idx} className="border-t border-gray-100 py-10 first:border-t-0">
              <div
                className={`flex flex-col ${
                  item.imageLeft ? "md:flex-row" : "md:flex-row-reverse"
                } gap-10 items-center`}
              >
                <div className="w-full md:w-1/3 aspect-[4/3] overflow-hidden shadow-md">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="flex-1 text-left">
                  <p 
                    className="text-[11px] text-gray-400 uppercase tracking-widest mb-3"
                    style={{ fontFamily: "'Nunito', sans-serif" }}
                  >
                    {item.date}
                  </p>
                  
                  <h3
                    className="text-2xl font-semibold italic mb-4"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "#8B4513",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="text-gray-600 leading-relaxed text-sm mb-6"
                    style={{ fontFamily: "'Noto Serif', serif" }}
                  >
                    {item.desc}
                  </p>

                  <a
                    href="#"
                    className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] border-b border-black pb-1 hover:text-[#8B4513] hover:border-[#8B4513] transition-all"
                    style={{ fontFamily: "'Nunito', sans-serif" }}
                  >
                    Continue Reading
                  </a>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-gray-100" />
        </div>

        <div className="flex justify-center mt-12">
          <button
            className="bg-black text-white px-12 py-3.5 text-xs uppercase tracking-[0.25em] font-bold hover:bg-[#8B4513] transition-all duration-300"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            View More
          </button>
        </div>
      </div>
    </section>
  );
}

