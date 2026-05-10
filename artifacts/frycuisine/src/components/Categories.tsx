const categories = [
  { name: "Street Food", image: "./images/H16.png" },
  { name: "Fast Food", image: "./images/H17.png" },
  { name: "Vegan Food", image: "./images/H25.png" },
  { name: "Fried Food", image: "./images/H19.png" },
  { name: "Desserts", image: "./images/H20.png" },
  { name: "Snacks", image: "./images/H21.png" },
  { name: "Breakfast", image: "./images/H22.png" },
  { name: "Dinner", image: "./images/H23.png" },
];

export function Categories() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-[1000px] mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold uppercase tracking-[0.1em] text-[#1A1A1A] mb-1"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Explore Food By
          </h2>
          <div className="flex items-center gap-4">
            <div className="w-16 h-[1.5px] bg-[#D4A017]" />
            <span
              className="text-5xl md:text-6xl text-[#8B4513]"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              Category
            </span>
            <div className="flex-1 h-[1.5px] bg-[#D4A017] max-w-[200px]" />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-12">
          {categories.map((cat, idx) => (
            <div key={idx} className="flex flex-col items-center group cursor-pointer">
              <div className="w-40 h-48 rounded-full overflow-hidden border-4 border-[#FDF6E9] shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.02]">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <span
                className="mt-4 text-lg italic text-gray-700 font-medium"
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

