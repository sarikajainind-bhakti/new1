export function WorldCuisine() {
  const countries = [
    {
      flag: "🇮🇳",
      name: "India",
      dish: "Paneer Chicken Tikka",
      desc: "A rich and flavorful Indian classic with tender chicken and paneer in a creamy tomato sauce."
    },
    {
      flag: "🇰🇷",
      name: "Korea",
      dish: "Tteok-bokki",
      desc: "Spicy and chewy Korean rice cakes stir-fried in a sweet and savory chili paste."
    },
    {
      flag: "🇮🇹",
      name: "Italy",
      dish: "Pasta Bolognese",
      desc: "Traditional Italian pasta served with a slow-cooked, hearty meat-based ragù."
    }
  ];

  return (
    <section className="bg-[#fcfbf9] py-20 px-6 md:px-12 border-y border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="flex items-center gap-1 text-[#D4A017]">
            <span className="w-2 h-2 rotate-45 bg-[#D4A017]"></span>
            <span className="w-1.5 h-1.5 rotate-45 bg-[#D4A017] opacity-50"></span>
            <span className="w-1 h-1 rotate-45 bg-[#D4A017] opacity-25"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center tracking-widest text-[#1a1a2e] uppercase">
            WORLD FAMOUS FOOD BY COUNTRY
          </h2>
          <div className="flex items-center gap-1 text-[#D4A017]">
            <span className="w-1 h-1 rotate-45 bg-[#D4A017] opacity-25"></span>
            <span className="w-1.5 h-1.5 rotate-45 bg-[#D4A017] opacity-50"></span>
            <span className="w-2 h-2 rotate-45 bg-[#D4A017]"></span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {countries.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-8 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
              <div className="text-5xl mb-4 p-4 rounded-full bg-gray-50 border border-gray-100 shadow-inner group-hover:scale-110 transition-transform">
                {item.flag}
              </div>
              <h3 className="font-serif italic text-2xl text-[#8b5a2b] mb-2">{item.name}</h3>
              <h4 className="font-bold text-lg mb-4 text-[#1a1a2e]">{item.dish}</h4>
              <p className="text-gray-500 text-sm mb-6 flex-1 leading-relaxed">
                {item.desc}
              </p>
              <button className="border border-[#1a1a2e] px-6 py-2 text-xs font-bold tracking-widest text-[#1a1a2e] uppercase hover:bg-[#1a1a2e] hover:text-white transition-colors">
                EXPLORE
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
