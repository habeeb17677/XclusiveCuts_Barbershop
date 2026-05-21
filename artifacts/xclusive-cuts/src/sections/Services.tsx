import { motion } from "framer-motion";
import { Scissors, Zap, Sparkles, Baby, Crop, Droplets, User, Wand2 } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Classic Haircut",
    description: "Precision cut tailored to your head shape and personal style. Includes styling and razor finish."
  },
  {
    icon: Zap,
    title: "Skin Fade",
    description: "Seamless blend from skin to desired length on top. Sharp, clean, and meticulously crafted."
  },
  {
    icon: Crop,
    title: "Beard Trim",
    description: "Sculpting, fading, and lining up to compliment your face structure. Finished with premium oils."
  },
  {
    icon: Baby,
    title: "Kids Haircut",
    description: "Patient, professional service for the young ones. Making sure they leave looking sharp."
  },
  {
    icon: Sparkles,
    title: "Shape Up",
    description: "Crisp lines on the hairline, neck, and beard using trimmers and a straight razor."
  },
  {
    icon: Droplets,
    title: "Hot Towel Shave",
    description: "The ultimate relaxation. Hot steam towel, rich lather, and a smooth straight razor shave."
  },
  {
    icon: User,
    title: "Hair + Beard Combo",
    description: "The full package. Complete haircut and beard grooming for a total transformation."
  },
  {
    icon: Wand2,
    title: "Eyebrow Grooming",
    description: "Clean up and shape eyebrows using trimmers and a straight razor for a polished look."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function Services() {
  return (
    <section id="services" className="py-32 bg-card relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-7xl mb-6 tracking-tight"
          >
            OUR <span className="text-muted-foreground">SERVICES.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground"
          >
            Elite grooming requires elite technique. Our services are designed to elevate your look with precision and care.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="bg-background border border-border p-8 group hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 mb-6 bg-card border border-border rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold tracking-wide mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              {/* Bottom decorative line */}
              <div className="absolute bottom-0 left-0 h-[2px] bg-primary w-0 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <a 
            href="#booking" 
            className="inline-block border border-border px-8 py-3 text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-300"
          >
            VIEW FULL MENU & PRICING
          </a>
        </div>
      </div>
    </section>
  );
}
