import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Calendar, Users, Send } from "lucide-react";

export default function BookingModal({ pkg, onClose }) {
  return (
    <AnimatePresence>
      {pkg && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-dark/70 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
          >
            <div className="bg-white dark:bg-[#0F172A] rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto border border-gray-100 dark:border-white/10">
              {/* Header image */}
              <div className="relative h-44 rounded-t-3xl overflow-hidden">
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent" />
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-9 h-9 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <X size={16} />
                </button>
                <div className="absolute bottom-4 left-5">
                  <p className="text-white/70 text-xs">{pkg.destination}</p>
                  <h3 className="text-white font-bold text-xl">{pkg.title}</h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                {/* Included */}
                <div className="mb-5">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">What's Included</p>
                  <div className="grid grid-cols-2 gap-2">
                    {pkg.services.map((s) => (
                      <div key={s} className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-primary shrink-0" />
                        <span className="text-dark dark:text-white text-xs">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-100 dark:border-white/10 pt-5 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5 flex items-center gap-1">
                        <Calendar size={11} /> Travel Date
                      </label>
                      <input
                        type="date"
                        className="w-full px-3 py-2.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-dark dark:text-white text-sm focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5 flex items-center gap-1">
                        <Users size={11} /> Travelers
                      </label>
                      <select className="w-full px-3 py-2.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-dark dark:text-white text-sm focus:outline-none focus:border-primary transition-colors">
                        {[1,2,3,4,5,6].map(n => (
                          <option key={n} value={n}>{n} {n === 1 ? "person" : "people"}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5 block">Full Name</label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      className="w-full px-3 py-2.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-dark dark:text-white placeholder-gray-400 text-sm focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5 block">Email</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-3 py-2.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-dark dark:text-white placeholder-gray-400 text-sm focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  {/* Price summary */}
                  <div className="flex items-center justify-between py-3 border-t border-gray-100 dark:border-white/10">
                    <div>
                      <p className="text-xs text-gray-400">Total per person</p>
                      <p className="text-2xl font-bold text-dark dark:text-white">${pkg.price.toLocaleString()}</p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={onClose}
                      className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-sky-400 transition-colors shadow-lg shadow-primary/20 text-sm"
                    >
                      Confirm Booking <Send size={14} />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
