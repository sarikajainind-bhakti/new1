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
  { tag: "Trending Food", date: "Jan 20", title: "Mexican Tacos Street Food", desc: "Experience the authentic taste of Mexican street culture with these vibrant tacos. Each soft corn tortilla is packed with perfectly seasoned, slow-cooked fillings, topped with fresh cilantro, zesty lime, and a hint of smoky salsa that creates a harmonious blend of flavors. Perfect for a quick gourmet bite that captures the spirit of bustling Mexican markets.", image: "/images/H24.png", ratio: "aspect-[21/9]" },
  { tag: "Food Facts", date: "Jan 20", title: "Power of Avocado Salad", desc: "Unlock the incredible health benefits of the superfood avocado with this refreshing salad guide. Rich in heart-healthy monounsaturated fats, fiber, and essential vitamins, this salad is designed to boost your energy levels and support glowing skin. Combined with crisp greens and a light citrus vinaigrette, it's a nutrient-dense meal that never compromises on creamy, satisfying flavor.", image: "/images/H25.png", ratio: "aspect-[3/4]" },
  { tag: "Famous Food", date: "Jan 20", title: "Chocolate Lava Cake Love", desc: "Indulge in the ultimate dessert experience with our signature Chocolate Lava Cake. This decadent treat features a rich, moist exterior that gives way to a warm, velvety molten chocolate center. Served with a dusting of cocoa and perhaps a side of vanilla bean ice cream, it's a timeless classic that brings a touch of luxury and pure bliss to any dining occasion.", image: "/images/H26.png", ratio: "aspect-square" },
  { tag: "Trending Food", date: "Jan 20", title: "Creamy Pasta Alfredo", desc: "Delight in the silky-smooth texture of our classic Italian Pasta Alfredo. This dish features al dente fettuccine tossed in a rich, buttery sauce made from aged Parmesan and fresh cream, seasoned with a hint of garlic and cracked black pepper. It's the ultimate comfort food that brings the authentic flavors of an upscale Italian trattoria directly to your home kitchen table.", image: "/images/H27.png", ratio: "aspect-[4/3]" },
  { tag: "Street Food", date: "Jan 20", title: "Spicy Samosa Chaat", desc: "A colorful explosion of flavors, our Spicy Samosa Chaat is the pinnacle of Indian street food innovation. Crispy golden samosas are crumbled and layered with tangy tamarind chutney, spicy green chili sauce, creamy yogurt, and a sprinkle of crunchy sev. Every spoonful offers a unique combination of sweet, sour, and spicy notes that will leave your taste buds craving for more.", image: "/images/H28.png", ratio: "aspect-video" },
  { tag: "Trending Food", date: "Jan 20", title: "Cheese Burst Burger", desc: "Satisfy your cravings with our legendary Cheese Burst Burger, a masterpiece of indulgence. This burger features a juicy, flame-grilled patty tucked between toasted artisanal buns, hiding a secret core of premium melted cheese that erupts with every bite. Topped with fresh lettuce, sun-ripened tomatoes, and our secret house sauce, it's a gourmet take on a fast-food favorite.", image: "/images/H29.png", ratio: "aspect-square" },
  { tag: "Famous Food", date: "Jan 20", title: "Spicy Chicken Ramen", desc: "Warm your soul with a steaming bowl of our authentic Spicy Chicken Ramen. This dish features a rich, savory broth that has been simmered for hours, infused with traditional Japanese spices and chili oil. Accompanied by tender slices of grilled chicken, soft-boiled marinated eggs, and springy noodles, it's a complex and deeply satisfying meal that captures the essence of Tokyo's ramen culture.", image: "/images/H30.png", ratio: "aspect-[3/4]" },
  { tag: "Street Food", date: "Jan 20", title: "Steamed Veg Momos", desc: "Enjoy the light and healthy taste of our handcrafted Steamed Veg Momos. These delicate, thin-skinned dumplings are filled with a finely chopped mixture of seasonal vegetables, ginger, and aromatic spices, then steamed to perfection. Served with a side of fiery tomato-chili dipping sauce, they are a popular Himalayan street snack that offers a clean yet bold flavor profile for any time of day.", image: "/images/H31.png", ratio: "aspect-[16/10]" },
  { tag: "Diet Tips", date: "Jan 20", title: "Oats & Fruit Breakfast Bowl", desc: "Start your morning right with our nutrient-packed Oats & Fruit Breakfast Bowl. This wholesome meal combines slow-cooked rolled oats with a variety of fresh seasonal fruits, crunchy nuts, and a drizzle of organic honey. High in fiber and slow-release energy, it's designed to keep you feeling full and focused throughout your busy morning while providing essential antioxidants for your body.", image: "/images/H32.png", ratio: "aspect-[4/3]" },

  { tag: "Diet Tips", date: "Jan 20", title: "Sprouts Salad Bowl", desc: "Boost your protein intake naturally with our vibrant Sprouts Salad Bowl. Featuring a variety of freshly sprouted legumes, this salad is tossed with crunchy cucumbers, juicy tomatoes, and a zesty lemon-pepper dressing. It's a powerhouse of enzymes and vitamins, making it the perfect post-workout snack or a light lunch for those seeking a refreshing and health-conscious dining option.", image: "/images/H33.png", ratio: "aspect-square" },
  { tag: "Trending Food", date: "Jan 20", title: "Creamy Mushroom Pasta", desc: "Indulge in the earthy and sophisticated flavors of our Creamy Mushroom Pasta. This dish showcases a variety of sautéed forest mushrooms blended into a rich, herb-infused cream sauce that perfectly coats every strand of pasta. Finished with a sprinkle of fresh parsley and a dash of truffle oil, it's an elegant meal that brings a gourmet touch to your everyday dining experience.", image: "/images/H34.png", ratio: "aspect-video" },
  { tag: "Trending Food", date: "Jan 19", title: "Loaded Veggie Cheese Sandwich", desc: "Take your sandwich game to the next level with our Loaded Veggie Cheese Sandwich. This hearty creation features layers of roasted vegetables, thick slices of premium melting cheese, and a spread of basil pesto, all grilled to golden perfection between artisanal sourdough bread. It's a satisfying and flavor-packed meal that has become a viral sensation across trending cafes and food blogs.", image: "/images/H35.png", ratio: "aspect-[4/3]" },
  { tag: "Food Facts", date: "Jan 20", title: "Dark Chocolate", desc: "Discover the hidden health benefits of high-quality dark chocolate. Beyond its rich and intense flavor, dark chocolate is packed with powerful antioxidants called flavonoids that support heart health and improve cognitive function. A small piece of dark chocolate can also help reduce stress and boost your mood, making it a guilt-free indulgence that is as good for your body as it is for your soul.", image: "/images/H36.png", ratio: "aspect-square" },
  { tag: "Famous Food", date: "Jan 20", title: "Hyderabadi Biryani", desc: "Experience the royal heritage of India with our authentic Hyderabadi Biryani. This legendary dish features fragrant long-grain basmati rice layered with tender, spice-marinated meat, slow-cooked to perfection in a sealed clay pot. Infused with saffron and garnished with fried onions and fresh mint, every bite offers a complex symphony of spices that has made this dish a beloved favorite worldwide.", image: "/images/H37.png", ratio: "aspect-[3/4]" },
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
          className="group cursor-pointer h-full"
        >
          <div className="relative overflow-hidden h-full">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 aspect-[16/9] md:aspect-[21/9]"
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
              <p className="text-[16px] md:text-[18px] leading-relaxed italic font-light opacity-90 max-w-2xl line-clamp-3">
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
        className="group cursor-pointer flex flex-col h-full"
      >
        <div className="relative overflow-hidden mb-5 aspect-[4/3]">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          />
        </div>

        <div className="text-left px-1 flex-grow">
          <p className="text-[11px] md:text-[12px] text-[#8B4513] font-medium tracking-wide mb-2 opacity-90 font-serif">
            {post.tag} , <span className="italic">{post.date}</span>
          </p>
          <h3
            className="text-[20px] md:text-[23px] text-[#1A1A1A] leading-tight italic font-bold mb-3 line-clamp-2 min-h-[3.2rem]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {post.title}
          </h3>
          <p 
            className="text-[16px] md:text-[17px] text-gray-600 leading-relaxed italic font-light line-clamp-3"
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
              Latest from
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

        {/* Grid Layout for perfect alignment */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {/* Top Row: Featured (span 2) and one small card */}
          <div className="lg:col-span-2">
            {renderCard(posts[0], 0, true)}
          </div>
          <div>
            {renderCard(posts[1], 1)}
          </div>

          {/* Remaining Posts in perfect 3-column grid */}
          {posts.slice(2).map((post, idx) => (
            <div key={idx + 2}>
              {renderCard(post, idx + 2)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
