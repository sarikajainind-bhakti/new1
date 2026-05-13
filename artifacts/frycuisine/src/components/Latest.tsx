import React from "react";

interface Post {
  tag: string;
  date: string;
  title: string;
  desc: string;
  image: string;
  ratio: string;
}

const posts: Post[] = [
  { tag: "Trending Food", date: "Jan 20", title: "Mexican Tacos Street Food", desc: "Authentic Mexican tacos with slow-cooked fillings. Topped with fresh cilantro, zesty lime, and smoky salsa.", image: "/images/H24.png", ratio: "aspect-[21/9]" },
  { tag: "Food Facts", date: "Jan 20", title: "Power of Avocado Salad", desc: "Boost your energy with this nutrient-dense superfood salad. Features healthy fats, crisp greens, and zesty vinaigrette.", image: "/images/H25.png", ratio: "aspect-[3/4]" },
  { tag: "Famous Food", date: "Jan 20", title: "Chocolate Lava Cake Love", desc: "A decadent dessert with a rich molten chocolate center. Served warm with a velvety texture and cocoa dusting.", image: "/images/H26.png", ratio: "aspect-square" },
  { tag: "Trending Food", date: "Jan 20", title: "Creamy Pasta Alfredo", desc: "Classic Italian pasta tossed in a rich Parmesan cream sauce. Seasoned with garlic and black pepper for comfort.", image: "/images/H27.png", ratio: "aspect-[4/3]" },
  { tag: "Street Food", date: "Jan 20", title: "Spicy Samosa Chaat", desc: "An explosion of Indian street flavors with tangy chutneys. Crispy samosas layered with yogurt and spicy green sauce.", image: "/images/H28.png", ratio: "aspect-video" },
  { tag: "Trending Food", date: "Jan 20", title: "Cheese Burst Burger", desc: "Satisfy your cravings with this juicy, flame-grilled burger. Features a secret molten cheese core that erupts with flavor.", image: "/images/H29.png", ratio: "aspect-square" },
  { tag: "Famous Food", date: "Jan 20", title: "Spicy Chicken Ramen", desc: "Warm your soul with authentic Japanese broth and noodles. Infused with traditional spices and tender grilled chicken.", image: "/images/H30.png", ratio: "aspect-[3/4]" },
  { tag: "Street Food", date: "Jan 20", title: "Steamed Veg Momos", desc: "Healthy dumplings filled with seasonal vegetables and spices. Steamed to perfection and served with fiery chili sauce.", image: "/images/H31.png", ratio: "aspect-[16/10]" },
  { tag: "Diet Tips", date: "Jan 20", title: "Oats & Fruit Breakfast Bowl", desc: "Start your morning with slow-cooked oats and fresh fruit. High in fiber and slow-release energy for your busy day.", image: "/images/H32.png", ratio: "aspect-[4/3]" },
  { tag: "Diet Tips", date: "Jan 20", title: "Sprouts Salad Bowl", desc: "Boost your protein naturally with this vibrant sprouts salad. Tossed with crunchy veggies and zesty lemon dressing.", image: "/images/H33.png", ratio: "aspect-square" },
  { tag: "Trending Food", date: "Jan 20", title: "Creamy Mushroom Pasta", desc: "Indulge in sophisticated forest mushroom flavors and cream. Finished with truffle oil and fresh herbs for elegance. ", image: "/images/H34.png", ratio: "aspect-video" },
  { tag: "Trending Food", date: "Jan 19", title: "Loaded Veggie Cheese Sandwich", desc: "Roasted vegetables and melting cheese on artisanal sourdough. Grilled to golden perfection with a spread of basil pesto.", image: "/images/H35.png", ratio: "aspect-[4/3]" },
  { tag: "Food Facts", date: "Jan 20", title: "Dark Chocolate", desc: "Discover the antioxidants and heart benefits of dark chocolate. Improve your mood and reduce stress with one small piece.", image: "/images/H36.png", ratio: "aspect-square" },
  { tag: "Famous Food", date: "Jan 20", title: "Hyderabadi Biryani", desc: "Fragrant basmati rice layered with tender spice-marinated meat.", image: "/images/H37.png", ratio: "aspect-[3/4]" },
];

