'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EasterEggProps {
  secretMessage: string;
  trigger?: 'click' | 'konami' | 'date';
  activationCode?: string;
  children: React.ReactNode;
}

export function EasterEgg({ secretMessage, trigger = 'click', activationCode, children }: EasterEggProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const [konamiProgress, setKonamiProgress] = useState(0);

  // Konami code: ↑↑↓↓←→←→
  const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight'];

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (trigger !== 'konami') return;

    const expectedKey = konamiSequence[konamiProgress];
    if (e.key === expectedKey) {
      const nextProgress = konamiProgress + 1;
      if (nextProgress >= konamiSequence.length) {
        setIsRevealed(true);
        setKonamiProgress(0);
        setTimeout(() => setIsRevealed(false), 5000);
      } else {
        setKonamiProgress(nextProgress);
      }
    } else {
      setKonamiProgress(0);
    }
  }, [trigger, konamiProgress]);

  useEffect(() => {
    if (trigger === 'konami') {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [trigger, handleKeyDown]);

  const handleClick = () => {
    if (trigger === 'click') {
      setIsRevealed(true);
      setTimeout(() => setIsRevealed(false), 5000);
    }
  };

  return (
    <div className="relative inline-block">
      <div onClick={handleClick}>
        {children}
      </div>

      <AnimatePresence>
        {isRevealed && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 p-4 bg-rose-light rounded-lg shadow-lg border border-rose/30 text-center z-50"
          >
            <p className="text-ink-light text-sm">{secretMessage}</p>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-rose-light border-r border-b border-rose/30 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}