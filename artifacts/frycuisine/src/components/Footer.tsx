import { Search, X, Bell } from "lucide-react";
import heroImg from "../assets/hero.png";

export function Footer() {
  return (
    <footer className="relative bg-[#111] text-white pt-20 pb-10 px-6 md:px-12 overflow-hidden border-t-4 border-[#D4A017]">
      {/* Background subtle overlay */}
      <div 
        className="absolute inset-0 opacity-5 mix-blend-luminosity bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Logo */}
        <div className="flex flex-col items-center justify-center mb-16">
          <div className="flex items-center gap-4 w-full justify-center">
            <div className="h-px bg-white/20 flex-1 max-w-[150px]"></div>
            <div className="font-serif italic text-3xl tracking-wide flex items-center gap-2">
              <div className="w-8 h-8 border-2 border-[#D4A017] rounded-full flex items-center justify-center">
                <div className="w-1.5 h-4 bg-[#D4A017]" />
              </div>
              <span className="font-bold">fry</span>
              <span className="font-light text-gray-400">cuisine</span>
            </div>
            <div className="h-px bg-white/20 flex-1 max-w-[150px]"></div>
          </div>
        </div>

        {/* 4 Column Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-20 text-sm">
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-[#D4A017]">Explore</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer flex items-center before:content-[''] before:w-1 before:h-1 before:bg-gray-500 before:rounded-full before:mr-3 hover:before:bg-[#D4A017]">Trending Food</li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center before:content-[''] before:w-1 before:h-1 before:bg-gray-500 before:rounded-full before:mr-3 hover:before:bg-[#D4A017]">World Cuisine</li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center before:content-[''] before:w-1 before:h-1 before:bg-gray-500 before:rounded-full before:mr-3 hover:before:bg-[#D4A017]">Diet Food</li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center before:content-[''] before:w-1 before:h-1 before:bg-gray-500 before:rounded-full before:mr-3 hover:before:bg-[#D4A017]">Recipes</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-[#D4A017]">Categories</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer flex items-center before:content-[''] before:w-1 before:h-1 before:bg-gray-500 before:rounded-full before:mr-3 hover:before:bg-[#D4A017]">Indian Food</li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center before:content-[''] before:w-1 before:h-1 before:bg-gray-500 before:rounded-full before:mr-3 hover:before:bg-[#D4A017]">Street Food</li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center before:content-[''] before:w-1 before:h-1 before:bg-gray-500 before:rounded-full before:mr-3 hover:before:bg-[#D4A017]">Healthy Food</li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center before:content-[''] before:w-1 before:h-1 before:bg-gray-500 before:rounded-full before:mr-3 hover:before:bg-[#D4A017]">Desserts</li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center before:content-[''] before:w-1 before:h-1 before:bg-gray-500 before:rounded-full before:mr-3 hover:before:bg-[#D4A017]">Snacks</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-[#D4A017]">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer flex items-center before:content-[''] before:w-1 before:h-1 before:bg-gray-500 before:rounded-full before:mr-3 hover:before:bg-[#D4A017]">About</li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center before:content-[''] before:w-1 before:h-1 before:bg-gray-500 before:rounded-full before:mr-3 hover:before:bg-[#D4A017]">Blog</li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center before:content-[''] before:w-1 before:h-1 before:bg-gray-500 before:rounded-full before:mr-3 hover:before:bg-[#D4A017]">Contact</li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center before:content-[''] before:w-1 before:h-1 before:bg-gray-500 before:rounded-full before:mr-3 hover:before:bg-[#D4A017]">Privacy Policy</li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center before:content-[''] before:w-1 before:h-1 before:bg-gray-500 before:rounded-full before:mr-3 hover:before:bg-[#D4A017]">Disclaimer</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-[#D4A017]">Follow us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#D4A017] hover:border-[#D4A017] transition-all group">
                <span className="font-serif italic font-bold group-hover:text-white">Y</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#D4A017] hover:border-[#D4A017] transition-all group">
                <span className="font-serif italic font-bold group-hover:text-white">P</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#D4A017] hover:border-[#D4A017] transition-all group">
                <span className="font-serif italic font-bold group-hover:text-white">F</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#D4A017] hover:border-[#D4A017] transition-all group">
                <span className="font-serif italic font-bold group-hover:text-white">I</span>
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col items-center text-center bg-white/5 border border-white/10 rounded-xl p-10 max-w-3xl mx-auto mb-16">
          <h3 className="text-2xl font-serif font-bold mb-2">Join FryCuisine – Food Stories in Your Inbox</h3>
          <p className="text-gray-400 mb-8 font-serif italic">Trending food updates | Healthy diet tips | World cuisine articles</p>
          
          <div className="flex w-full max-w-md bg-white rounded-md overflow-hidden">
            <div className="flex items-center px-4 bg-white">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 py-3 text-black outline-none placeholder:text-gray-400"
            />
            <div className="flex items-center px-3 bg-white cursor-pointer hover:bg-gray-100 transition-colors">
              <X className="w-4 h-4 text-gray-400" />
            </div>
            <button className="bg-[#e53935] hover:bg-red-700 text-white px-6 py-3 font-bold text-sm tracking-wider flex items-center gap-2 transition-colors">
              SUBSCRIBE <Bell className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center border-t border-white/10 pt-8 mt-8">
          <div className="text-red-500 text-xl">♥</div>
          <div className="text-xs text-gray-500">© 2026 FryCuisine. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
