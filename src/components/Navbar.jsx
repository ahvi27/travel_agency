import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Moon, Sun, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Destinations", href: "#destinations" },
  { label: "Packages", href: "#packages" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ isDark, toggleDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setActive(href);
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass-dark shadow-lg shadow-black/20 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNav("#home")}
            className="flex items-center gap-2 group"
          >
            <motion.div
              whileHover={{ rotate: 45 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-primary"
            >
              <Compass size={28} strokeWidth={1.8} />
            </motion.div>
            <span className="text-xl font-bold text-white">
              Wander<span className="text-primary">lust</span>
            </span>
          </button>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className={`relative text-sm font-medium transition-colors duration-200 group ${
                    active === link.href ? "text-primary" : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                      active === link.href ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleDark}
              className="p-2 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleNav("#contact")}
              className="hidden md:block px-5 py-2 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-sky-400 transition-colors duration-200 shadow-lg shadow-primary/30"
            >
              Book Now
            </motion.button>

            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="md:hidden p-2 text-white/80 hover:text-white"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-4 right-4 z-50 glass-dark rounded-2xl p-6 shadow-2xl"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className={`w-full text-left text-base font-medium py-2 border-b border-white/10 transition-colors ${
                      active === link.href ? "text-primary" : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleNav("#contact")}
                  className="w-full mt-2 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-sky-400 transition-colors"
                >
                  Book Now
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
