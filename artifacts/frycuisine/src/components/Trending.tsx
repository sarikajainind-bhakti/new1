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
    <section className="bg-[#FAF9F6] pt-16 pb-4 px-6">
      <div className="max-w-[1200px] mx-auto">
        <h2
          className="text-left font-normal mb-12 uppercase tracking-[0.1em]"
          style={{
            fontFamily: "'Cinzel Decorative', serif",
            fontSize: "clamp(32px, 4vw, 48px)",
            color: "#ebbc65ff",
          }}
        >
          Trending Food Right Now
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {trendingItems.map((item, idx) => (
            <div key={idx} className="group overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-10 flex flex-col items-center text-center bg-[#F9F7F2]">
                <h3
                  className="text-2xl md:text-4xl mb-4 leading-tight italic"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "#8B5E3C",
                    fontWeight: 400
                  }}
                >
                  {item.title}
                </h3>

                <div className="flex items-center gap-2 text-[12px] uppercase tracking-[0.25em] text-gray-400 mb-5 font-medium">
                  <span>{item.date}</span>
                  <span className="w-1.5 h-1.5 bg-gray-200 rounded-full"></span>
                  <span>{item.tag}</span>
                </div>

                <p
                  className="text-gray-600 leading-relaxed text-[16px] mb-8 max-w-sm font-light"
                >
                  {item.desc}
                </p>

                <a
                  href="#"
                  className="text-[12px] uppercase tracking-[0.4em] font-bold text-[#8B5E3C] hover:text-black transition-colors"
                >
                  READ MORE...
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

