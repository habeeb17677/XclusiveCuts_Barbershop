import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

import hair1 from "@assets/hair_1_1779380664489.jpeg";
import hair2 from "@assets/hair_2_1779380664488.jpeg";
import hair3 from "@assets/hair_3_1779380664487.jpeg";
import hair4 from "@assets/hair_4_1779380664486.jpeg";
import hair5 from "@assets/hair_5_1779380664486.jpeg";
import hair6 from "@assets/hair_6_1779380664485.jpeg";
import hair7 from "@assets/hair_7_1779380664484.jpeg";
import hair8 from "@assets/hair_8_1779380664483.jpeg";
import hair9 from "@assets/hair_9_1779380664483.jpeg";
import hair10 from "@assets/hair_10_1779380664482.jpeg";
import hair11 from "@assets/hair_11_1779380664481.jpeg";
import hair12 from "@assets/hair_12_1779380664480.jpeg";

const images = [
  { id: 1, src: hair1, alt: "Skin fade with sharp taper" },
  { id: 2, src: hair2, alt: "Low fade with beard shape up" },
  { id: 3, src: hair3, alt: "Curly mullet with high fade" },
  { id: 4, src: hair4, alt: "Kids textured cut with fade" },
  { id: 5, src: hair5, alt: "Clean skin fade with full beard" },
  { id: 6, src: hair6, alt: "Curly top with low fade" },
  { id: 7, src: hair7, alt: "Kids taper fade" },
  { id: 8, src: hair8, alt: "Textured youth cut with fade" },
  { id: 9, src: hair9, alt: "Slicked back with skin fade" },
  { id: 10, src: hair10, alt: "Kids bowl cut with fade lineup" },
  { id: 11, src: hair11, alt: "Textured crop with skin fade" },
  { id: 12, src: hair12, alt: "Curly bleached top with design" },
];

export function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const openLightbox = (idx: number) => setSelectedIdx(idx);
  const closeLightbox = () => setSelectedIdx(null);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIdx((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  };

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIdx((i) => (i === null ? null : (i + 1) % images.length));
  };

  return (
    <section id="gallery" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4"
          >
            Our Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-7xl tracking-tight"
          >
            FRESH <span className="text-muted-foreground">CUTS.</span>
          </motion.h2>
        </div>

        {/* Responsive masonry-style grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
          {images.map((img, idx) => {
            const isWide = idx === 0 || idx === 4 || idx === 9;
            const isTall = idx === 2 || idx === 7;
            return (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: (idx % 4) * 0.07 }}
                data-testid={`gallery-image-${img.id}`}
                className={`relative group cursor-pointer overflow-hidden bg-muted ${
                  isWide ? "col-span-2" : ""
                } ${isTall ? "row-span-2" : ""}`}
                style={{ aspectRatio: isTall ? "3/4" : isWide ? "16/9" : "1/1" }}
                onClick={() => openLightbox(idx)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3">
                    <ZoomIn className="text-white w-5 h-5 md:w-6 md:h-6" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[200] bg-black/97 backdrop-blur-xl flex items-center justify-center p-4 cursor-zoom-out"
            data-testid="lightbox-overlay"
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 md:top-6 md:right-6 text-white/60 hover:text-white transition-colors z-10 bg-white/10 hover:bg-white/20 rounded-full p-2"
              data-testid="lightbox-close"
            >
              <X size={24} />
            </button>

            {/* Prev */}
            <button
              onClick={prev}
              className="absolute left-3 md:left-6 text-white/60 hover:text-white transition-colors z-10 bg-white/10 hover:bg-white/20 rounded-full p-3"
              data-testid="lightbox-prev"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Image */}
            <motion.div
              key={selectedIdx}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full mx-12 md:mx-20"
            >
              <img
                src={images[selectedIdx].src}
                alt={images[selectedIdx].alt}
                className="w-full max-h-[85vh] object-contain shadow-2xl"
              />
              <p className="text-center text-white/40 text-xs tracking-widest uppercase mt-4">
                {images[selectedIdx].alt} &nbsp;·&nbsp; {selectedIdx + 1} / {images.length}
              </p>
            </motion.div>

            {/* Next */}
            <button
              onClick={next}
              className="absolute right-3 md:right-6 text-white/60 hover:text-white transition-colors z-10 bg-white/10 hover:bg-white/20 rounded-full p-3"
              data-testid="lightbox-next"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
