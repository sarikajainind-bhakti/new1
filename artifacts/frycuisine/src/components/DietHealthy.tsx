const items = [
  {
    category: "Weight Loss Diet Foods",
    title: "Quinoa Veg Salad Bowl",
    desc: "Fresh vegetables with quinoa and light dressing. Perfect for healthy weight loss and clean eating.",
    image: "./images/H13.png",
  },
  {
    category: "High Protein Diet Foods",
    title: "Paneer Protein Power Bowl",
    desc: "High protein paneer with veggies and healthy options. Keeps you full and boosts energy.",
    image: "./images/H14.png",
  },
  {
    category: "Keto Food List",
    title: "Avocado Egg Keto Plate",
    desc: "Low carb avocado and eggs for keto lifestyle. Supports fat burning and steady energy.",
    image: "./images/H15.png",
  },
];

export function DietHealthy() {
  return (
    <section className="bg-[#FAF9F6] py-16 px-6">
      <div className="max-w-[1200px] mx-auto">
        <h2
          className="text-center font-bold mb-12 uppercase tracking-widest"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "36px",
            color: "#1A1A1A",
          }}
        >
          Diet & Healthy Food Guides
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="h-[240px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-8">
                <p 
                  className="text-[11px] text-[#8B2611] uppercase tracking-[0.2em] font-bold mb-4"
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  {item.category}
                </p>
                
                <h3
                  className="text-xl font-semibold italic mb-4 underline decoration-[#D4A017] underline-offset-8"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#1A1A1A",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  className="text-gray-500 leading-relaxed text-sm mb-8"
                  style={{ fontFamily: "'Noto Serif', serif" }}
                >
                  {item.desc}
                </p>

                <button
                  className="bg-black text-white px-8 py-2.5 text-[10px] uppercase tracking-widest font-bold hover:bg-[#8B2611] transition-colors"
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

