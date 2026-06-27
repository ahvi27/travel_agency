import { motion, AnimatePresence } from "framer-motion";
import { Compass } from "lucide-react";

export default function LoadingScreen({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-dark"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="text-primary mb-6"
          >
            <Compass size={56} strokeWidth={1.5} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <span className="text-2xl font-bold text-white tracking-wide">
              Wander<span className="text-primary">lust</span>
            </span>
            <p className="text-white/40 text-sm mt-2 tracking-widest uppercase">
              Preparing your journey
            </p>
          </motion.div>

          <motion.div
            className="mt-10 w-48 h-0.5 bg-white/10 rounded-full overflow-hidden"
          >
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
