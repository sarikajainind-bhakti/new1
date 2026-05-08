import nasigorengImg from "../assets/nasigoreng.png";
import avocadoImg from "../assets/avocado.png";
import proteinbowlImg from "../assets/proteinbowl.png";
import greensaladImg from "../assets/greensalad.png";

export function Latest() {
  const posts = [
    {
      title: "The Ultimate Guide to Perfect Pasta",
      desc: "Learn the secrets of making handmade pasta from scratch like an Italian nonna.",
      image: nasigorengImg,
      height: "h-64"
    },
    {
      title: "Healthy Breakfast Ideas for Busy Mornings",
      desc: "Quick, nutritious, and delicious ways to start your day right.",
      image: breakfastImg || avocadoImg,
      height: "h-80"
    },
    {
      title: "Exploring Asian Street Market Flavors",
      desc: "A culinary journey through the vibrant street food scenes of Southeast Asia.",
      image: proteinbowlImg,
      height: "h-56"
    },
    {
      title: "Decadent Chocolate Desserts",
      desc: "Indulge your sweet tooth with these rich and creamy chocolate recipes.",
      image: greensaladImg,
      height: "h-72"
    },
    {
      title: "Fresh Summer Salads",
      desc: "Light and refreshing salad combinations using seasonal ingredients.",
      image: avocadoImg,
      height: "h-64"
    }
  ];

  return (
    <section className="bg-[#faf9f6] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end gap-3 mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-wide text-gray-600 uppercase pb-1">
            Latest from
          </h2>
          <span className="font-script text-5xl md:text-6xl text-[#1a1a2e]">frycuisine</span>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {posts.map((post, idx) => (
            <div key={idx} className="break-inside-avoid bg-white p-4 shadow-sm border border-gray-100 group cursor-pointer hover:shadow-md transition-shadow">
              <div className={`w-full ${post.height} overflow-hidden mb-4 relative`}>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif italic text-xl text-[#8b5a2b] mb-2 leading-tight">
                {post.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {post.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Temporary fallback for missing imports, though it should be handled above.
const breakfastImg = avocadoImg;
