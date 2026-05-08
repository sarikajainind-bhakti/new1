import { Search, X, Bell } from "lucide-react";
import { useState } from "react";
import footerBg from "../assets/hero.png";

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.75 15.5v-7l6.5 3.5-6.5 3.5z"/>
    </svg>
  );
}

function PinterestIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.17 9.43 7.63 11.17-.1-.93-.2-2.36.04-3.38.22-.9 1.46-6.18 1.46-6.18s-.37-.75-.37-1.86c0-1.74 1.01-3.04 2.27-3.04 1.07 0 1.59.8 1.59 1.76 0 1.08-.69 2.69-1.04 4.18-.3 1.25.62 2.26 1.84 2.26 2.21 0 3.69-2.83 3.69-6.18 0-2.55-1.72-4.44-4.82-4.44-3.51 0-5.69 2.62-5.69 5.55 0 1.01.29 1.72.74 2.27.21.24.24.34.16.62-.05.2-.18.69-.23.88-.07.28-.28.38-.52.28-1.47-.6-2.16-2.22-2.16-4.04 0-3 2.52-6.61 7.56-6.61 4.04 0 6.69 2.93 6.69 6.07 0 4.17-2.32 7.28-5.73 7.28-1.15 0-2.23-.62-2.6-1.32l-.72 2.77c-.26.97-.76 1.94-1.22 2.7.92.28 1.89.43 2.9.43 6.63 0 12-5.37 12-12S18.63 0 12 0z"/>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.27h3.32l-.53 3.5h-2.79V24C19.61 23.1 24 18.1 24 12.07z"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
    </svg>
  );
}

function ForkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
      <path d="M7 2v5a3 3 0 0 0 2 2.83V22h2v-12.17A3 3 0 0 0 13 7V2h-1v4H10V2H9v4H8V2H7zm10 0h-1v7h-2V2h-1v9h2v11h2V11h2V2h-1v7h-1V2z"/>
    </svg>
  );
}

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="relative text-white overflow-hidden">
      {/* Background food image with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${footerBg})` }}
      />
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.93)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-8 pt-14 pb-8">

        {/* Logo Row with dashed lines */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="flex-1 border-t border-dashed border-white/30 max-w-xs" />
          <div className="flex items-center gap-2">
            <ForkIcon />
            <span
              className="text-3xl text-white"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              frycuisine
            </span>
            <span className="text-white/60 text-lg">✦</span>
          </div>
          <div className="flex-1 border-t border-dashed border-white/30 max-w-xs" />
        </div>

        {/* 4 Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Explore */}
          <div>
            <h4
              className="text-white text-xl mb-5"
              style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', serif", fontWeight: 500 }}
            >
              Explore
            </h4>
            <ul className="space-y-2.5" style={{ color: "#D8D2C8", fontFamily: "'Lora', serif", fontSize: "15px" }}>
              {["Trending Food", "World Cuisine", "Diet Food", "Recipes"].map(item => (
                <li key={item} className="flex items-start gap-2 cursor-pointer hover:text-white transition-colors">
                  <span className="mt-1 text-xs">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4
              className="text-white text-xl mb-5"
              style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', serif", fontWeight: 500 }}
            >
              Categories
            </h4>
            <ul className="space-y-2.5" style={{ color: "#D8D2C8", fontFamily: "'Lora', serif", fontSize: "15px" }}>
              {["Indian Food", "Street Food", "Healthy Food", "Desserts", "Snacks"].map(item => (
                <li key={item} className="flex items-start gap-2 cursor-pointer hover:text-white transition-colors">
                  <span className="mt-1 text-xs">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              className="text-white text-xl mb-5"
              style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', serif", fontWeight: 500 }}
            >
              Company
            </h4>
            <ul className="space-y-2.5" style={{ color: "#D8D2C8", fontFamily: "'Lora', serif", fontSize: "15px" }}>
              {["About", "Blog", "Contact", "Privacy Policy", "Disclaimer"].map(item => (
                <li key={item} className="flex items-start gap-2 cursor-pointer hover:text-white transition-colors">
                  <span className="mt-1 text-xs">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow us */}
          <div>
            <h4
              className="text-white text-xl mb-5"
              style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', serif", fontWeight: 500 }}
            >
              Follow us
            </h4>
            <div className="flex gap-3 flex-wrap">
              {[
                { icon: <YouTubeIcon />, label: "YouTube" },
                { icon: <PinterestIcon />, label: "Pinterest" },
                { icon: <FacebookIcon />, label: "Facebook" },
                { icon: <InstagramIcon />, label: "Instagram" },
              ].map(({ icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-11 h-11 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Section — no card/box, just open layout */}
        <div className="flex flex-col items-center text-center mb-10">
          <h3
            className="text-white text-2xl md:text-3xl font-bold mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Join FryCuisine – Food Stories in Your Inbox
          </h3>
          <p
            className="mb-7 text-sm md:text-base"
            style={{ color: "#D8D2C8", fontFamily: "'Lora', serif" }}
          >
            Trending food updates | Healthy diet tips | World cuisine articles
          </p>

          {/* Input + Button */}
          <div className="flex w-full max-w-xl">
            <div className="flex items-center flex-1 bg-white rounded-l-sm">
              <span className="pl-4 text-gray-400">
                <Search className="w-5 h-5" />
              </span>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder=""
                className="flex-1 py-3 px-3 text-black outline-none bg-transparent text-sm"
              />
              {email && (
                <button
                  onClick={() => setEmail("")}
                  className="pr-4 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            <button
              className="flex items-center gap-2 px-6 py-3 font-bold text-sm tracking-widest text-white transition-colors rounded-r-sm"
              style={{ backgroundColor: "#D62828", fontFamily: "'Lora', serif" }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#A4161A")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#D62828")}
            >
              <Bell className="w-4 h-4" />
              SUBSCRIBE
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center pt-4">
          <span className="text-white text-xl">♥</span>
        </div>
      </div>
    </footer>
  );
}
