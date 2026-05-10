import { Search, X } from "lucide-react";

export function Header() {
  return (
    <header 
      className="bg-[#000000] text-white py-4 px-6 md:px-12 flex flex-col items-center relative z-20"
      style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
    >
      <div className="w-full max-w-[1200px] flex justify-between items-center mb-5">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="flex flex-col gap-[2px]">
             <div className="w-6 h-[2px] bg-white"></div>
             <div className="w-4 h-[2px] bg-white"></div>
             <div className="w-6 h-[2px] bg-white"></div>
          </div>
          <div 
            className="text-3xl tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span className="font-bold">fry</span>
            <span className="font-light opacity-80">cuisine</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex items-center bg-[#2A2A2A] rounded-md px-4 py-2 w-72 border border-white/10">
          <Search className="w-4 h-4 text-gray-400 mr-2" />
          <input
            type="text"
            className="bg-transparent border-none outline-none text-sm w-full text-white placeholder:text-gray-500"
            placeholder=""
          />
          <X className="w-4 h-4 text-gray-500 ml-2 cursor-pointer hover:text-white transition-colors" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="w-full max-w-[1200px]">
        <ul
          className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-[13px] tracking-widest uppercase font-medium"
          style={{ fontFamily: "'Alice', serif" }}
        >
          {["Home", "Trending food", "Recipes", "World cuisine", "Street food", "Diet & healthy", "Food blog", "About", "Contact"].map((item, idx) => (
            <li key={idx}>
              <a 
                href="#" 
                className={`hover:text-[#D4A017] transition-all duration-300 pb-1 ${item === "World cuisine" ? "text-white border-b border-[#D4A017]" : "text-gray-300"}`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

