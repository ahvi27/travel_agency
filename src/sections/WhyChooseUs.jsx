import { motion } from "framer-motion";
import { ShieldCheck, Banknote, UserCheck, Headphones } from "lucide-react";
import SectionHeader from "../components/SectionHeader";

const features = [
  {
    icon: ShieldCheck,
    title: "Safe Travel",
    description: "Vetted partners, comprehensive insurance options, and real-time safety monitoring on every itinerary.",
    color: "from-sky-500 to-blue-600",
  },
  {
    icon: Banknote,
    title: "Transparent Pricing",
    description: "The price you see is the price you pay. No booking fees, no surprise surcharges on arrival.",
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: UserCheck,
    title: "Expert Guides",
    description: "Every destination is paired with a local specialist who knows which hidden alley leads to the best coffee.",
    color: "from-emerald-400 to-teal-500",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Whether your flight is delayed or you need a last-minute recommendation, we're one message away.",
    color: "from-purple-500 to-violet-600",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: image block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80"
                alt="Travel team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-6 md:-right-10 bg-white dark:bg-dark/90 rounded-2xl p-5 shadow-2xl border border-gray-100 dark:border-white/10 max-w-[200px]"
            >
              <p className="text-4xl font-black text-dark dark:text-white">15+</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Years crafting unforgettable journeys</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -top-6 -left-6 md:-left-10 bg-primary rounded-2xl p-5 shadow-2xl max-w-[180px]"
            >
              <p className="text-4xl font-black text-white">98%</p>
              <p className="text-white/70 text-sm mt-1">Satisfaction rate from verified reviews</p>
            </motion.div>
          </motion.div>

          {/* Right: content */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary text-sm font-semibold tracking-widest uppercase"
            >
              Why Choose Us
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-3 text-3xl md:text-4xl font-bold text-dark dark:text-white leading-tight"
            >
              Travel with a team that cares as much as you do
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-gray-500 dark:text-gray-400 leading-relaxed"
            >
              We started as a small group of travelers who couldn't find an agency that matched our standards. Fifteen years later, we're still just as obsessive about the details.
            </motion.p>

            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i + 0.3 }}
                  className="flex gap-4 p-5 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-primary/30 transition-colors group"
                >
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center shrink-0 shadow-md`}>
                    <f.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark dark:text-white text-sm">{f.title}</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-xs mt-1 leading-relaxed">{f.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
