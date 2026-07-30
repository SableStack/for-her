'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface FlipCardProps {
  title: string;
  message: string;
  index: number;
}

export default function FlipCard({ title, message, index }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="perspective-1000 h-64"
    >
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className="relative w-full h-full cursor-pointer"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="absolute inset-0 backface-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="w-full h-full bg-white rounded-lg shadow-md border border-beige/50 p-6 flex flex-col items-center justify-center text-center">
            <span className="text-3xl mb-3">💌</span>
            <h3 className="font-serif text-xl text-ink">{title}</h3>
            <p className="text-taupe text-sm mt-2">Click to reveal</p>
          </div>
        </motion.div>

        {/* Back */}
        <motion.div
          animate={{ rotateY: isFlipped ? 0 : -180 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="absolute inset-0 backface-hidden"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="w-full h-full bg-rose-light rounded-lg shadow-md border border-rose/30 p-6 flex items-center justify-center">
            <p className="text-ink text-center leading-relaxed text-sm font-medium">
              {message}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}