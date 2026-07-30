'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SealedLetterProps {
  trigger: string;
  message: string;
  emoji: string;
  index: number;
}

export default function SealedLetter({ trigger, message, emoji, index }: SealedLetterProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen ? (
        // Sealed letter view
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div
            onClick={() => setIsOpen(true)}
            className="bg-white rounded-lg shadow-md border border-beige/50 p-6 cursor-pointer hover:shadow-lg transition-shadow text-center min-h-[12rem] flex flex-col items-center justify-center gap-3"
          >
            <span className="text-4xl">{emoji}</span>
            <h3 className="font-serif text-lg text-ink">{trigger}</h3>
            <p className="text-taupe/60 text-sm">Click to open</p>
            <div className="w-12 h-0.5 bg-rose/30 rounded" />
            <p className="text-taupe/40 text-xs italic">A letter for you</p>
          </div>
        </motion.div>
      ) : (
        // Full-screen overlay when opened
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-rose-light rounded-xl shadow-2xl border border-rose/30 w-full max-w-2xl max-h-[85vh] overflow-y-auto p-8 sm:p-10 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-taupe/50 hover:text-taupe hover:bg-rose/10 rounded-full transition-colors text-lg"
                aria-label="Close letter"
              >
                ✕
              </button>

              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{emoji}</span>
                <h3 className="font-serif text-xl text-ink">{trigger}</h3>
              </div>

              <div className="text-ink-light leading-relaxed whitespace-pre-line text-sm sm:text-base">
                {message}
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}