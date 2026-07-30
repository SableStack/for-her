'use client';

import { motion } from 'framer-motion';

interface PolaroidCardProps {
  title: string;
  date: string;
  description: string;
  index: number;
  onExpand: () => void;
}

export default function PolaroidCard({ title, date, description, index, onExpand }: PolaroidCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: index % 2 === 0 ? -2 : 2 }}
      whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -1 : 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, rotate: 0 }}
      onClick={onExpand}
      className="bg-white rounded-sm shadow-lg p-3 pb-8 cursor-pointer group"
    >
      {/* Photo placeholder */}
      <div className="aspect-square bg-beige rounded-sm mb-3 flex items-center justify-center overflow-hidden">
        <div className="w-16 h-16 rounded-full bg-rose/30 flex items-center justify-center text-2xl">
          📸
        </div>
      </div>

      {/* Caption */}
      <div className="px-2 space-y-1">
        <h3 className="font-serif text-sm font-medium text-ink">{title}</h3>
        <p className="text-taupe/70 text-xs italic">{date}</p>
        <p className="text-ink-light text-xs line-clamp-2 mt-1">{description}</p>
      </div>
    </motion.div>
  );
}