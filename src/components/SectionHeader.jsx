import { motion } from "framer-motion";

export default function SectionHeader({ eyebrow, title, subtitle, light = false }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-16">
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-3"
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`text-3xl md:text-4xl font-bold leading-tight ${
          light ? "text-white" : "text-dark dark:text-white"
        }`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`mt-4 text-base leading-relaxed ${
            light ? "text-white/60" : "text-gray-500 dark:text-gray-400"
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
