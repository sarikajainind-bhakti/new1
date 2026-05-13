import { useState } from "react";
import { Search, Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header 
      className="bg-[#1A1A1A] text-white pt-4 pb-3 px-4 md:px-12 flex flex-col items-center relative z-50 border-b border-white/5"
    >
      <div className="w-full max-w-[1250px] flex justify-between items-center mb-3">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="text-white/90">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8c0 3.613-2.988 6-6 6s-6-2.387-6-6V2" />
              <path d="M12 14v8" />
              <path d="M9 2v3" />
              <path d="M12 2v3" />
              <path d="M15 2v3" />
            </svg>
          </div>
          <div 
            className="text-3xl md:text-5xl tracking-tighter flex items-baseline"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
          >
            <span className="text-white">fry</span>
            <span className="text-white/70 relative">
              cuis<span className="relative inline-block">i<span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#D4A017] rounded-full"></span></span><span className="relative inline-block">i<span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#D4A017] rounded-full"></span></span>ne
            </span>
          </div>
        </div>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex items-center bg-[#333333] rounded-full px-5 py-2 w-[380px] border border-white/5 shadow-inner">
          <Search className="w-4 h-4 text-white/40 mr-3" />
          <input
            type="text"
            className="bg-transparent border-none outline-none text-[12px] w-full text-white placeholder:text-white/20"
            placeholder=""
          />
          <X className="w-4 h-4 text-white/40 cursor-pointer hover:text-white transition-colors" />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Navigation - Desktop */}
      <nav className="hidden md:block w-full max-w-[1250px]">
        <ul
          className="flex flex-wrap justify-center items-center gap-x-10 gap-y-2 text-[16px] font-medium text-white/80"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {["Home", "Trending food", "Recipes", "World cuisine", "Street food", "Diet & healthy", "Food blog", "About", "Contact"].map((item, idx) => (
            <li key={idx}>
              <a 
                href="#" 
                className={`hover:text-white transition-all duration-300 ${
                  item === "World cuisine" 
                    ? "text-white border border-white/30 px-5 py-1.5 rounded-md" 
                    : ""
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Navigation - Mobile Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[70px] bg-[#1A1A1A] z-40 flex flex-col p-8 transition-all duration-300">
          <ul
            className="flex flex-col gap-6 text-lg tracking-widest uppercase font-medium"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {["Home", "Trending food", "Recipes", "World cuisine", "Street food", "Diet & healthy", "Food blog", "About", "Contact"].map((item, idx) => (
              <li key={idx} onClick={() => setIsMenuOpen(false)}>
                <a 
                  href="#" 
                  className={`hover:text-white transition-all duration-300 ${item === "World cuisine" ? "text-white border border-white/30 px-3 py-1 rounded" : "text-gray-300"}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

