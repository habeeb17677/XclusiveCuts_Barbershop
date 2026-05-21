import { motion } from "framer-motion";
import shopImg from "@assets/barbershop_building_1779379203539.jpg";

const stats = [
  { label: "Reviews", value: "177+" },
  { label: "Happy Clients", value: "1000+" },
  { label: "Expert Barbers", value: "5+" },
  { label: "Rating", value: "4.9★" },
];

export function About() {
  return (
    <section id="about" className="py-32 bg-background relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <h2 className="font-display text-5xl md:text-7xl mb-8 tracking-tight">THE XCLUSIVE<br/><span className="text-muted-foreground">STANDARD.</span></h2>
            
            <div className="space-y-6 text-muted-foreground text-lg font-light leading-relaxed">
              <p>
                Xclusive Cuts isn't just a place to get a haircut — it's Lakeland's premier grooming destination where modern precision meets classic barbering culture.
              </p>
              <p>
                We built this space for the modern man. A family-friendly environment that doesn't compromise on luxury or edge. From sharp skin fades to hot towel shaves, our team of master barbers is dedicated to perfecting your look with obsessive attention to detail.
              </p>
              <p>
                When you sit in our chairs, you're not just a client. You're part of the Xclusive culture.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              {stats.map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-6 bg-card border border-border backdrop-blur-sm relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <h3 className="text-4xl font-display tracking-wider text-primary">{stat.value}</h3>
                    <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mt-2">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="relative h-[600px] lg:h-[800px] w-full"
          >
            <div className="absolute inset-0 border border-border translate-x-4 translate-y-4 z-0" />
            <img 
              src={shopImg} 
              alt="Xclusive Cuts Interior" 
              className="w-full h-full object-cover relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
            />
            
            {/* Decorative Corner Accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary z-20" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-primary z-20" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
