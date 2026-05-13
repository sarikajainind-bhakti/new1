export function WhyChoose() {
  return (
    <section className="relative bg-white pt-8 pb-0 overflow-hidden">
      {/* Decorative Wavy Lines */}
      <div className="absolute top-0 left-0 w-full flex justify-between px-10 pointer-events-none opacity-20">
        <svg viewBox="0 0 100 50" className="w-32 h-32 rotate-180">
          <path d="M0,25 Q25,0 50,25 T100,25" fill="none" stroke="#8B4513" strokeWidth="1" />
          <path d="M0,35 Q25,10 50,35 T100,35" fill="none" stroke="#8B4513" strokeWidth="1" />
        </svg>
        <svg viewBox="0 0 100 50" className="w-32 h-32 rotate-180 scale-x-[-1]">
          <path d="M0,25 Q25,0 50,25 T100,25" fill="none" stroke="#8B4513" strokeWidth="1" />
          <path d="M0,35 Q25,10 50,35 T100,35" fill="none" stroke="#8B4513" strokeWidth="1" />
        </svg>
      </div>

      <div className="w-full relative z-10">
        {/* Centered Heading */}
        <h2
          className="text-3xl md:text-5xl font-bold text-center text-[#1A1A1A] mb-12 px-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Why Food Lovers Choose FryCuisine
        </h2>

        {/* Full-Width Image and Overlay */}
        <div className="relative w-full overflow-hidden min-h-[300px] md:min-h-[500px] flex items-center">
          {/* Background Image Element */}
          <div className="absolute inset-0">
            <img 
              src="/images/H38.png" 
              alt="Food Background" 
              className="w-full h-full object-cover"
              style={{ objectPosition: 'left center' }}
            />
          </div>
          
          {/* Text Container (Overlayed on the right side) */}
          <div className="relative z-10 w-full flex justify-center md:justify-end px-4 md:pr-24 lg:pr-32">
            <div className="w-full md:w-[45%] text-center md:text-left bg-white/60 backdrop-blur-[16px] md:bg-transparent md:backdrop-blur-0 p-8 md:p-0 rounded-[2rem] md:rounded-none shadow-2xl md:shadow-none border border-white/30 md:border-none">
              <p 
                className="text-xl md:text-2xl lg:text-3xl text-[#1A1A1A] leading-relaxed font-semibold md:font-normal tracking-tight"
                style={{ fontFamily: "'Cardo', serif" }}
              >
                FryCuisine brings you global food coverage in a simple way. From easy recipes to viral food updates, everything is shared in a clean, honest style to help you explore and enjoy authentic food stories.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

