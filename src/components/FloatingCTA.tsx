'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [maxScroll, setMaxScroll] = useState(1000);

  const { scrollY } = useScroll();
  const scrollProgress = useTransform(scrollY, [0, maxScroll], [0, 1]);

  useEffect(() => {
    // Set max scroll on client
    const updateMaxScroll = () => {
      setMaxScroll(document.documentElement.scrollHeight - window.innerHeight);
    };

    updateMaxScroll();
    window.addEventListener('resize', updateMaxScroll);

    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateMaxScroll);
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating CTA Button */}
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          onClick={scrollToContact}
          className="fixed bottom-8 right-8 z-50 px-6 py-4 bg-gradient-to-r from-orange-primary to-orange-600 text-white font-bold rounded-full shadow-2xl flex items-center gap-3 group"
          whileHover={{ scale: 1.1, boxShadow: '0 20px 40px rgba(255, 107, 53, 0.4)' }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            animate={{ rotate: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            💬
          </motion.span>
          <span className="hidden sm:inline">무료 상담</span>
          <motion.span
            className="text-2xl"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.span>

          {/* Pulse Effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-orange-primary"
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.button>
      )}

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-navy-primary via-orange-primary to-navy-secondary origin-left z-50"
        style={{ scaleX: scrollProgress }}
      />
    </>
  );
}
