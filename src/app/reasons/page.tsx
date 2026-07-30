'use client';

import { motion } from 'framer-motion';
import { reasons } from '@/data/reasons';
import FlipCard from '@/components/FlipCard';

export default function ReasonsPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl sm:text-5xl font-serif text-ink mb-4">Reasons I Love You</h1>
        <p className="text-taupe text-lg max-w-xl mx-auto">
          A list that keeps growing. Click each card to reveal the reason.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {reasons.map((reason, index) => (
          <FlipCard
            key={reason.id}
            title={reason.title}
            message={reason.message}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}