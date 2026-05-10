const trendingItems = [
  {
    image: "/images/H2.jpg",
    title: "Korean Corn Dogs",
    date: "January 1, 2026",
    tag: "Trending",
    desc: "Crispy outside, cheesy inside! Golden fried corn dogs with gooey cheese and bold Korean flavors.",
  },
  {
    image: "/images/H3.webp",
    title: "Dubai Chocolate Bar",
    date: "January 1, 2026",
    tag: "Trending",
    desc: "Luxury in every bite Rich chocolate layered with premium fillings inspired by Dubai desserts.",
  },
  {
    image: "/images/H31.png",
    title: "Viral Street Momo",
    date: "January 2, 2026",
    tag: "Trending",
    desc: "The internet's favorite street snack Juicy Momo tossed in spicy sauces, full of desi street-style flavor.",
  },
  {
    image: "/images/H5.png",
    title: "Japanese Soufflé Pancakes",
    date: "January 2, 2026",
    tag: "Trending",
    desc: "Soft, fluffy & cloud-like Light-as-air pancakes that melt in your mouth with every bite.",
  },
];

export function Trending() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-[1200px] mx-auto">
        <h2
          className="text-center font-bold mb-12"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "42px",
            color: "#1A1A1A",
          }}
        >
          Trending Food Right Now
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {trendingItems.map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6 aspect-[4/3]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 px-4 py-1 text-[10px] uppercase tracking-widest font-bold text-black">
                  {item.tag}
                </div>
              </div>

              <div className="text-center px-4">
                <h3
                  className="text-2xl font-semibold italic mb-3"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#8B4513",
                  }}
                >
                  {item.title}
                </h3>

                <div className="flex items-center justify-center gap-3 text-[12px] text-gray-400 mb-4 font-serif italic">
                  <span>{item.date}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full" />
                  <span>{item.tag}</span>
                </div>

                <p
                  className="text-gray-600 leading-relaxed text-[15px] mb-5"
                  style={{ fontFamily: "'Noto Serif', serif" }}
                >
                  {item.desc}
                </p>

                <a
                  href="#"
                  className="inline-block text-[11px] font-bold uppercase tracking-widest border-b border-transparent hover:border-current transition-all"
                  style={{ fontFamily: "'Nunito', sans-serif", color: "#8B4513" }}
                >
                  Read More...
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

