import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

// Assuming images are in assets folder as generated
import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";
import gallery5 from "@/assets/gallery-5.png";
import gallery6 from "@/assets/gallery-6.png";
import gallery7 from "@/assets/gallery-7.png";
import gallery8 from "@/assets/gallery-8.png";
import gallery9 from "@/assets/gallery-9.png";

const images = [
  { id: 1, src: gallery1, alt: "Barber shop fade cut" },
  { id: 2, src: gallery2, alt: "Barber shop beard trim" },
  { id: 3, src: gallery3, alt: "Barber shop interior" },
  { id: 4, src: gallery4, alt: "Barber shop tools" },
  { id: 5, src: gallery5, alt: "Barber working" },
  { id: 6, src: gallery6, alt: "Hot towel shave" },
  { id: 7, src: gallery7, alt: "Barber shop mirror reflection" },
  { id: 8, src: gallery8, alt: "Shape up detail" },
  { id: 9, src: gallery9, alt: "Luxury barber products" },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-7xl tracking-tight"
          >
            OUR <span className="text-muted-foreground">WORK.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 auto-rows-[200px] md:auto-rows-[300px]">
          {images.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              className={`relative group cursor-pointer overflow-hidden ${
                idx === 2 || idx === 6 ? "col-span-2 row-span-2" : ""
              } ${idx === 4 ? "col-span-2" : ""}`}
              onClick={() => setSelectedImage(img.src)}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="text-white w-8 h-8 opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" />
              </div>
              <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Gallery preview"
              className="max-w-full max-h-[90vh] object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
