'use client';

import { motion } from 'framer-motion';
import { openWhenLetters } from '@/data/openWhen';
import SealedLetter from '@/components/SealedLetter';

export default function OpenWhenPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl sm:text-5xl font-serif text-ink mb-4">Open When...</h1>
        <p className="text-taupe text-lg max-w-xl mx-auto">
          Letters for every moment. Whenever you need them, they&apos;re here.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {openWhenLetters.map((letter, index) => (
          <SealedLetter
            key={letter.id}
            trigger={letter.trigger}
            message={letter.message}
            emoji={letter.emoji}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}