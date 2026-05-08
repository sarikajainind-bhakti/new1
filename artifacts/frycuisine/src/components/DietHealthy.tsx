import avocadoImg from "../assets/avocado.png";
import proteinbowlImg from "../assets/proteinbowl.png";
import greensaladImg from "../assets/greensalad.png";

export function DietHealthy() {
  const items = [
    { title: "Keto Avocado Toast", image: avocadoImg },
    { title: "High Protein Bowl", image: proteinbowlImg },
    { title: "Green Bowl Salad", image: greensaladImg },
    { title: "High Light Protein", image: proteinbowlImg },
    { title: "Matcha Energy Bar", image: greensaladImg }
  ];

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-black tracking-widest text-[#1a1a2e] uppercase inline-block border-b-2 border-[#D4A017] pb-2">
            DIET & HEALTHY FOOD QUEEN
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center group cursor-pointer">
              <div className="w-full aspect-square overflow-hidden rounded-full mb-4 border-4 border-white shadow-md relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="font-serif italic text-lg text-center text-[#8b5a2b] mb-3 leading-tight group-hover:text-[#D4A017] transition-colors h-12 flex items-center">
                {item.title}
              </h3>
              <button className="text-xs font-bold tracking-widest text-gray-500 uppercase hover:text-[#1a1a2e] border-b border-transparent hover:border-[#1a1a2e] pb-1 transition-all">
                EXPLORE
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
