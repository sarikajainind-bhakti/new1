import corndogsImg from "../assets/corndogs.png";
import chocolateImg from "../assets/chocolate.png";
import momoImg from "../assets/momo.png";
import pancakesImg from "../assets/pancakes.png";

const trendingItems = [
  {
    image: corndogsImg,
    title: "Korean Corn Dogs",
    date: "Jan 1, 2026",
    tag: "Trending",
    desc: "Crispy outside, cheesy inside! Golden fried corn dogs with gooey cheese and bold Korean flavors."
  },
  {
    image: chocolateImg,
    title: "Dubai Chocolate Bar",
    date: "Jan 1, 2026",
    tag: "Trending",
    desc: "Luxury in every bite Rich chocolate layered with premium fillings inspired by Dubai desserts."
  },
  {
    image: momoImg,
    title: "Viral Street Momo",
    date: "Jan 2, 2026",
    tag: "Trending",
    desc: "The internet's favorite street snack Juicy Momo tossed in spicy sauces, full of desi street-style flavor."
  },
  {
    image: pancakesImg,
    title: "Japanese Soufflé Pancakes",
    date: "Jan 2, 2026",
    tag: "Trending",
    desc: "Soft, fluffy & cloud-like Light-as-air pancakes that melt in your mouth with every bite."
  }
];

export function Trending() {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-px bg-gray-300 flex-1 max-w-[100px]"></div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center tracking-widest text-[#1a1a2e] uppercase">
            TRENDING FOOD RIGHT NOW
          </h2>
          <div className="h-px bg-gray-300 flex-1 max-w-[100px]"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {trendingItems.map((item, idx) => (
            <div key={idx} className="flex flex-col group cursor-pointer">
              <div className="w-full aspect-[4/3] overflow-hidden mb-6 relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="text-center px-4">
                <h3 className="font-serif italic text-2xl text-[#8b5a2b] mb-3 group-hover:text-[#D4A017] transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-wider text-gray-500 font-semibold mb-4">
                  <span>{item.date}</span>
                  <span className="w-1 h-1 rounded-full bg-[#D4A017]"></span>
                  <span className="text-[#D4A017]">{item.tag}</span>
                </div>
                <p className="text-gray-600 mb-5 text-sm leading-relaxed">
                  {item.desc}
                </p>
                <a href="#" className="inline-block border-b-2 border-transparent hover:border-[#8b5a2b] text-xs font-bold tracking-widest text-[#8b5a2b] uppercase pb-1 transition-all">
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
