'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface PhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  date: string;
  description: string;
}

export default function PhotoModal({ isOpen, onClose, title, date, description }: PhotoModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] photo-overlay flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-cream rounded-lg max-w-lg w-full p-6 shadow-2xl"
          >
            {/* Image placeholder */}
            <div className="aspect-video bg-beige rounded-md mb-4 flex items-center justify-center">
              <div className="text-4xl">🖼️</div>
            </div>

            <h3 className="font-serif text-xl text-ink mb-1">{title}</h3>
            <p className="text-taupe/70 text-sm italic mb-3">{date}</p>
            <p className="text-ink-light leading-relaxed">{description}</p>

            <button
              onClick={onClose}
              className="mt-4 text-sm text-taupe hover:text-ink transition-colors"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}