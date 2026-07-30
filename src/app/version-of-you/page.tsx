'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function VersionOfYouPage() {
  const [foundHeart, setFoundHeart] = useState(false);

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl sm:text-5xl font-serif text-ink mb-4">The Version of You I See</h1>
        <p className="text-taupe text-lg max-w-xl mx-auto">
          Not about memories, not about romance — just who you are, through my eyes.
        </p>
      </motion.div>

      {/* The letter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-lg shadow-md border border-beige/50 p-8 sm:p-12 max-w-2xl mx-auto"
      >
        <div className="prose prose-ink max-w-none">
          <div className="font-serif text-ink-light space-y-6 leading-relaxed">
            <p className="text-3xl font-serif text-ink">Dear You,</p>

            <p>
              I&apos;ve been thinking about how to describe the version of you that I see — 
              not the one mirrors show, but the one I witness every day. It&apos;s hard to 
              put into words because words feel too small for someone like you.
            </p>

            <p>
              I see someone incredibly strong. Not the kind of strength that&apos;s loud or 
            noticeable, but the quiet kind — the strength that gets through difficult 
            days, that keeps going when things are hard, that still finds reasons to 
            smile even when the world feels heavy.
            </p>

            <p>
              I see someone deeply kind. You care about things that matter, and more 
              importantly, you care about people in a way that&apos;s becoming rare. You 
              think of others before yourself. You notice when someone needs support. 
              Your empathy is one of your superpowers, even if you don&apos;t see it that way.
            </p>

            <p>
              I see someone brilliant. You have ideas that amaze me, perspectives that 
              challenge me, and a curiosity that keeps you growing. Never stop learning, 
              never stop asking questions — it&apos;s one of the most attractive things 
              about you.
            </p>

            <p>
              I see someone beautiful, inside and out. But more than that, I see someone 
              who is becoming — evolving into the person you&apos;re meant to be. And I 
              feel lucky to witness that transformation.
            </p>

            <p>
              You have habits you don&apos;t realize are charming. The way you scrunch 
              your nose when you&apos;re thinking. The way you get excited about things 
              you love. The way you care so deeply it sometimes overwhelms you. 
              These aren&apos;t flaws — they&apos;re the pieces of you that make you, you.
            </p>

            <p>
              The version of you I see is not perfect — and that&apos;s what makes 
              it beautiful. It&apos;s real. It&apos;s human. It&apos;s someone who tries, 
              who stumbles, who gets back up, who laughs, who cries, who dreams, 
              who doubts, and who keeps going anyway.
            </p>

            <p>
              That version of you — the one I see — is more than enough. It always 
              has been. And I hope one day you can see yourself the way I do.
            </p>

            <p className="text-right font-serif text-ink">
              With love, always
              <br />
              <span className="text-rose">[Your Name]</span>
            </p>
          </div>
        </div>

        {/* Hidden heart easter egg */}
        <div className="text-center mt-8 pt-6 border-t border-beige/50">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              setFoundHeart(!foundHeart);
              if (!foundHeart) {
                setTimeout(() => setFoundHeart(false), 4000);
              }
            }}
            className={`inline-block w-8 h-8 rounded-full transition-colors ${
              foundHeart ? 'bg-rose' : 'bg-beige/30 hover:bg-beige/50'
            }`}
            aria-label="Hidden easter egg"
          />

          {foundHeart && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 text-rose font-serif text-sm"
            >
              💖 You found the hidden heart! You are loved more than you know.
            </motion.p>
          )}
        </div>
      </motion.div>
    </section>
  );
}