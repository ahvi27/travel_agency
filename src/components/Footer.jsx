import { motion } from "framer-motion";
import { Compass, Send, Camera, MessageCircle, Globe, PlayCircle, ArrowRight } from "lucide-react";

const quickLinks = {
  Explore: ["Destinations", "Packages", "Travel Blog", "Gallery", "Reviews"],
  Company: ["About Us", "Careers", "Press", "Partners", "Contact"],
  Support: ["FAQs", "Travel Insurance", "Cancellation Policy", "Accessibility", "Safety"],
};

const socials = [
  { icon: Camera, href: "#" },
  { icon: MessageCircle, href: "#" },
  { icon: Globe, href: "#" },
  { icon: PlayCircle, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-dark pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <Compass size={26} className="text-primary" strokeWidth={1.8} />
              <span className="text-xl font-bold text-white">
                Wander<span className="text-primary">lust</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Curated journeys to 150+ destinations. Fifteen years of turning travel dreams into precise, unforgettable experiences.
            </p>

            {/* Newsletter */}
            <div className="mt-7">
              <p className="text-white text-sm font-semibold mb-3">Get travel inspiration weekly</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 min-w-0 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-white/30 focus:outline-none focus:border-primary/60 transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2.5 bg-primary text-white rounded-xl hover:bg-sky-400 transition-colors"
                >
                  <Send size={15} />
                </motion.button>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-3 mt-6">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="w-9 h-9 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-white/50 hover:text-primary hover:border-primary/40 transition-colors"
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(quickLinks).map(([col, links]) => (
            <div key={col}>
              <h4 className="text-white font-semibold text-sm mb-5">{col}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/50 text-sm hover:text-primary transition-colors flex items-center gap-1 group"
                    >
                      <span>{link}</span>
                      <ArrowRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © 2025 Wanderlust Travel. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((item) => (
              <a key={item} href="#" className="text-white/30 text-xs hover:text-white/60 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
