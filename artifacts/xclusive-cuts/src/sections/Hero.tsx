import { motion } from "framer-motion";
import shopImg from "@assets/barbershop_building_1779379203539.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Heavy Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/80 md:bg-background/60 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
        <img 
          src={shopImg} 
          alt="Xclusive Cuts Barbershop Interior" 
          className="w-full h-full object-cover filter grayscale contrast-125"
        />
      </div>

      {/* Decorative Blurs */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[120px] z-0 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px] z-0 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center mt-20">
        <div className="overflow-hidden mb-2">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className="font-display text-6xl md:text-8xl lg:text-9xl tracking-tight text-primary leading-[0.85]"
          >
            PRECISION CUTS.
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.1 }}
            className="font-display text-6xl md:text-8xl lg:text-9xl tracking-tight text-muted-foreground leading-[0.85]"
          >
            PREMIUM EXPERIENCE.
          </motion.h1>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground font-light tracking-wide"
        >
          Lakeland's destination for sharp fades, modern grooming, and elite barber culture.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row items-center gap-6"
        >
          <a 
            href="#booking" 
            className="w-full sm:w-auto px-10 py-4 bg-primary text-primary-foreground font-bold tracking-widest uppercase text-sm hover:bg-primary/90 transition-all duration-300 hover:scale-105"
          >
            BOOK APPOINTMENT
          </a>
          <a 
            href="tel:+18635550199" 
            className="w-full sm:w-auto px-10 py-4 bg-transparent border border-primary text-primary font-bold tracking-widest uppercase text-sm hover:bg-primary/10 transition-all duration-300"
          >
            CALL NOW
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-24 w-full max-w-4xl border-t border-border pt-8 flex flex-wrap justify-center gap-x-12 gap-y-6 text-sm tracking-widest uppercase text-muted-foreground"
        >
          <span className="flex items-center gap-2"><strong className="text-primary text-lg">177+</strong> REVIEWS</span>
          <span className="flex items-center gap-2"><strong className="text-primary text-lg">1000+</strong> HAPPY CLIENTS</span>
          <span className="flex items-center gap-2"><strong className="text-primary text-lg">5+</strong> EXPERT BARBERS</span>
          <span className="flex items-center gap-2"><strong className="text-primary text-lg">4.9★</strong> RATING</span>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hidden md:flex"
      >
        <span className="text-[0.6rem] tracking-[0.2em] text-muted-foreground uppercase rotate-90 mb-6">SCROLL</span>
        <motion.div 
          animate={{ height: ["0px", "40px", "0px"], top: ["0%", "50%", "100%"] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] bg-primary relative overflow-hidden h-10"
        >
          <div className="absolute top-0 w-full h-1/2 bg-white" />
        </motion.div>
      </motion.div>
    </section>
  );
}
