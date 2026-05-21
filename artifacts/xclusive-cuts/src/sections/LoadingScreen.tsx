import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logoIcon from "@assets/barber_xclusice_-removebg-preview_1779378779355.png";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800); // Wait for fade out animation to finish before notifying parent
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 blur-xl rounded-full" />
              <img src={logoIcon} alt="Xclusive Cuts" className="w-24 h-24 object-contain relative z-10 filter invert contrast-200 dark:invert-0 dark:contrast-100" />
            </div>
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-6 font-display text-4xl tracking-widest text-primary"
            >
              XCLUSIVE CUTS
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-2 text-sm tracking-[0.3em] text-muted-foreground"
            >
              BARBERSHOP
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
