'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  emoji: string;
}

const particles = ['✨', '🌸', '🦋', '🌷', '💫', '🌙', '☕', '📖'];

export default function FloatingHearts() {
  const [particleList, setParticleList] = useState<Particle[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newParticle: Particle = {
        id: Date.now(),
        x: Math.random() * 100,
        y: 100,
        size: Math.random() * 16 + 12,
        opacity: Math.random() * 0.5 + 0.3,
        duration: Math.random() * 8 + 10,
        delay: Math.random() * 2,
        emoji: particles[Math.floor(Math.random() * particles.length)],
      };
      setParticleList((prev) => [...prev.slice(-15), newParticle]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <AnimatePresence>
        {particleList.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{
              x: `${particle.x}vw`,
              y: `${particle.y}vh`,
              opacity: 0,
              scale: 0,
            }}
            animate={{
              y: '-10vh',
              opacity: [0, particle.opacity, 0],
              scale: [0, 1, 0.8],
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              ease: 'easeInOut',
            }}
            className="absolute"
            style={{ fontSize: `${particle.size}px` }}
          >
            {particle.emoji}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}