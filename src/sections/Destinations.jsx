import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { destinations } from "../data/destinations";
import SectionHeader from "../components/SectionHeader";

const badgeColors = {
  Bestseller: "bg-accent/20 text-accent",
  Popular: "bg-primary/20 text-primary",
  Adventure: "bg-emerald-500/20 text-emerald-400",
  Luxury: "bg-purple-500/20 text-purple-400",
  Scenic: "bg-rose-500/20 text-rose-400",
  Value: "bg-teal-500/20 text-teal-400",
};

function DestinationCard({ dest, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-3xl overflow-hidden cursor-pointer card-shadow"
    >
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={dest.image}
          alt={dest.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />

        {/* Badge */}
        <span className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full ${badgeColors[dest.badge] ?? "bg-white/20 text-white"}`}>
          {dest.badge}
        </span>

        {/* Price */}
        <div className="absolute top-4 right-4 glass rounded-2xl px-3 py-1.5">
          <span className="text-white font-bold text-sm">From ${dest.price}</span>
        </div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <div className="flex items-center gap-1.5 mb-1">
          <MapPin size={13} className="text-primary" />
          <span className="text-primary text-xs font-medium">{dest.country}</span>
        </div>
        <h3 className="text-white font-bold text-xl mb-1">{dest.name}</h3>
        <p className="text-white/60 text-sm leading-relaxed line-clamp-2 mb-3">{dest.description}</p>

        <motion.button
          whileHover={{ x: 4 }}
          className="flex items-center gap-1.5 text-primary text-sm font-semibold"
        >
          Explore <ArrowRight size={14} />
        </motion.button>
      </div>
    </motion.div>
  );
}

export default function Destinations() {
  return (
    <section id="destinations" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="Where to go"
        title="Popular Destinations"
        subtitle="From windswept Aegean cliffs to Andean cloud cities—handpicked destinations that stay with you long after you land."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((dest, i) => (
          <DestinationCard key={dest.id} dest={dest} index={i} />
        ))}
      </div>

      <div className="text-center mt-12">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-8 py-3.5 border-2 border-primary text-primary font-semibold rounded-2xl hover:bg-primary hover:text-white transition-all duration-200"
        >
          View All Destinations
        </motion.button>
      </div>
    </section>
  );
}
