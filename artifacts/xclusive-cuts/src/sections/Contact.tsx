import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-background relative z-10 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-7xl tracking-tight mb-6"
          >
            VISIT <span className="text-muted-foreground">US.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Contact Info Blocks */}
            <div className="flex gap-6 items-start group">
              <div className="w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center shrink-0 group-hover:border-primary transition-colors">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-sm font-bold tracking-widest uppercase mb-2">Location</h4>
                <p className="text-muted-foreground leading-relaxed">
                  1234 Florida Ave S<br />
                  Lakeland, FL 33803<br />
                  United States
                </p>
                <a href="#" className="inline-block mt-4 text-xs font-bold tracking-widest uppercase border-b border-primary text-primary hover:text-white transition-colors pb-1">
                  GET DIRECTIONS
                </a>
              </div>
            </div>

            <div className="flex gap-6 items-start group">
              <div className="w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center shrink-0 group-hover:border-primary transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-sm font-bold tracking-widest uppercase mb-2">Phone</h4>
                <p className="text-muted-foreground">(863) 555-0199</p>
                <a href="tel:+18635550199" className="inline-block mt-4 text-xs font-bold tracking-widest uppercase border-b border-primary text-primary hover:text-white transition-colors pb-1">
                  CALL NOW
                </a>
              </div>
            </div>

            <div className="flex gap-6 items-start group">
              <div className="w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center shrink-0 group-hover:border-primary transition-colors">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-sm font-bold tracking-widest uppercase mb-2">Hours</h4>
                <ul className="text-muted-foreground space-y-1">
                  <li className="flex justify-between w-48"><span>Mon - Fri</span> <span>9am - 7pm</span></li>
                  <li className="flex justify-between w-48"><span>Saturday</span> <span>8am - 6pm</span></li>
                  <li className="flex justify-between w-48 text-primary"><span>Sunday</span> <span>10am - 4pm</span></li>
                </ul>
              </div>
            </div>
            
            <div className="pt-8 border-t border-border flex gap-4">
              <a href="#" className="w-12 h-12 bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors group">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors group">
                <FaFacebook className="w-5 h-5" />
              </a>
            </div>

          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-[500px] border border-border relative bg-muted"
          >
            <div className="absolute inset-0 bg-background/20 mix-blend-color z-10 pointer-events-none" />
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112760.10123512302!2d-82.04018258385614!3d28.032230485906752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd3f24b2203e05%3A0xc39f2070e7eab2a0!2sLakeland%2C%20FL!5e0!3m2!1sen!2sus!4v1709663162788!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(100%) contrast(1.2)' }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="relative z-0"
              title="Xclusive Cuts Location Map"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
