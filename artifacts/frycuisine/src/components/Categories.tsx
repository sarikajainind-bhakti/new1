const categories = [
  { name: "Street Food", image: "/images/H16.png" },
  { name: "Fast Food", image: "/images/H17.png" },
  { name: "Vegan Food", image: "/images/H18.png" },
  { name: "Fried Food", image: "/images/H19.png" },
  { name: "Desserts", image: "/images/H20.png" },
  { name: "Snacks", image: "/images/H21.png" },
  { name: "Breakfast", image: "/images/H22.png" },
  { name: "Dinner", image: "/images/H23.png" },
];

export function Categories() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-[1100px] mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <h2
            className="text-4xl md:text-5xl font-normal uppercase tracking-[0.11em] text-[#1A1A1A] text-left"
            style={{ fontFamily: "'Cinzel Decorative', serif" }}
          >
            Explore Food By
          </h2>
          <div className="flex items-center justify-center gap-4 -mt-2">
            <div className="flex-1 h-[1px] bg-[#D4A017] max-w-[400px]" />
            <span
              className="text-5xl md:text-7xl text-[#8B4513] leading-none flex items-baseline transform translate-y-3"
              style={{ fontFamily: "'Weddingday Personal Use', cursive" }}
            >
              <span className="text-6xl md:text-8xl mr-[-0.05em]">C</span>ategory
            </span>
            <div className="flex-1 h-[1px] bg-[#D4A017] max-w-[400px]" />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-12 gap-y-16">
          {categories.map((cat, idx) => (
            <div key={idx} className="flex flex-col items-center group cursor-pointer">
              <div className="w-44 h-56 rounded-[100%] overflow-hidden border border-[#EAE3D8] shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:scale-[1.02]">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <span
                className="mt-6 text-xl italic text-[#8B4513] font-medium"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

