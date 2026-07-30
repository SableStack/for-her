'use client';

import { motion } from 'framer-motion';
import Typewriter from '@/components/Typewriter';
import FloatingHearts from '@/components/FloatingHearts';
import MusicToggle from '@/components/MusicToggle';

export default function Home() {
  return (
    <>
      <FloatingHearts />
      <MusicToggle />

      <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Main content */}
          <div className="text-center space-y-8 mb-16">
            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <p className="text-taupe font-serif text-lg sm:text-xl mb-4">A little piece of my heart, for</p>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif text-ink mb-6">
                Weintombara
              </h1>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: 'easeInOut' }}
              className="h-px bg-rose/50 max-w-xs mx-auto"
            />

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="min-h-[4rem]"
            >
              <p className="text-xl sm:text-2xl text-ink-light font-serif">
                <Typewriter
                  texts={[
                    'Welcome to My Perspective',
                    'A place where you can see yourself through my eyes',
                    'Every page is made with you in mind',
                    "You're my favourite priority",
                    'You are more beautiful than you know',
                  ]}
                />
              </p>
            </motion.div>

            {/* Short message */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="text-taupe text-lg sm:text-xl max-w-lg mx-auto leading-relaxed"
            >
              This is a space dedicated to you, a collection of memories, hopes, dreams, 
              and every reason why you mean the world to me. Take your time exploring.
            </motion.p>

            {/* Decorative */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
              className="text-4xl"
            >
              ✦
            </motion.div>
          </div>

          {/* Polaroid Photo Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.5 }}
            className="relative h-[600px] mb-16"
          >
            {/* Polaroid 1 - Top Left */}
            <div className="absolute top-0 left-4 md:left-12 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white p-3 pb-12 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="bg-gray-100 aspect-square w-32 h-32 md:w-40 md:h-40 overflow-hidden mb-3">
                  <img 
                    src="/photos/Photo1(Sticking tongue out).jpg" 
                    alt="Sticking tongue out"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center text-sm text-ink-light font-serif italic">Sticking tongue out</p>
              </div>
            </div>

            {/* Polaroid 2 - Top Right */}
            <div className="absolute top-0 right-4 md:right-12 transform rotate-6 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white p-3 pb-12 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="bg-gray-100 aspect-square w-32 h-32 md:w-40 md:h-40 overflow-hidden mb-3">
                  <img 
                    src="/photos/Photo 2(with glasses and headphones).jpg" 
                    alt="With glasses and headphones"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center text-sm text-ink-light font-serif italic">With headphones</p>
              </div>
            </div>

            {/* Polaroid 3 - Center Left */}
            <div className="absolute top-24 left-8 md:left-24 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white p-3 pb-12 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="bg-gray-100 aspect-square w-32 h-32 md:w-40 md:h-40 overflow-hidden mb-3">
                  <img 
                    src="/photos/Photo 3( with glasses and a cake).jpg" 
                    alt="With glasses and a cake"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center text-sm text-ink-light font-serif italic">Birthday girl</p>
              </div>
            </div>

            {/* Polaroid 4 - Center Left 2 */}
            <div className="absolute top-48 left-4 md:left-16 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white p-3 pb-12 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="bg-gray-100 aspect-square w-32 h-32 md:w-40 md:h-40 overflow-hidden mb-3">
                  <img 
                    src="/photos/Photo 4(mirror selfie).jpg" 
                    alt="Mirror selfie"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center text-sm text-ink-light font-serif italic">Mirror selfie</p>
              </div>
            </div>

            {/* Polaroid 5 - Center Right */}
            <div className="absolute top-24 right-8 md:right-24 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white p-3 pb-12 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="bg-gray-100 aspect-square w-32 h-32 md:w-40 md:h-40 overflow-hidden mb-3">
                  <img 
                    src="/photos/Photo 5(Sun kissed).jpg" 
                    alt="Sun kissed"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center text-sm text-ink-light font-serif italic">Sun kissed</p>
              </div>
            </div>

            {/* Polaroid 6 - Center Right 2 */}
            <div className="absolute top-48 right-4 md:right-16 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white p-3 pb-12 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="bg-gray-100 aspect-square w-32 h-32 md:w-40 md:h-40 overflow-hidden mb-3">
                  <img 
                    src="/photos/Photo 6.jpg" 
                    alt="Lovely"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center text-sm text-ink-light font-serif italic">Lovely</p>
              </div>
            </div>

            {/* Polaroid 7 - Middle Left */}
            <div className="absolute top-64 left-12 md:left-32 transform rotate-6 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white p-3 pb-12 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="bg-gray-100 aspect-square w-32 h-32 md:w-40 md:h-40 overflow-hidden mb-3">
                  <img 
                    src="/photos/Photo 7(looking beautiful in a sundress).jpg" 
                    alt="Looking beautiful in a sundress"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center text-sm text-ink-light font-serif italic">Sundress</p>
              </div>
            </div>

            {/* Polaroid 8 - Middle Right */}
            <div className="absolute top-64 right-12 md:right-32 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white p-3 pb-12 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="bg-gray-100 aspect-square w-32 h-32 md:w-40 md:h-40 overflow-hidden mb-3">
                  <img 
                    src="/photos/Photo 8(love the smile).jpg" 
                    alt="Love the smile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center text-sm text-ink-light font-serif italic">Beautiful smile</p>
              </div>
            </div>

            {/* Polaroid 9 - Bottom Left */}
            <div className="absolute bottom-0 left-20 md:left-40 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white p-3 pb-12 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="bg-gray-100 aspect-square w-32 h-32 md:w-40 md:h-40 overflow-hidden mb-3">
                  <img 
                    src="/photos/Photo 9(looking cute).jpg" 
                    alt="Looking cute"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center text-sm text-ink-light font-serif italic">So cute</p>
              </div>
            </div>

            {/* Polaroid 10 - Bottom Right */}
            <div className="absolute bottom-0 right-20 md:right-40 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white p-3 pb-12 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="bg-gray-100 aspect-square w-32 h-32 md:w-40 md:h-40 overflow-hidden mb-3">
                  <img 
                    src="/photos/Photo 10.jpg" 
                    alt="Perfect"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center text-sm text-ink-light font-serif italic">Perfect</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
