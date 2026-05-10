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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {trendingItems.slice(0, 2).map((item, idx) => (
            <div key={idx} className="group cursor-pointer bg-[#FAF9F6] border border-[#EAE3D8] shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden">
              <div className="relative overflow-hidden h-[300px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-6 left-6 bg-[#8B2611] text-white px-5 py-1.5 text-[10px] uppercase tracking-[0.25em] font-bold shadow-lg">
                  {item.tag}
                </div>
              </div>

              <div className="p-10 text-center">
                <h3
                  className="text-3xl font-semibold italic mb-6 text-[#1A1A1A]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  {item.title}
                </h3>

                <div className="flex items-center justify-center gap-4 text-[11px] text-gray-400 mb-6 font-serif italic uppercase tracking-widest">
                  <span>{item.date}</span>
                  <span className="w-1 h-1 bg-[#D4A017] rounded-full" />
                  <span>{item.tag}</span>
                </div>

                <p
                  className="text-gray-600 leading-relaxed text-sm mb-10 px-4"
                  style={{ fontFamily: "'Noto Serif', serif" }}
                >
                  {item.desc}
                </p>

                <button
                  className="bg-[#8B2611] text-white px-10 py-3 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-black transition-all shadow-md"
                  style={{ fontFamily: "'Nunito', sans-serif" }}
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

