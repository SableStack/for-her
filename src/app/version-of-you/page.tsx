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
          How i see you
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
            <p className="text-3xl font-serif text-ink">Dear Weintombara,</p>

            <p>
              I've been thinking of the best way to show you how much you mean to me and I couldn't think of anything, not just cause I'm broke LOL, but because even if I gave you a planet, that's all it would be — me giving you a planet. If I could place you in my body and have you look at yourself through my eyes that would be ideal, then you'd be able to feel and see you the way I do. But I can't do that, thought about writing a song but writing a good song is pretty difficult, so... I'll just try explaining with words how I see you.
            </p>

            <p>
              Weintombara is a girl. She's a girl who has a smile that makes me want to melt. Saying she has one of the cutest smiles sounds like an understatement — think of a kitten playing or a baby laughing, the feeling of joy you get when seeing that, a feeling of &ldquo;the world isn't so bad&rdquo;. Yeahhh, her smile has the same effect. Her laugh is so precious as well, she has several, and each of them make me smile, even the fake one.
            </p>

            <p>
              She cares deeply about her friends and family. She's willing to go out of her way for them and has done so for me multiple times. Sometimes I just wish I could kidnap her. That's a feeling I get often when with her. She's just the kind of person you want to gatekeep.
            </p>

            <p>
              She's not perfect, and she knows it. She's got battles she fights and she also cries. She's human. She has so much potential. She has secrets too, hidden dark sides, and so on. She's a young human female with lots of potential and growth.
            </p>

            <p>
              This is hard. I've said so much in my head, and rephrased so much already, so many feelings I can't convey. Thinking about the feeling you get from winning a lottery and trying to describe that feeling and give it human traits — something hard like that. You wouldn't simply call it excitement or disbelief; there'd be so much more you want to do to express the emotion.
            </p>

            <p>
              She's just so... good. I don't know how to say the rest properly or in an arranged way, so I'll just pour it all out. She's fun in a &ldquo;I want her around as often as possible because it's nice to be with her&rdquo; way, almost like a breath of fresh air laced with the scent of popcorn, but in a subtle way that makes you crave popcorn, but doesn't overwhelm you.
            </p>

            <p>
              Physically, I find her so attractive that I sometimes hope it's just me, cause I don't want to justify harassment, but... I can definitely see why. She's so attractive. Describing how attractive she is is like choosing between black and white — you just can't pick one or the other. She can look so cute and pretty in a sundress, looking intimidating in a suit, and blow your mind with an outfit that's more revealing.
            </p>

            <p>
              There's so much more I could say, but I've been typing for a while now and I think I've done what I can with words.
            </p>

            <p>
              So... that's a somewhat accurate description of 37% of my emotions and how I see you. The version of you I see is so amazing, I'm proud/glad and all the other things just knowing you.
            </p>

            <p className="text-right font-serif text-ink">
              with Lots of love
              <br />
              <span className="text-rose">Oghenemine</span>
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