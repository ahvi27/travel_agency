import { motion } from "framer-motion";
import { ArrowRight, Play, MapPin } from "lucide-react";

const stats = [
  { value: "150+", label: "Destinations" },
  { value: "40K+", label: "Happy Travelers" },
  { value: "98%", label: "Satisfaction" },
];

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1800&q=85')",
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/50 to-dark/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark/60 via-transparent to-transparent" />

      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute top-32 right-8 md:right-16 glass rounded-2xl px-4 py-3 hidden md:flex items-center gap-3"
      >
        <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
          <MapPin size={14} className="text-accent" />
        </div>
        <div>
          <p className="text-white text-xs font-semibold">Trending Now</p>
          <p className="text-white/60 text-xs">Santorini, Greece</p>
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="w-8 h-0.5 bg-primary" />
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">
              Premium Travel Agency
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight"
          >
            Explore the World{" "}
            <span className="text-gradient">Without Limits</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 text-lg text-white/70 max-w-xl leading-relaxed"
          >
            Curated journeys to over 150 destinations. We handle every detail—flights, hotels,
            guides—so you can arrive fully present.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(14,165,233,0.4)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("destinations")}
              className="flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-2xl shadow-lg shadow-primary/30 hover:bg-sky-400 transition-colors"
            >
              Explore Trips
              <ArrowRight size={18} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("about")}
              className="flex items-center gap-3 px-8 py-4 glass text-white font-semibold rounded-2xl hover:bg-white/20 transition-colors"
            >
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Play size={12} className="ml-0.5" />
              </span>
              Learn More
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-16 flex gap-8 sm:gap-12"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center sm:text-left">
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-white/50 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 border-white/30 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </motion.div>
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}
