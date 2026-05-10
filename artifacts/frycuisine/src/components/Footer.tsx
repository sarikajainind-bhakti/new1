import { Instagram, Facebook, Youtube, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[#000000] text-white py-16 px-6 md:px-12 border-t border-white/10 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 grayscale"
        style={{ backgroundImage: "url('./images/H39.png')" }}
      />
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="relative z-10 max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand Column */}
        <div className="md:col-span-1 space-y-6">
          <div 
            className="text-4xl tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span className="font-bold">fry</span>
            <span className="font-light opacity-80">cuisine</span>
          </div>
          <p 
            className="text-gray-400 text-sm leading-relaxed max-w-xs"
            style={{ fontFamily: "'Noto Serif', serif" }}
          >
            Discover the art of food, recipes, and global cuisine at FryCuisine — where every flavor tells a story.
          </p>
        </div>

        {/* Explore Column */}
        <div>
          <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-[#D4A017]" style={{ fontFamily: "'Nunito', sans-serif" }}>
            Explore
          </h4>
          <ul className="space-y-3 text-sm text-gray-400 font-medium">
            <li><a href="#" className="hover:text-white transition-colors">Trending food</a></li>
            <li><a href="#" className="hover:text-white transition-colors">World cuisine</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Street food</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Diet & healthy</a></li>
          </ul>
        </div>

        {/* Categories Column */}
        <div>
          <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-[#D4A017]" style={{ fontFamily: "'Nunito', sans-serif" }}>
            Categories
          </h4>
          <ul className="space-y-3 text-sm text-gray-400 font-medium">
            <li><a href="#" className="hover:text-white transition-colors">Breakfast</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Dinner</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Desserts</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Vegan</a></li>
          </ul>
        </div>

        {/* Socials Column */}
        <div>
          <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-[#D4A017]" style={{ fontFamily: "'Nunito', sans-serif" }}>
            Follow Us
          </h4>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#8B2611] hover:border-[#8B2611] transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#8B2611] hover:border-[#8B2611] transition-all">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#8B2611] hover:border-[#8B2611] transition-all">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#8B2611] hover:border-[#8B2611] transition-all">
              <Send className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1200px] mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-semibold tracking-widest uppercase">
        <p>© 2026 FryCuisine. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