export function Latest() {
  const col1 = [posts[2], posts[5], posts[8], posts[11]];
  const col2 = [posts[3], posts[6], posts[9], posts[12]];
  const col3 = [posts[4], posts[7], posts[10], posts[13]];

  const renderCard = (post: Post, idx: number, isFeatured: boolean = false) => {
    if (!post) return null;

    if (isFeatured) {
      return (
        <div
          key="featured"
          className="group cursor-pointer mb-4"
        >
          <div className="relative overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto object-cover transition-transform duration-1000 ease-out group-hover:scale-105 aspect-[16/9] md:aspect-[21/9]"
            />
            {/* Overlay for Featured Card */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-10 text-white text-left">
              <p className="text-[12px] md:text-[14px] font-medium tracking-wide mb-2 opacity-90 font-serif">
                {post.tag} , <span className="italic">{post.date}</span>
              </p>
              <h3
                className="text-2xl md:text-5xl leading-tight italic font-bold mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {post.title}
              </h3>
              <p className="text-[16px] md:text-[18px] leading-relaxed italic font-light opacity-90 max-w-2xl line-clamp-2">
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
        className="group cursor-pointer flex flex-col mb-4"
      >
        <div className={`relative overflow-hidden mb-4 ${post.ratio}`}>
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          />
        </div>

        <div className="text-left px-1">
          <p className="text-[11px] md:text-[12px] text-[#8B4513] font-medium tracking-wide mb-2 opacity-90 font-serif">
            {post.tag} , <span className="italic">{post.date}</span>
          </p>
          <h3
            className="text-[20px] md:text-[23px] text-[#1A1A1A] leading-tight italic font-bold mb-3 line-clamp-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {post.title}
          </h3>
          <p 
            className="text-[17px] md:text-[18px] text-gray-600 leading-relaxed italic font-light line-clamp-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {post.desc}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section className="relative bg-white pt-10 pb-0 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Decorative Wavy Lines */}
      <div className="absolute top-0 right-0 w-[500px] md:w-[800px] h-full pointer-events-none opacity-20 z-0">
        <svg viewBox="0 0 200 1000" className="w-full h-full">
          <path d="M200,50 Q100,150 180,300 T150,550 T190,850" fill="none" stroke="#8B4513" strokeWidth="0.3" />
          <path d="M200,150 Q120,250 190,400 T160,650 T200,950" fill="none" stroke="#8B4513" strokeWidth="0.2" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header */}
        <div className="mb-6 text-left">
          <div className="inline-flex items-baseline gap-4 md:gap-8">
            <h2
              className="text-4xl md:text-7xl font-light text-[#1A1A1A] tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Latest from (Updated Now)
            </h2>
            <span
              className="text-6xl md:text-9xl text-[#8B4513] md:translate-y-4"
              style={{ 
                fontFamily: "'Weddingday Personal Use', cursive",
                fontWeight: 400
              }}
            >
              Frycuisine
            </span>
          </div>
        </div>

        {/* High-Fidelity Masonry Layout with 16px Gaps (8px per side) */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Main Content Area (Cols 1 & 2) */}
          <div className="lg:w-2/3 flex flex-col gap-4">
            {/* Featured Post Spans Columns 1 and 2 */}
            {renderCard(posts[0], 0, true)}
            
            <div className="flex flex-col md:flex-row gap-4">
              {/* Column 1 */}
              <div className="flex-1 flex flex-col gap-4">
                {col1.map((post, idx) => renderCard(post, idx + 100))}
              </div>

              {/* Column 2 */}
              <div className="flex-1 flex flex-col gap-4">
                {col2.map((post, idx) => renderCard(post, idx + 200))}
              </div>
            </div>
          </div>

          {/* Right Sidebar (Column 3) */}
          <div className="lg:w-1/3 flex flex-col gap-4">
            {renderCard(posts[1], 1)}
            {col3.map((post, idx) => renderCard(post, idx + 300))}
          </div>
        </div>
      </div>
    </section>
  );
}
