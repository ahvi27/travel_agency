import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Star, Clock, Thermometer, Globe, ArrowRight } from "lucide-react";

const details = {
  1: { weather: "25°C Sunny", language: "Greek", bestTime: "Apr – Oct", rating: 4.9, reviews: 528, highlights: ["Caldera Sunset Cruise", "Oia Village Walk", "Black Sand Beach", "Wine Tasting Tour"] },
  2: { weather: "18°C Mild", language: "Japanese", bestTime: "Mar – May", rating: 4.8, reviews: 412, highlights: ["Fushimi Inari Gates", "Arashiyama Bamboo", "Gion District", "Tea Ceremony"] },
  3: { weather: "15°C Cool", language: "Spanish", bestTime: "May – Sep", rating: 4.7, reviews: 334, highlights: ["Machu Picchu Citadel", "Inca Trail Trek", "Sacred Valley", "Cusco City Tour"] },
  4: { weather: "30°C Tropical", language: "Dhivehi", bestTime: "Nov – Apr", rating: 5.0, reviews: 621, highlights: ["Snorkeling with Mantas", "Underwater Restaurant", "Sunset Dolphin Cruise", "Private Island Picnic"] },
  5: { weather: "22°C Warm", language: "Italian", bestTime: "May – Oct", rating: 4.8, reviews: 389, highlights: ["Positano Cliffside Walk", "Lemon Grove Tour", "Boat to Capri", "Cooking Class"] },
  6: { weather: "28°C Humid", language: "Balinese", bestTime: "Apr – Oct", rating: 4.6, reviews: 714, highlights: ["Tegalalang Rice Terraces", "Uluwatu Temple", "Seminyak Beach", "Ubud Art Market"] },
};

export default function DestinationModal({ dest, onClose }) {
  const info = dest ? details[dest.id] : null;

  return (
    <AnimatePresence>
      {dest && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-dark/70 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
          >
            <div className="bg-white dark:bg-[#0F172A] rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto border border-gray-100 dark:border-white/10">
              {/* Hero image */}
              <div className="relative h-56 rounded-t-3xl overflow-hidden">
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-9 h-9 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <X size={16} />
                </button>
                <div className="absolute bottom-4 left-5">
                  <div className="flex items-center gap-1.5 mb-1">
                    <MapPin size={12} className="text-primary" />
                    <span className="text-primary text-xs font-medium">{dest.country}</span>
                  </div>
                  <h3 className="text-white font-bold text-2xl">{dest.name}</h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-5">
                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-gray-50 dark:bg-white/5 rounded-2xl p-3 text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Star size={12} className="text-accent fill-accent" />
                      <span className="text-dark dark:text-white font-bold text-sm">{info.rating}</span>
                    </div>
                    <p className="text-gray-400 text-xs">{info.reviews} reviews</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-white/5 rounded-2xl p-3 text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Thermometer size={12} className="text-primary" />
                      <span className="text-dark dark:text-white font-bold text-xs">{info.weather}</span>
                    </div>
                    <p className="text-gray-400 text-xs">Avg. weather</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-white/5 rounded-2xl p-3 text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Clock size={12} className="text-emerald-400" />
                      <span className="text-dark dark:text-white font-bold text-xs">{info.bestTime}</span>
                    </div>
                    <p className="text-gray-400 text-xs">Best time</p>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{dest.description}</p>
                </div>

                {/* Language */}
                <div className="flex items-center gap-2">
                  <Globe size={14} className="text-primary" />
                  <span className="text-gray-500 dark:text-gray-400 text-sm">Language: <span className="text-dark dark:text-white font-medium">{info.language}</span></span>
                </div>

                {/* Highlights */}
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Top Highlights</p>
                  <div className="grid grid-cols-2 gap-2">
                    {info.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-xl px-3 py-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span className="text-dark dark:text-white text-xs font-medium">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-white/10">
                  <div>
                    <p className="text-xs text-gray-400">Starting from</p>
                    <p className="text-2xl font-bold text-dark dark:text-white">${dest.price.toLocaleString()}</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={onClose}
                    className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-sky-400 transition-colors shadow-lg shadow-primary/20 text-sm"
                  >
                    Book This Trip <ArrowRight size={14} />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
