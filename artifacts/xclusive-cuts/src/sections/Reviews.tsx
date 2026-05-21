import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    text: "Carlos is an absolute legend! Best fade I've ever had. This shop has an incredible vibe — clean, professional, and the team is super friendly.",
    author: "Marcus T.",
    rating: 5,
  },
  {
    text: "Took my son here for his first haircut and Melo was amazing with him. Kid-friendly, patient, and the result was perfect.",
    author: "Sarah R.",
    rating: 5,
  },
  {
    text: "Diego always delivers. Sharp shape-up, great attention to detail. I won't go anywhere else in Lakeland.",
    author: "James K.",
    rating: 5,
  },
  {
    text: "The atmosphere here is unmatched. Modern, clean, and everyone's welcoming. Carlos did an incredible job on my fade.",
    author: "Deon M.",
    rating: 5,
  },
  {
    text: "First time here and I was blown away. Professional environment, skilled barbers, and fair pricing. Melo hooked me up!",
    author: "Tyler B.",
    rating: 5,
  },
  {
    text: "Best barbershop in Lakeland period. Took the whole family. Every barber was skilled and the shop felt premium.",
    author: "Miguel C.",
    rating: 5,
  },
];

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section id="reviews" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-7xl tracking-tight"
          >
            CLIENT <span className="text-muted-foreground">STORIES.</span>
          </motion.h2>
        </div>

        <div 
          className="max-w-4xl mx-auto relative h-[300px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col items-center text-center justify-center p-8 bg-card border border-border backdrop-blur-sm"
            >
              <Quote className="w-12 h-12 text-primary/20 mb-6" />
              <div className="flex gap-1 mb-6">
                {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-xl md:text-2xl text-foreground font-light leading-relaxed mb-8 italic">
                "{reviews[currentIndex].text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary">
                  {reviews[currentIndex].author.charAt(0)}
                </div>
                <p className="font-display tracking-widest text-lg text-muted-foreground uppercase">
                  {reviews[currentIndex].author}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Indicators */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1 transition-all duration-300 ${
                  idx === currentIndex ? "w-8 bg-primary" : "w-2 bg-border hover:bg-muted-foreground"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
