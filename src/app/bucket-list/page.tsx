'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { bucketList as initialItems, type BucketListItem } from '@/data/bucketList';

export default function BucketListPage() {
  const [items, setItems] = useState<BucketListItem[]>(initialItems);

  // Clear old localStorage data if it doesn't match current structure
  useEffect(() => {
    const saved = localStorage.getItem('bucketList');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // If the saved data has different number of items, clear it
        if (!Array.isArray(parsed) || parsed.length !== initialItems.length) {
          localStorage.setItem('bucketList', JSON.stringify(initialItems));
        }
      } catch {
        localStorage.setItem('bucketList', JSON.stringify(initialItems));
      }
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem('bucketList', JSON.stringify(items));
  }, [items]);

  const toggleItem = (id: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const completedCount = items.filter((i) => i.completed).length;

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl sm:text-5xl font-serif text-ink mb-4">Our Bucket List</h1>
        <p className="text-taupe text-lg max-w-xl mx-auto">
          All the things I want to do with you. Let's check them off one by one.
        </p>

        {/* Progress bar */}
        <div className="max-w-md mx-auto mt-6">
          <div className="flex justify-between text-sm text-taupe mb-2">
          <span>{`${completedCount} of ${items.length} completed`}</span>
          <span>{`${Math.round((completedCount / items.length) * 100)}%`}</span>
          </div>
          <div className="h-2 bg-beige rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(completedCount / items.length) * 100}%` }}
              className="h-full bg-rose rounded-full"
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </motion.div>

      <div className="space-y-4">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            onClick={() => toggleItem(item.id)}
            className={`flex items-center gap-4 p-4 rounded-lg cursor-pointer transition-all ${
              item.completed
                ? 'bg-rose-light/50 border border-rose/20'
                : 'bg-white border border-beige/50 hover:border-rose/30'
            }`}
          >
            {/* Checkbox */}
            <div
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors shrink-0 ${
                item.completed
                  ? 'bg-rose border-rose'
                  : 'border-taupe/30 hover:border-rose'
              }`}
            >
              {item.completed && (
                <span className="text-white text-xs">✓</span>
              )}
            </div>

            {/* Text */}
            <span
              className={`text-lg ${
                item.completed
                  ? 'line-through text-taupe/60'
                  : 'text-ink-light'
              }`}
            >
              {item.text}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}