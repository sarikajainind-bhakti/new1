import { Search, X, Utensils } from "lucide-react";

export function Header() {
  return (
    <header 
      className="bg-[#000000] text-white py-6 px-6 md:px-12 flex flex-col items-center relative z-20"
      style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
    >
      <div className="w-full max-w-[1200px] flex justify-between items-center mb-8">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <div className="bg-[#D4A017] p-2 rounded-lg">
            <Utensils className="w-6 h-6 text-black" />
          </div>
          <div 
            className="text-4xl tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span className="font-bold">fry</span>
            <span className="font-light opacity-80">cuisine</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-[#1A1A1A] rounded-full px-5 py-2.5 w-80 border border-white/10 shadow-inner">
          <Search className="w-4 h-4 text-gray-400 mr-3" />
          <input
            type="text"
            className="bg-transparent border-none outline-none text-xs w-full text-white placeholder:text-gray-600 tracking-wider uppercase"
            placeholder="Search recipes..."
          />
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

