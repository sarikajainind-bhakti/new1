import collageImg from "../assets/hero.png"; // Using hero image as placeholder for collage

export function WhyChoose() {
  return (
    <section className="bg-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          {/* Collage simulation */}
          <div className="w-full aspect-[4/5] bg-gray-100 p-4 border border-gray-200 relative overflow-hidden">
            <img 
              src={collageImg} 
              alt="Food collage" 
              className="w-full h-full object-cover rounded-sm grayscale-[20%] sepia-[10%] opacity-90"
            />
            <div className="absolute inset-0 border-[16px] border-white/20 mix-blend-overlay"></div>
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#D4A017]/10 rounded-full -z-10"></div>
          <div className="absolute -top-6 -left-6 w-24 h-24 border border-[#8b5a2b]/20 -z-10 rotate-12"></div>
        </div>

        <div className="space-y-6">
          <div className="inline-block px-3 py-1 bg-[#D4A017]/10 text-[#D4A017] text-xs font-bold tracking-widest uppercase mb-2">
            Our Mission
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1a1a2e] leading-tight">
            WHY FOOD LOVERS <br />CHOOSE FRYCUISINE
          </h2>
          <div className="h-1 w-20 bg-[#D4A017]"></div>
          
          <div className="space-y-4 text-gray-600 text-lg leading-relaxed pt-4">
            <p>
              At FryCuisine, we believe that food is more than just sustenance—it's an experience, a culture, and a way of bringing people together. Our premium digital food magazine explores the intersection of global culinary traditions and modern dining trends.
            </p>
            <p>
              Whether you're searching for the internet's latest viral sensations, authentic street food recipes from bustling Asian markets, or balanced, nutritious diet plans that don't compromise on flavor, we curate the best gastronomic content for the modern food enthusiast.
            </p>
            <p className="font-serif italic text-xl text-[#8b5a2b] pt-4">
              "Savor the world, one recipe at a time."
            </p>
          </div>
          
          <div className="pt-6">
            <button className="bg-[#1a1a2e] text-white px-8 py-3 text-sm font-bold tracking-widest uppercase hover:bg-[#D4A017] transition-colors">
              READ OUR STORY
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
