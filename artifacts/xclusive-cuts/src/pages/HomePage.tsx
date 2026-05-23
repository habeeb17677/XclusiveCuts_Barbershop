import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Services } from "@/sections/Services";
import { Barbers } from "@/sections/Barbers";
import { Gallery } from "@/sections/Gallery";
import { Reviews } from "@/sections/Reviews";
import { Booking } from "@/sections/Booking";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      <ScrollProgress />
      <Navbar />
      
      <Hero />
      <About />
      <Services />
      <Barbers />
      <Gallery />
      <Reviews />
      <Booking />
      <Contact />
      
      <Footer />
      
      <ScrollToTop />
      
      {/* Mobile sticky book button */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-lg border-t border-border z-40">
        <a 
          href="#booking" 
          className="flex w-full items-center justify-center py-4 bg-primary text-primary-foreground font-bold tracking-widest uppercase text-sm rounded-none hover:bg-primary/90 transition-colors"
        >
          BOOK NOW
        </a>
      </div>
    </main>
  );
}
