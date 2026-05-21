import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const SHOP_ADDRESS = "1234 Florida Ave S, Lakeland, FL 33803";
const SHOP_LAT = 28.0322;
const SHOP_LNG = -81.9498;

function handleGetDirections() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const url = `https://www.google.com/maps/dir/${latitude},${longitude}/${encodeURIComponent(SHOP_ADDRESS)}`;
        window.open(url, "_blank", "noopener,noreferrer");
      },
      () => {
        const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(SHOP_ADDRESS)}&destination_place_id=Xclusive+Cuts+Barbershop`;
        window.open(url, "_blank", "noopener,noreferrer");
      },
      { timeout: 8000 }
    );
  } else {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SHOP_ADDRESS)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }
}

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background relative z-10 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4"
          >
            Find Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-7xl tracking-tight mb-6"
          >
            VISIT <span className="text-muted-foreground">US.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* Location */}
            <div className="flex gap-5 items-start group">
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
                <button
                  onClick={handleGetDirections}
                  data-testid="button-get-directions"
                  className="inline-flex items-center gap-2 mt-4 text-xs font-bold tracking-widest uppercase border-b border-primary text-primary hover:opacity-70 transition-opacity pb-1 cursor-pointer"
                >
                  <MapPin className="w-3 h-3" />
                  GET DIRECTIONS
                </button>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-5 items-start group">
              <div className="w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center shrink-0 group-hover:border-primary transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-sm font-bold tracking-widest uppercase mb-2">Phone</h4>
                <p className="text-muted-foreground">(863) 555-0199</p>
                <a
                  href="tel:+18635550199"
                  data-testid="link-call-now"
                  className="inline-block mt-4 text-xs font-bold tracking-widest uppercase border-b border-primary text-primary hover:opacity-70 transition-opacity pb-1"
                >
                  CALL NOW
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-5 items-start group">
              <div className="w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center shrink-0 group-hover:border-primary transition-colors">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-sm font-bold tracking-widest uppercase mb-2">Hours</h4>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li className="flex gap-6"><span className="w-24">Mon – Fri</span><span>9:00 AM – 7:00 PM</span></li>
                  <li className="flex gap-6"><span className="w-24">Saturday</span><span>8:00 AM – 6:00 PM</span></li>
                  <li className="flex gap-6 text-foreground font-medium"><span className="w-24">Sunday</span><span>10:00 AM – 4:00 PM</span></li>
                </ul>
              </div>
            </div>

            {/* Socials */}
            <div className="pt-6 border-t border-border flex gap-3">
              <a
                href="https://www.instagram.com/xclusivecutsbarbershop"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-instagram"
                className="w-12 h-12 bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/xclusivecutsbarbershop"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-facebook"
                className="w-12 h-12 bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-[420px] md:h-[500px] border border-border relative bg-muted overflow-hidden"
          >
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532!2d${SHOP_LNG}!3d${SHOP_LAT}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd3f24b2203e05%3A0xc39f2070e7eab2a0!2sLakeland%2C%20FL!5e0!3m2!1sen!2sus!4v1709663162788!5m2!1sen!2sus`}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(100%) contrast(1.1) brightness(0.9)" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Xclusive Cuts Location Map"
            />
            {/* Overlay get directions button on map */}
            <button
              onClick={handleGetDirections}
              data-testid="button-map-directions"
              className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase px-6 py-3 hover:bg-primary/80 transition-colors shadow-lg flex items-center gap-2 whitespace-nowrap"
            >
              <MapPin className="w-4 h-4" />
              GET DIRECTIONS FROM MY LOCATION
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
