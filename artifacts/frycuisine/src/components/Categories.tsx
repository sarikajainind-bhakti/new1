import breakfastImg from "../assets/breakfast.png";
import avocadoImg from "../assets/avocado.png";
import proteinbowlImg from "../assets/proteinbowl.png";
import greensaladImg from "../assets/greensalad.png";
import nasigorengImg from "../assets/nasigoreng.png";

export function Categories() {
  const categories = [
    { name: "Breakfast", image: breakfastImg },
    { name: "Lunch", image: proteinbowlImg },
    { name: "Dinner", image: nasigorengImg },
    { name: "Street Food", image: nasigorengImg },
    { name: "Fast Food", image: avocadoImg },
    { name: "Salad", image: greensaladImg }
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center items-center gap-3 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-widest text-[#1a1a2e] uppercase">
            EXPLORE FOOD BY
          </h2>
          <span className="font-script text-4xl md:text-5xl text-[#D4A017]">Category</span>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {categories.map((cat, idx) => (
            <div key={idx} className="flex flex-col items-center group cursor-pointer w-24 md:w-32">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-4 shadow-lg border-2 border-transparent group-hover:border-[#D4A017] transition-all">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <span className="font-serif italic text-[#8b5a2b] font-medium text-center">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
