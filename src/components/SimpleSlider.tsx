import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  'https://roombee.de/file/i/e74d2951b93871522.png',
  'https://roombee.de/file/i/699c2565d34871522.png',
  'https://roombee.de/file/i/d9862da8914871522.png',
  'https://roombee.de/file/i/b8a22c33054871522.png'
];

const SimpleSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-[768px] overflow-hidden relative rounded-[2.5rem] shadow-2xl border border-zinc-200/50 dark:border-zinc-800/50 aspect-[768/329]">
            <motion.div 
              className="flex h-full"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            >
              {images.map((src, index) => (
                <div key={index} className="w-full h-full flex-shrink-0">
                  <img 
                    src={src} 
                    alt={`Slide ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </motion.div>
            
            {/* Absolute overlay for premium feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>

          <div className="flex items-center mt-8 space-x-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex 
                    ? 'w-8 h-3 bg-orange-500' 
                    : 'w-3 h-3 bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleSlider;
