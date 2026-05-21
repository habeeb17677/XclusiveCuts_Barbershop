import logoIcon from "@assets/barber_xclusice_-removebg-preview_1779378779355.png";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-background pt-20 pb-10 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 mb-16">
          
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <img src={logoIcon} alt="Xclusive Cuts" className="w-8 h-8 object-contain filter invert contrast-200 dark:invert-0 dark:contrast-100" />
              <div className="flex flex-col">
                <span className="font-display text-xl tracking-widest leading-none">XCLUSIVE CUTS</span>
                <span className="text-[0.6rem] tracking-[0.2em] text-muted-foreground leading-none mt-1">BARBERSHOP</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs text-center md:text-left">
              Lakeland's premier destination for sharp fades, modern grooming, and elite barber culture.
            </p>
          </div>

          <div className="flex gap-12 text-center md:text-left">
            <div>
              <h5 className="font-bold tracking-widest uppercase text-sm mb-4">Navigation</h5>
              <ul className="space-y-3">
                <li><a href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</a></li>
                <li><a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</a></li>
                <li><a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Services</a></li>
                <li><a href="#barbers" className="text-sm text-muted-foreground hover:text-primary transition-colors">Barbers</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold tracking-widest uppercase text-sm mb-4">Support</h5>
              <ul className="space-y-3">
                <li><a href="#booking" className="text-sm text-muted-foreground hover:text-primary transition-colors">Booking</a></li>
                <li><a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-border/50 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Xclusive Cuts Barbershop. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors"><FaInstagram className="w-4 h-4" /></a>
            <a href="#" className="hover:text-primary transition-colors"><FaFacebook className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
