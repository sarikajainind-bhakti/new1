const posts = [
  { tag: "Trending Food", date: "Jan 25", title: "Mexican Street Tacos", desc: "Spicy fillings wrapped in soft tortillas with cilantro and lime.", image: "/images/H24.png", imgH: 180 },
  { tag: "Diet Time", date: "Jan 20", title: "Power of Avocado Salad", desc: "Fresh avocado, cherry tomatoes, and seeds with lemon dressing.", image: "/images/H25.png", imgH: 140 },
  { tag: "Trending Food", date: "Jan 18", title: "Chocolate Lava Cake", desc: "Decadent molten center warm, rich and irresistible.", image: "/images/H26.png", imgH: 160 },
  { tag: "Trending Food", date: "Jan 15", title: "Creamy Pasta Alfredo", desc: "Rich white sauce pasta with garlic, herbs and parmesan.", image: "/images/H27.png", imgH: 130 },
  { tag: "Street Food", date: "Jan 12", title: "Spicy Samosa Chaat", desc: "Crispy samosas topped with chutneys, yoghurt and pomegranate.", image: "/images/H28.png", imgH: 170 },
  { tag: "Fast Food", date: "Jan 10", title: "Cheese Burst Burger", desc: "Juicy patty with layers of cheese and fresh veggies.", image: "/images/H29.png", imgH: 150 },
  { tag: "Trending Food", date: "Jan 8", title: "Spicy Chicken Ramen", desc: "Bold broth with tender chicken, noodles and soft-boiled egg.", image: "/images/H30.png", imgH: 145 },
  { tag: "Street Food", date: "Jan 5", title: "Steamed Veg Momos", desc: "Juicy vegetable dumplings served with spicy tomato chutney.", image: "/images/H31.png", imgH: 190 },
  { tag: "Diet Time", date: "Jan 3", title: "Oats & Fruit Breakfast Bowl", desc: "Wholesome oats topped with seasonal fruits and nuts.", image: "/images/H32.png", imgH: 135 },
  { tag: "Diet Time", date: "Jan 2", title: "Sprouts Salad Bowl", desc: "High-protein sprouts mixed with crunchy vegetables.", image: "/images/H33.png", imgH: 155 },
  { tag: "Trending Food", date: "Jan 1", title: "Creamy Mushroom Pasta", desc: "Earthy mushrooms in a light, silky cream sauce.", image: "/images/H34.png", imgH: 165 },
  { tag: "Street Food", date: "Dec 30", title: "Loaded Veggie Sandwich", desc: "Grilled multi-grain sandwich packed with fresh vegetables.", image: "/images/H35.png", imgH: 140 },
  { tag: "Diet Time", date: "Dec 28", title: "Dark Chocolate Bar", desc: "Healthy dark chocolate bars with oats and chia seeds.", image: "/images/H36.png", imgH: 175 },
  { tag: "Trending Food", date: "Dec 25", title: "Hyderabadi Biryani", desc: "Fragrant rice layered with tender meat and exotic spices.", image: "/images/H37.png", imgH: 150 },
];

export function Latest() {
  return (
    <section className="bg-[#FAF9F6] py-16 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-10 text-left">
          <span className="text-xl text-gray-400 uppercase tracking-widest font-serif">
            Latest from{" "}
          </span>
          <span 
            className="text-5xl md:text-6xl text-[#1A1A1A]"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            frycuisine
          </span>
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-2 md:columns-5 gap-4">
          {posts.map((post, idx) => (
            <div 
              key={idx} 
              className="break-inside-avoid mb-4 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 group cursor-pointer"
            >
              <div 
                className="overflow-hidden"
                style={{ height: `${post.imgH}px` }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-4">
                <div className="flex items-center gap-2 text-[9px] uppercase tracking-widest font-bold text-[#8B4513] mb-2">
                  <span>{post.tag}</span>
                  <span className="w-1 h-1 bg-gray-200 rounded-full" />
                  <span className="text-gray-400">{post.date}</span>
                </div>

                <h3 
                  className="text-[14px] font-semibold italic text-[#1A1A1A] leading-snug mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {post.title}
                </h3>

                <p 
                  className="text-[11px] text-gray-500 leading-relaxed"
                  style={{ fontFamily: "'Noto Serif', serif" }}
                >
                  {post.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

