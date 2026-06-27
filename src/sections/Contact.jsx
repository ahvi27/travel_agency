import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send, Camera, MessageCircle, Globe, PlayCircle } from "lucide-react";
import SectionHeader from "../components/SectionHeader";

const contactInfo = [
  { icon: MapPin, label: "Find Us", value: "14 Nomad Lane, Voyage District, CA 90210" },
  { icon: Mail, label: "Email Us", value: "hello@wanderlust.travel" },
  { icon: Phone, label: "Call Us", value: "+1 (800) 927-8349" },
];

const socials = [
  { icon: Camera, href: "#", label: "Instagram" },
  { icon: MessageCircle, href: "#", label: "Twitter" },
  { icon: Globe, href: "#", label: "Facebook" },
  { icon: PlayCircle, href: "#", label: "YouTube" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Get in Touch"
          title="Start Planning Your Journey"
          subtitle="Tell us your dream destination and we'll take it from there."
        />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-white/5 rounded-3xl p-8 shadow-xl shadow-gray-100 dark:shadow-none border border-gray-100 dark:border-white/10"
          >
            <h3 className="text-xl font-bold text-dark dark:text-white mb-6">Send us a message</h3>

            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1.5 block">First Name</label>
                  <input
                    type="text"
                    placeholder="Sofia"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-dark dark:text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1.5 block">Last Name</label>
                  <input
                    type="text"
                    placeholder="Andersen"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-dark dark:text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1.5 block">Email Address</label>
                <input
                  type="email"
                  placeholder="sofia@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-dark dark:text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1.5 block">Dream Destination</label>
                <input
                  type="text"
                  placeholder="Santorini, Japan, Maldives..."
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-dark dark:text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1.5 block">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your travel plans, dates, budget, and anything else that matters to you..."
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-dark dark:text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-sky-400 transition-colors shadow-lg shadow-primary/20 mt-2"
              >
                Send Message <Send size={16} />
              </motion.button>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {contactInfo.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 p-5 bg-white dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/10"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <item.icon size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wide font-medium mb-0.5">{item.label}</p>
                  <p className="text-dark dark:text-white font-medium text-sm">{item.value}</p>
                </div>
              </motion.div>
            ))}

            {/* Map placeholder */}
            <div className="relative rounded-2xl overflow-hidden h-52">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
                alt="Office location map"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                <div className="glass rounded-2xl px-5 py-3 flex items-center gap-2">
                  <MapPin size={16} className="text-primary" />
                  <span className="text-white text-sm font-medium">Voyage District, CA</span>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Follow our journeys</p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-primary hover:border-primary/40 transition-colors"
                    aria-label={s.label}
                  >
                    <s.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
