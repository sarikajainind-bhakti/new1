import { Search, X } from "lucide-react";

export function Header() {
  return (
    <header className="bg-[#1a1a2e] text-white py-4 px-6 md:px-12 flex flex-col items-center border-b border-gray-800 relative z-10">
      <div className="w-full max-w-7xl flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          {/* Fork Icon placeholder */}
          <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center">
            <div className="w-1 h-3 bg-white" />
          </div>
          <div className="font-serif italic text-2xl tracking-wide">
            <span className="font-bold">fry</span>
            <span className="font-light text-gray-300">cuisine</span>
          </div>
        </div>

        <div className="flex items-center bg-white/10 rounded-full px-3 py-1.5 w-64 border border-white/20">
          <Search className="w-4 h-4 text-gray-400 mr-2" />
          <input 
            type="text" 
            placeholder="Search" 
            className="bg-transparent border-none outline-none text-sm w-full text-white placeholder:text-gray-400"
          />
          <X className="w-4 h-4 text-gray-400 ml-2 cursor-pointer" />
        </div>
      </div>

      <nav className="w-full max-w-7xl">
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-medium tracking-wider uppercase text-gray-300">
          <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Trending food</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Recipes</a></li>
          <li><a href="#" className="text-white border-b-2 border-[#D4A017] pb-1">World cuisine</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Street food</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Diet & healthy</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Food blog</a></li>
          <li><a href="#" className="hover:text-white transition-colors">About</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
