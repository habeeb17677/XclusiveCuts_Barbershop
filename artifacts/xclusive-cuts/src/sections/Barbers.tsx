import { motion } from "framer-motion";
import { Star } from "lucide-react";
import carlosImg from "@assets/carlos_barber_1779379050257.jpeg";
import meloImg from "@assets/melo_barber_1779379050256.jpeg";
import edenImg from "@assets/eden_barber_1779379050256.jpeg";
import drCutzImg from "@assets/Dr._Cutz_barber_1779379050255.jpeg";
import knoImg from "@assets/Kn0_barber_1779379050253.jpeg";

const barbers = [
  { name: "Carlos Cuts", rating: "5.0", reviews: 439, image: carlosImg },
  { name: "Melo", rating: "5.0", reviews: 319, image: meloImg },
  { name: "Eden", rating: "5.0", reviews: 136, image: edenImg },
  { name: "Dr. Cutz", rating: "5.0", reviews: 36, image: drCutzImg },
  { name: "Emilio Cuts", rating: "5.0", reviews: 11, image: null, initials: "EC" },
  { name: "Kn0Barber", rating: "5.0", reviews: 5, image: knoImg },
];

export function Barbers() {
  return (
    <section id="barbers" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-5xl md:text-7xl tracking-tight"
            >
              MEET THE <span className="text-muted-foreground">TEAM.</span>
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground max-w-sm">
              Masters of their craft. Every barber at Xclusive brings years of experience and a passion for precision grooming.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {barbers.map((barber, idx) => (
            <motion.div
              key={barber.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-card border border-border overflow-hidden flex flex-col"
            >
              {/* Photo Area */}
              <div className="aspect-[4/5] overflow-hidden bg-muted relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 duration-500" />
                {barber.image ? (
                  <img 
                    src={barber.image} 
                    alt={barber.name} 
                    className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-card text-muted-foreground font-display text-8xl grayscale group-hover:grayscale-0 transition-all duration-700">
                    {barber.initials}
                  </div>
                )}
                
                {/* Book Button Overlay */}
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-500 z-20 translate-y-4 group-hover:translate-y-0">
                  <a 
                    href="#booking" 
                    className="px-8 py-3 bg-primary text-primary-foreground font-bold tracking-widest uppercase text-sm hover:scale-105 transition-transform"
                  >
                    BOOK NOW
                  </a>
                </div>
              </div>

              {/* Info Area */}
              <div className="p-6 relative z-30 bg-card border-t border-border">
                <h3 className="font-display text-3xl tracking-wide mb-2">{barber.name}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="flex items-center text-primary font-bold">
                    {barber.rating} <Star className="w-4 h-4 ml-1 fill-primary" />
                  </span>
                  <span>|</span>
                  <span>{barber.reviews} Reviews</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
