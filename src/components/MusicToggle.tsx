'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element only once (singleton pattern)
    if (!audioRef.current) {
      audioRef.current = new Audio('/soundtrack/soundtrack.mp3');
      audioRef.current.loop = true;
    }

    // No cleanup on unmount to keep music playing across page navigations
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {
        // Autoplay was blocked — user interaction is required
        audioRef.current?.play();
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.button
      onClick={togglePlay}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-beige/80 backdrop-blur-sm border border-rose flex items-center justify-center text-xl shadow-lg hover:bg-rose-light transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle background music"
    >
      {isPlaying ? '🎵' : '🎶'}
      <span className="sr-only">{isPlaying ? 'Pause music' : 'Play music'}</span>
    </motion.button>
  );
}
