import { FaInstagram, FaFacebook, FaYoutube, FaPinterestP, FaSearch, FaRegHeart } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";

export function Footer() {
  return (
    <footer className="relative bg-[#0A0A0A] text-white pt-20 pb-12 px-6 md:px-12 overflow-hidden">
      {/* Background with Texture/Food - 5% Opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: "url('/images/H39.png')" }}
      />

      <div className="relative z-10 max-w-[1300px] mx-auto text-center md:text-left">
        {/* Top Centered Logo Section */}
        <div className="flex items-center justify-center gap-4 md:gap-8 mb-12 md:mb-20">
          <div className="flex-1 h-[1px] bg-white/20 hidden md:block" />
          <div
            className="text-4xl md:text-6xl tracking-tight flex items-baseline transform translate-y-2 md:translate-y-4"
            style={{ fontFamily: "'Weddingday Personal Use', cursive" }}
          >
            <span className="font-bold">f</span>rycuisine
          </div>
          <div className="flex-1 h-[1px] bg-white/20 hidden md:block" />
        </div>

        {/* Four Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16 md:mb-24">
          {/* Column 1: Explore */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xl md:text-2xl font-bold mb-4 md:mb-8 italic" style={{ fontFamily: "'Playfair Display', serif" }}>
              Explore
            </h4>
            <ul className="space-y-3 md:space-y-4 text-[14px] md:text-[15px] text-gray-300 font-medium">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-white/40 rounded-full" />
                <a href="#" className="hover:text-white transition-colors">Trending Food</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-white/40 rounded-full" />
                <a href="#" className="hover:text-white transition-colors">World Cuisine</a>
              </li>
              <li className="hidden md:flex items-center gap-2">
                <span className="w-1 h-1 bg-white/40 rounded-full" />
                <a href="#" className="hover:text-white transition-colors">Diet Food</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-white/40 rounded-full" />
                <a href="#" className="hover:text-white transition-colors">Recipes</a>
              </li>
            </ul>
          </div>

          {/* Column 2: Categories */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xl md:text-2xl font-bold mb-4 md:mb-8 italic" style={{ fontFamily: "'Playfair Display', serif" }}>
              Categories
            </h4>
            <ul className="space-y-3 md:space-y-4 text-[14px] md:text-[15px] text-gray-300 font-medium">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-white/40 rounded-full" />
                <a href="#" className="hover:text-white transition-colors">Indian Food</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-white/40 rounded-full" />
                <a href="#" className="hover:text-white transition-colors">Street Food</a>
              </li>
              <li className="hidden md:flex items-center gap-2">
                <span className="w-1 h-1 bg-white/40 rounded-full" />
                <a href="#" className="hover:text-white transition-colors">Healthy Food</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-white/40 rounded-full" />
                <a href="#" className="hover:text-white transition-colors">Desserts</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xl md:text-2xl font-bold mb-4 md:mb-8 italic" style={{ fontFamily: "'Playfair Display', serif" }}>
              Company
            </h4>
            <ul className="space-y-3 md:space-y-4 text-[14px] md:text-[15px] text-gray-300 font-medium">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-white/40 rounded-full" />
                <a href="#" className="hover:text-white transition-colors">About</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-white/40 rounded-full" />
                <a href="#" className="hover:text-white transition-colors">Contact</a>
              </li>
              <li className="hidden md:flex items-center gap-2">
                <span className="w-1 h-1 bg-white/40 rounded-full" />
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xl md:text-2xl font-bold mb-4 md:mb-8 italic" style={{ fontFamily: "'Playfair Display', serif" }}>
              Follow us
            </h4>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#" className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <FaYoutube className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="#" className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <FaPinterestP className="w-3.5 h-3.5 md:w-4 md:h-4" />
              </a>
              <a href="#" className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <FaFacebook className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="#" className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <FaInstagram className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="text-center space-y-4 md:space-y-8 mb-12 md:mb-20">
          <h3
            className="text-2xl md:text-5xl font-bold px-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span className="md:hidden">Stay Updated with FryCuisine</span>
            <span className="hidden md:inline">Join FryCuisine – Food Stories in Your Inbox</span>
          </h3>
          <p className="text-gray-400 text-xs md:text-base font-medium tracking-wide px-6">
            <span className="md:hidden">Get trending food updates & recipes.</span>
            <span className="hidden md:inline">Trending food updates | Healthy diet tips | World cuisine articles</span>
          </p>

          <div className="max-w-[600px] mx-auto flex flex-col sm:flex-row gap-3 md:gap-4 mt-8 md:mt-12 px-4">
            <div className="flex-1 relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-3.5 h-3.5 md:w-4 md:h-4" />
              <input
                type="text"
                placeholder="Search recipes..."
                className="w-full bg-white text-black py-3 md:py-4 pl-10 md:pl-12 pr-4 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#E31E24]"
              />
            </div>
            <button className="bg-[#E31E24] hover:bg-[#c4191f] text-white px-8 md:px-10 py-3 md:py-4 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-colors">
              <MdNotifications className="w-4 h-4 md:w-5 md:h-5" />
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 md:pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <FaRegHeart className="text-white/40 w-5 h-5 md:w-6 md:h-6 hover:text-red-500 cursor-pointer transition-colors" />
          <p className="text-[9px] md:text-[10px] text-gray-500 font-bold tracking-widest uppercase">
            © 2026 FRYCUISINE. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}

