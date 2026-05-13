const items = [
  {
    category: "Weight Loss Diet Foods",
    title: "Quinoa Veg Salad Bowl",
    desc: "Fresh vegetables with quinoa and light dressing. Perfect for healthy weight loss and clean eating.",
    image: "/images/H13.png",
  },
  {
    category: "High Protein Diet Foods",
    title: "Paneer Protein Power Bowl",
    desc: "High protein paneer with veggies and healthy options. Keeps you full and boosts energy.",
    image: "/images/H14.png",
  },
  {
    category: "Keto Food List",
    title: "Avocado Egg Keto Plate",
    desc: "Low carb avocado and eggs for keto lifestyle. Supports fat burning and steady energy.",
    image: "/images/H15.png",
  },
];

export function DietHealthy() {
  return (
    <section className="bg-[#F9F7F2] py-20 px-6">
      <div className="max-w-[1250px] mx-auto">
        {/* Header with Side Lines */}
        <div className="flex items-center gap-4 md:gap-10 mb-16">
          <div className="flex-1 h-[1px] bg-black/20" />
          <h2
            className="text-center font-bold uppercase tracking-[0.1em] leading-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              color: "#1A1A1A",
            }}
          >
            Diet & Healthy Food Guides
          </h2>
          <div className="flex-1 h-[1px] bg-black/20" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="group cursor-pointer text-center"
            >
              <div className="h-[280px] overflow-hidden mb-6 shadow-sm">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>

              <div className="px-4">
                <p 
                  className="text-[18px] md:text-[22px] text-[#8B4513] font-bold mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {item.category}
                </p>
                
                <h3
                  className="text-[20px] md:text-[24px] font-bold italic mb-4"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#1A1A1A",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  className="text-gray-600 leading-relaxed text-[16px] italic mb-8 font-light"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {item.desc}
                </p>

                <button
                  className="bg-[#8B4513] text-white px-10 py-3 text-[14px] uppercase tracking-widest font-bold hover:bg-black transition-all duration-300 rounded-sm"
                  style={{ fontFamily: "'Playfair Display', serif" }}
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

