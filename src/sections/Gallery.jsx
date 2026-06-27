import { motion } from "framer-motion";
import { galleryImages } from "../data/destinations";
import SectionHeader from "../components/SectionHeader";
import { ZoomIn } from "lucide-react";

export default function Gallery() {
  return (
    <section className="py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Visual Journal"
          title="The World in Frame"
          subtitle="A glimpse into the moments waiting for you."
        />

        <div className="masonry-col">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="masonry-item group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  img.tall ? "h-72" : "h-48"
                }`}
              />
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-colors duration-300 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="opacity-0 group-hover:opacity-100 w-10 h-10 glass rounded-full flex items-center justify-center transition-all duration-300"
                >
                  <ZoomIn size={18} className="text-white" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
