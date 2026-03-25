import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    category: 'HAUSHALTSREINIGUNG',
    title: 'SAUBERKEIT\ndie man sieht',
    subtitle: 'Gründlich, diskret, zuverlässig',
    buttonText: 'JETZT TERMIN SICHERN',
    image: '/team.png',
  },
  {
    id: 2,
    category: 'UNTERHALTSREINIGUNG',
    title: 'PRÄZISION\ndie für sich spricht',
    subtitle: 'Professionelle Pflege für Gewerbe & Privat',
    buttonText: 'ANGEBOT ANFORDERN',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000',
  },
  {
    id: 3,
    category: 'GLASREINIGUNG',
    title: 'DURCHBLICK\nin jeder Situation',
    subtitle: 'Streifenfreie Reinheit für Ihre Fassaden',
    buttonText: 'BESICHTIGUNG ANFRAGEN',
    image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dee62?auto=format&fit=crop&q=80&w=2000',
  },
  {
    id: 4,
    category: 'TATORTREINIGUNG',
    title: 'DISKRETION\nauf höchstem Niveau',
    subtitle: 'Zertifizierte Spezialreinigung rund um die Uhr',
    buttonText: '24H NOTDIENST',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2000',
  }
];

export const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[500px] md:h-[650px] overflow-hidden rounded-[2.5rem] bg-stone-900 group shadow-3xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent md:bg-gradient-to-r md:from-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Slide Content Card */}
      <div className="absolute inset-0 flex items-center px-8 md:px-20 pointer-events-none">
        <div className="max-w-xl pointer-events-auto">
          <motion.div
            key={`content-${current}`}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 md:p-12 glassmorphism-premium rounded-[2rem] border border-white/20 shadow-2xl"
          >
             <div className="mb-4">
              <span className="text-orange-500 font-bold tracking-[0.4em] text-xs uppercase border-b-2 border-orange-500/50 pb-1">
                {slides[current].category}
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4 whitespace-pre-line drop-shadow-md">
              {slides[current].title}
            </h2>
            
            <p className="text-white/80 text-lg md:text-xl mb-8 font-medium">
              {slides[current].subtitle}
            </p>
            
            <button className="bg-orange-500 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition-all hover:bg-orange-600 hover:scale-[1.02] active:scale-95 shadow-lg shadow-orange-500/20">
              {slides[current].buttonText}
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Navigation Controls */}
      <button 
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-orange-500 hover:border-orange-500"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button 
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-orange-500 hover:border-orange-500"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-2 transition-all duration-300 rounded-full ${idx === current ? 'w-10 bg-orange-500' : 'w-2 bg-white/40 hover:bg-white/60'}`}
          />
        ))}
      </div>
    </div>
  );
};
