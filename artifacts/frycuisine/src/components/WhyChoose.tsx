export function WhyChoose() {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#1A1A1A]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Why FryCuisine?
          </h2>

          <div className="space-y-6 text-[#555555] leading-loose text-lg" style={{ fontFamily: "'Noto Serif', serif" }}>
            <p>
              Food is more than just a meal — it's an experience, a culture, and a way of life. At FryCuisine, we bring you the perfect blend of trending global flavors, authentic traditional recipes, and healthy lifestyle choices.
            </p>
            <p>
              Whether you're looking for the latest viral dish, a comforting home-cooked meal, or expert tips on mindful eating, we've got you covered. Our mission is to celebrate food in all its forms, making it easier for you to discover, cook, and enjoy every bite.
            </p>
          </div>
          
          <button 
            className="mt-4 px-10 py-3 bg-[#8B2611] text-white uppercase tracking-widest font-bold text-xs hover:bg-black transition-colors"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Learn More
          </button>
        </div>

        {/* Right Image Collage */}
        <div className="relative h-[450px] md:h-[550px] group">
          <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="./images/H38.png"
              alt="Food Collage"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#D4A017]/10 rounded-full blur-2xl" />
          <div className="absolute -top-6 -right-6 w-40 h-40 bg-[#8B2611]/5 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}

