import { motion } from "framer-motion";
import { Star, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { packages } from "../data/destinations";
import SectionHeader from "../components/SectionHeader";

const categoryColors = {
  Luxury: "text-purple-400 bg-purple-400/10",
  Cultural: "text-amber-400 bg-amber-400/10",
  Adventure: "text-emerald-400 bg-emerald-400/10",
};

function PackageCard({ pkg, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white dark:bg-white/5 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-primary/10 transition-shadow duration-300 border border-gray-100 dark:border-white/10"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
        <span className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[pkg.category] ?? "bg-white/20 text-white"}`}>
          {pkg.category}
        </span>
        <div className="absolute bottom-4 left-4 flex items-center gap-1 glass rounded-xl px-2.5 py-1">
          <Clock size={12} className="text-accent" />
          <span className="text-white text-xs font-medium">{pkg.duration}</span>
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-bold text-lg text-dark dark:text-white">{pkg.title}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-0.5">{pkg.destination}</p>
          </div>
          <div className="flex items-center gap-1 shrink-0 ml-2">
            <Star size={14} className="text-accent fill-accent" />
            <span className="text-sm font-semibold text-dark dark:text-white">{pkg.rating}</span>
            <span className="text-gray-400 text-xs">({pkg.reviews})</span>
          </div>
        </div>

        {/* Services */}
        <ul className="mt-4 space-y-1.5">
          {pkg.services.slice(0, 4).map((s) => (
            <li key={s} className="flex items-center gap-2">
              <CheckCircle2 size={13} className="text-primary shrink-0" />
              <span className="text-gray-600 dark:text-gray-300 text-xs">{s}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 pt-5 border-t border-gray-100 dark:border-white/10 flex items-center justify-between">
          <div>
            <p className="text-gray-400 text-xs">per person</p>
            <p className="text-2xl font-bold text-dark dark:text-white">
              ${pkg.price.toLocaleString()}
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-sky-400 transition-colors shadow-md shadow-primary/20"
          >
            Book Now <ArrowRight size={14} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Packages() {
  return (
    <section id="packages" className="py-24 bg-gray-50 dark:bg-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Travel Packages"
          title="Trips Crafted to Impress"
          subtitle="Everything included—no hidden extras, no planning stress. Pick a package and show up."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, i) => (
            <PackageCard key={pkg.id} pkg={pkg} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
