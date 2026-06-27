import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "../data/destinations";
import SectionHeader from "../components/SectionHeader";

function StarRow({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < count ? "text-accent fill-accent" : "text-gray-300"}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <SectionHeader
          eyebrow="What Travelers Say"
          title="Stories from the Road"
          subtitle="Honest accounts from people who trusted us with their best days."
          light
        />

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Featured testimonial */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="glass rounded-3xl p-8"
              >
                <Quote size={40} className="text-primary/30 mb-4" />
                <p className="text-white/80 text-lg leading-relaxed font-light italic">
                  "{testimonials[active].review}"
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <img
                    src={testimonials[active].avatar}
                    alt={testimonials[active].name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/50"
                  />
                  <div>
                    <p className="text-white font-semibold">{testimonials[active].name}</p>
                    <p className="text-white/50 text-sm">{testimonials[active].role} · {testimonials[active].location}</p>
                    <StarRow count={testimonials[active].rating} />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex gap-3 mt-6">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-xl glass text-white hover:bg-white/20 transition-colors flex items-center justify-center"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-11 h-11 rounded-xl bg-primary text-white hover:bg-sky-400 transition-colors flex items-center justify-center"
              >
                <ChevronRight size={18} />
              </button>
              <div className="flex items-center gap-2 ml-3">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === active ? "bg-primary w-6" : "bg-white/20 w-1.5"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Side cards */}
          <div className="space-y-4">
            {testimonials.map((t, i) => (
              <motion.button
                key={t.id}
                onClick={() => setActive(i)}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 ${
                  i === active
                    ? "border-primary/50 bg-primary/10"
                    : "border-white/10 bg-white/5 hover:bg-white/10"
                }`}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-medium text-sm">{t.name}</p>
                    <p className="text-white/40 text-xs truncate">{t.role}</p>
                  </div>
                  <StarRow count={t.rating} />
                </div>
                <p className="text-white/50 text-xs mt-3 line-clamp-2 leading-relaxed">"{t.review}"</p>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
