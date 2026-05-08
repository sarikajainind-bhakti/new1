import nasigorengImg from "../assets/nasigoreng.png";

export function Recipes() {
  const recipes = [
    {
      title: "Nasi Goreng Kit Kat",
      desc: "A unique fusion of sweet and savory in this viral Indonesian fried rice variant.",
      image: nasigorengImg
    },
    {
      title: "Dark Sugar Bowl",
      desc: "Rich, caramel-noted dessert bowl with brown sugar pearls and coconut milk.",
      image: nasigorengImg
    },
    {
      title: "Al Dente Pasta Thinking",
      desc: "The perfect pasta technique for your next Italian dinner night at home.",
      image: nasigorengImg
    },
    {
      title: "The Tiefste Wok",
      desc: "Deep-fried wok specialties that bring out the true flavor of Asian street food.",
      image: nasigorengImg
    }
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-black text-left tracking-wide text-[#1a1a2e] uppercase mb-16 border-l-4 border-[#D4A017] pl-4">
          RECIPES SECTION
        </h2>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {recipes.map((item, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row gap-6 group">
              <div className="flex-1 flex flex-col justify-center order-2 sm:order-1 sm:text-right sm:items-end">
                <h3 className="font-serif italic text-xl md:text-2xl text-[#8b5a2b] mb-3 group-hover:text-[#D4A017] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                  {item.desc}
                </p>
                <button className="border border-gray-300 px-5 py-2 text-xs font-bold tracking-widest text-gray-700 uppercase hover:border-[#8b5a2b] hover:text-[#8b5a2b] transition-colors w-fit">
                  EXPLORE
                </button>
              </div>
              <div className="w-full sm:w-48 aspect-square overflow-hidden rounded-sm order-1 sm:order-2">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
