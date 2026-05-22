import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import shopImg from "@assets/barbershop_building_1779379203539.jpg";

const HOURS: Record<number, { open: number; close: number } | null> = {
  0: { open: 10, close: 16 }, // Sunday
  1: { open: 9,  close: 19 }, // Monday
  2: { open: 9,  close: 19 }, // Tuesday
  3: { open: 9,  close: 19 }, // Wednesday
  4: { open: 9,  close: 19 }, // Thursday
  5: { open: 9,  close: 19 }, // Friday
  6: { open: 8,  close: 18 }, // Saturday
};

const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function fmt12(h: number) {
  const suffix = h >= 12 ? "PM" : "AM";
  const hour = h % 12 === 0 ? 12 : h % 12;
  return `${hour}:00 ${suffix}`;
}

function getShopStatus() {
  const now = new Date();
  const etParts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    hour: "numeric",
    minute: "numeric",
    weekday: "short",
    hour12: false,
  }).formatToParts(now);

  const dayStr = etParts.find((p) => p.type === "weekday")?.value ?? "";
  const hourStr = etParts.find((p) => p.type === "hour")?.value ?? "0";
  const minStr  = etParts.find((p) => p.type === "minute")?.value ?? "0";

  const dayMap: Record<string, number> = {
    Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6,
  };

  const dayIdx = dayMap[dayStr] ?? 0;
  const hour   = parseInt(hourStr, 10);
  const min    = parseInt(minStr, 10);
  const totalMin = hour * 60 + min;

  const todayHours = HOURS[dayIdx];
  const isOpen =
    todayHours !== null &&
    totalMin >= todayHours.open * 60 &&
    totalMin < todayHours.close * 60;

  // Find next open time
  let nextInfo = "";
  if (!isOpen) {
    if (todayHours && totalMin < todayHours.open * 60) {
      nextInfo = `Opens today at ${fmt12(todayHours.open)}`;
    } else {
      for (let i = 1; i <= 7; i++) {
        const nextDay = (dayIdx + i) % 7;
        const nextHours = HOURS[nextDay];
        if (nextHours) {
          nextInfo = `Opens ${i === 1 ? "tomorrow" : DAY_NAMES[nextDay]} at ${fmt12(nextHours.open)}`;
          break;
        }
      }
    }
  } else if (todayHours) {
    const minsLeft = todayHours.close * 60 - totalMin;
    if (minsLeft <= 60) {
      nextInfo = `Closes in ${minsLeft} min`;
    } else {
      nextInfo = `Until ${fmt12(todayHours.close)}`;
    }
  }

  return { isOpen, nextInfo };
}

function ShopStatusBadge() {
  const [status, setStatus] = useState(getShopStatus);

  useEffect(() => {
    const interval = setInterval(() => setStatus(getShopStatus()), 60_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="inline-flex items-center gap-2.5 px-4 py-2 border border-border bg-background/60 backdrop-blur-sm text-xs tracking-widest uppercase"
    >
      <span className="relative flex h-2 w-2 shrink-0">
        <span
          className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${
            status.isOpen ? "animate-ping bg-green-400" : "bg-red-500"
          }`}
        />
        <span
          className={`relative inline-flex rounded-full h-2 w-2 ${
            status.isOpen ? "bg-green-400" : "bg-red-500"
          }`}
        />
      </span>
      <span className={status.isOpen ? "text-green-400" : "text-red-400"}>
        {status.isOpen ? "Open Now" : "Closed"}
      </span>
      {status.nextInfo && (
        <>
          <span className="text-border">|</span>
          <span className="text-muted-foreground normal-case tracking-normal">
            {status.nextInfo}
          </span>
        </>
      )}
    </motion.div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40 z-10" />
        <img
          src={shopImg}
          alt="Xclusive Cuts Barbershop"
          className="w-full h-full object-cover filter grayscale contrast-125"
        />
      </div>

      {/* Decorative Blurs */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[120px] z-0 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px] z-0 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center pt-24 pb-12">

        {/* Live Status Badge */}
        <ShopStatusBadge />

        {/* Headline */}
        <div className="overflow-hidden mt-8 mb-0">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-primary leading-[0.85]"
          >
            PRECISION CUTS.
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.1 }}
            className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-muted-foreground leading-[0.85]"
          >
            PREMIUM EXPERIENCE.
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground font-light tracking-wide px-2"
        >
          Lakeland's destination for sharp fades, modern grooming, and elite barber culture.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full max-w-sm sm:max-w-none"
        >
          <a
            href="#booking"
            data-testid="button-book-appointment"
            className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-bold tracking-widest uppercase text-sm hover:bg-primary/90 transition-all duration-300 hover:scale-105 text-center"
          >
            BOOK APPOINTMENT
          </a>
          <a
            href="tel:+18635550199"
            data-testid="link-call-hero"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-primary text-primary font-bold tracking-widest uppercase text-sm hover:bg-primary/10 transition-all duration-300 text-center"
          >
            CALL NOW
          </a>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 w-full max-w-3xl border-t border-border pt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs tracking-widest uppercase text-muted-foreground"
        >
          <span className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
            <strong className="text-primary text-xl sm:text-lg">177+</strong> Reviews
          </span>
          <span className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
            <strong className="text-primary text-xl sm:text-lg">1000+</strong> Clients
          </span>
          <span className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
            <strong className="text-primary text-xl sm:text-lg">5+</strong> Barbers
          </span>
          <span className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
            <strong className="text-primary text-xl sm:text-lg">4.9★</strong> Rating
          </span>
        </motion.div>
      </div>

      {/* Scroll Indicator — desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[0.6rem] tracking-[0.2em] text-muted-foreground uppercase">SCROLL</span>
        <motion.div
          animate={{ scaleY: [0, 1, 0], originY: "top" }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-10 bg-primary"
        />
      </motion.div>
    </section>
  );
}
