const trendingItems = [
  {
    image: "./images/H2.jpg",
    title: "Korean Corn Dogs",
    date: "January 1, 2026",
    tag: "Trending",
    desc: "Crispy outside, cheesy inside! Golden fried corn dogs with gooey cheese and bold Korean flavors.",
  },
  {
    image: "./images/H3.webp",
    title: "Dubai Chocolate Bar",
    date: "January 1, 2026",
    tag: "Trending",
    desc: "Luxury in every bite Rich chocolate layered with premium fillings inspired by Dubai desserts.",
  },
  {
    image: "./images/H31.png",
    title: "Viral Street Momo",
    date: "January 2, 2026",
    tag: "Trending",
    desc: "The internet's favorite street snack Juicy Momo tossed in spicy sauces, full of desi street-style flavor.",
  },
  {
    image: "./images/H5.png",
    title: "Japanese Soufflé Pancakes",
    date: "January 2, 2026",
    tag: "Trending",
    desc: "Soft, fluffy & cloud-like Light-as-air pancakes that melt in your mouth with every bite.",
  },
];

export function Trending() {
  return (
    <section className="bg-[#FAF9F6] py-16 px-6">
      <div className="max-w-[1200px] mx-auto">
        <h2
          className="text-left font-normal mb-12 uppercase tracking-[0.1em]"
          style={{
            fontFamily: "'Cinzel Decorative', serif",
            fontSize: "clamp(32px, 4vw, 48px)",
            color: "#1A1A1A",
          }}
        >
          Trending Food Right Now
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {trendingItems.map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6 aspect-[16/10]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="text-left">
                <h3
                  className="text-2xl font-semibold italic mb-2 text-[#8B4513]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  {item.title}
                </h3>

                <div className="flex items-center gap-2 text-[13px] text-gray-500 mb-4 font-serif">
                  <span>{item.date}</span>
                  <span>{item.tag}</span>
                </div>

                <p
                  className="text-gray-700 leading-relaxed text-[15px] mb-5 max-w-lg"
                  style={{ fontFamily: "'Noto Serif', serif" }}
                >
                  {item.desc}
                </p>

                <a
                  href="#"
                  className="inline-block text-[12px] font-bold uppercase tracking-[0.2em] text-[#8B4513] hover:text-black transition-colors"
                  style={{ fontFamily: "'Nunito', sans-serif" }}
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

