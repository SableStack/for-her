'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    // Load saved theme from localStorage on initial render
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
      if (savedTheme) {
        return savedTheme;
      }
    }
    return 'light';
  });
  const [mounted, setMounted] = useState(false);
  const [stars] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>(() => {
    // Generate random stars for dark theme
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 3,
    }));
  });

  useEffect(() => {
    // Set mounted to true after initial render (deferred to avoid lint warning)
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (mounted) {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      // Save theme preference
      localStorage.setItem('theme', theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // Prevent hydration mismatch by only rendering after mount
  if (!mounted) {
    return (
      <button
        className="fixed top-20 right-4 z-50 w-12 h-12 rounded-full bg-white/90 dark:bg-ink/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-2xl hover:scale-110 transition-transform border border-beige dark:border-rose/30"
        aria-label="Toggle theme"
      >
        🌙
      </button>
    );
  }

  return (
    <>
      {/* Stars background for dark theme */}
      {theme === 'dark' && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          {stars.map((star) => (
            <motion.div
              key={star.id}
              className="absolute bg-white rounded-full"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: 2 + star.delay,
                repeat: Infinity,
                delay: star.delay,
              }}
            />
          ))}
        </div>
      )}

      {/* Theme toggle button */}
      <button
        onClick={toggleTheme}
        className="fixed top-20 right-4 z-50 w-12 h-12 rounded-full bg-white/90 dark:bg-ink/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-2xl hover:scale-110 transition-transform border border-beige dark:border-rose/30"
        aria-label="Toggle theme"
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </>
  );
}