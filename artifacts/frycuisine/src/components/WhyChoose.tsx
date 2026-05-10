export function WhyChoose() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('./images/H38.png')" }}
      />
      <div 
        className="absolute inset-0 bg-[#000000]/70"
      />
      
      <div className="relative z-10 max-w-[800px] mx-auto text-center text-white">
        <h2
          className="text-3xl md:text-5xl font-bold mb-10 uppercase tracking-[0.2em]"
          style={{ fontFamily: "'Playfair Display', serif", color: "#D4A017" }}
        >
          Why Food Lovers Choose FryCuisine
        </h2>

        <div 
          className="space-y-8 text-xl md:text-2xl leading-loose italic opacity-90 font-light" 
          style={{ fontFamily: "'Noto Serif', serif" }}
        >
          <p>
            "Food is more than just a meal — it's an experience, a culture, and a way of life. At FryCuisine, we bring you the perfect blend of trending global flavors, authentic traditional recipes, and healthy lifestyle choices."
          </p>
        </div>
        
        <div className="mt-12 w-24 h-[1px] bg-[#D4A017] mx-auto" />
      </div>
    </section>
  );
}

