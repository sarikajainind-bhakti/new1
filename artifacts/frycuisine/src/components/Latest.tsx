const posts = [
  { tag: "Trending Food", date: "Jan 20", title: "Mexican Tacos Street Food", desc: "Spicy fillings wrapped in soft tortillas for perfect flavor.", image: "/images/H24.png", span: "lg:col-span-2" },
  { tag: "Food Facts", date: "Jan 20", title: "Power of Avocado Salad", desc: "Rich in healthy fats and essential nutrients.", image: "/images/H25.png", span: "" },
  { tag: "Famous Food", date: "Jan 20", title: "Chocolate Lava Cake Love", desc: "Warm molten chocolate dessert loved worldwide.", image: "/images/H26.png", span: "" },
  { tag: "Trending Food", date: "Jan 20", title: "Creamy Pasta Alfredo", desc: "Classic Italian comfort food with rich flavor.", image: "/images/H27.png", span: "" },
  { tag: "Street Food", date: "Jan 20", title: "Spicy Samosa Chaat", desc: "Tangy, spicy, crunchy Indian favorite snack.", image: "/images/H28.png", span: "" },
  { tag: "Trending Food", date: "Jan 20", title: "Cheese Burst Burger", desc: "Loaded with melted cheese and juicy crispy layers.", image: "/images/H29.png", span: "" },
  { tag: "Famous Food", date: "Jan 20", title: "Spicy Chicken Ramen", desc: "Hot flavorful broth with tender noodles and topping.", image: "/images/H30.png", span: "" },
  { tag: "Street Food", date: "Jan 20", title: "Steamed Veg Momos", desc: "Soft dumplings filled with fresh vegetables and spices.", image: "/images/H31.png", span: "" },
  { tag: "Diet Tips", date: "Jan 20", title: "Oats & Fruit Breakfast Bowl", desc: "Light, healthy breakfast for better digestion & weight control.", image: "/images/H32.png", span: "" },
  { tag: "Diet Tips", date: "Jan 20", title: "Sprouts Salad Bowl", desc: "Protein rich sprouts with fresh veggies for a healthy meal.", image: "/images/H33.png", span: "" },
  { tag: "Trending Food", date: "Jan 20", title: "Creamy Mushroom Pasta", desc: "Rich mushroom pasta with herbs for a comforting bite.", image: "/images/H34.png", span: "" },
  { tag: "Trending Food", date: "Jan 19", title: "Loaded Veggie Cheese Sandwich", desc: "Crispy grilled sandwich filled with veggies and melted cheese, trending across cafes.", image: "/images/H35.png", span: "" },
  { tag: "Food Facts", date: "Jan 20", title: "Dark Chocolate", desc: "Packed with antioxidants that support heart health and boost mood naturally.", image: "/images/H36.png", span: "" },
  { tag: "Famous Food", date: "Jan 20", title: "Hyderabadi Biryani", desc: "A royal dish known for aromatic spices and rich flavors loved worldwide.", image: "/images/H37.png", span: "" },
];

export function Latest() {
  // Balanced column distribution for a tighter masonry look
  const col1 = [posts[5], posts[11], posts[8], posts[12]]; 
  const col2 = [posts[1], posts[3], posts[6], posts[9]]; 
  const col3 = [posts[2], posts[4], posts[7], posts[10], posts[13]]; 

  const renderCard = (post, idx, isFeatured = false) => {
    if (!post) return null;
    
    if (isFeatured) {
      return (
        <div 
          key="featured" 
          className="col-span-1 md:col-span-2 group cursor-pointer animate-in fade-in slide-in-from-bottom-4 duration-1000 mb-8 md:mb-12"
        >
          <div className="relative overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto object-cover transition-transform duration-1000 ease-out group-hover:scale-105 aspect-[16/9] md:aspect-[21/9]"
            />
            {/* Overlay for Featured Card */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-10 text-white text-left">
              <p className="text-[11px] md:text-[13px] font-medium tracking-wide mb-2 opacity-90">
                {post.tag} , <span className="italic">{post.date}</span>
              </p>
              <h3 
                className="text-2xl md:text-4xl leading-tight italic font-normal mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {post.title}
              </h3>
              <p className="text-[13px] md:text-[15px] leading-relaxed font-light opacity-80 max-w-xl line-clamp-2">
                {post.desc}
              </p>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div 
        key={idx} 
        className="group cursor-pointer animate-in fade-in slide-in-from-bottom-4 duration-1000 mb-8 md:mb-14"
        style={{ animationDelay: `${idx * 50}ms` }}
      >
        <div className="relative overflow-hidden mb-5">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-auto object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          />
        </div>

        <div className="text-left">
          <p className="text-[11px] md:text-[12px] text-gray-500 font-medium tracking-wide mb-1 opacity-80">
            {post.tag} , <span className="italic">{post.date}</span>
          </p>
          <h3 
            className="text-[18px] md:text-[20px] text-[#1A1A1A] leading-tight italic font-normal mb-2 transition-colors duration-300 group-hover:text-[#8B4513]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {post.title}
          </h3>
          <p className="text-[13px] text-gray-600 leading-relaxed font-light line-clamp-2">
            {post.desc}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section className="relative bg-white py-16 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Decorative Wavy Lines */}
      <div className="absolute top-0 right-0 w-[400px] md:w-[700px] h-full pointer-events-none opacity-40 z-0">
        <svg viewBox="0 0 200 1000" className="w-full h-full">
          <path d="M200,50 Q100,150 180,300 T150,550 T190,850" fill="none" stroke="#8B4513" strokeWidth="0.2" />
          <path d="M200,150 Q120,250 190,400 T160,650 T200,950" fill="none" stroke="#8B4513" strokeWidth="0.1" />
        </svg>
      </div>

      <div className="max-w-[1500px] mx-auto relative z-10">
        {/* Header - Aligned to the left */}
        <div className="mb-16 md:mb-24 text-left">
          <div className="inline-flex flex-col md:flex-row items-baseline gap-2 md:gap-6">
            <h2 
              className="text-4xl sm:text-5xl md:text-6xl font-light text-[#1A1A1A] tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Latest from
            </h2>
            <span 
              className="text-6xl sm:text-7xl md:text-8xl text-[#8B4513] italic md:translate-y-2"
              style={{ fontFamily: "'Weddingday Personal Use', cursive" }}
            >
              Frycuisine
            </span>
          </div>
        </div>

        {/* Masonry Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 lg:gap-x-12 items-start">
          {/* Featured Card and 2 Columns below it */}
          <div className="md:col-span-2 space-y-0">
            {renderCard(posts[0], 0, true)}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-10 items-start">
              <div className="flex flex-col">
                {col1.map((post, idx) => renderCard(post, idx + 100))}
              </div>
              <div className="flex flex-col">
                {col2.map((post, idx) => renderCard(post, idx + 200))}
              </div>
            </div>
          </div>

          {/* Third Independent Column */}
          <div className="flex flex-col md:pt-4">
            {col3.map((post, idx) => renderCard(post, idx + 300))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-in {
          animation: fade-in 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}} />
    </section>
  );
}

