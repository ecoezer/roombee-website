import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const galleryItems = [
  {
    id: 1,
    category: 'HAUSHALTSREINIGUNG',
    title: 'SAUBERKEIT\ndie man sieht',
    subtitle: 'Gründlich, diskret, zuverlässig',
    buttonText: 'JETZT TERMIN SICHERN',
    image: 'https://roombee.de/file/i/e74d2951b93871522.png',
  },
  {
    id: 2,
    category: 'UNTERHALTSREINIGUNG',
    title: 'PRÄZISION\ndie für sich spricht',
    subtitle: 'Professionelle Pflege für Gewerbe & Privat',
    buttonText: 'ANGEBOT ANFORDERN',
    image: 'https://roombee.de/file/i/699c2565d34871522.png',
  },
  {
    id: 3,
    category: 'GLASREINIGUNG',
    title: 'DURCHBLICK\nin jeder Situation',
    subtitle: 'Streifenfreie Reinheit für Ihre Fassaden',
    buttonText: 'BESICHTIGUNG ANFRAGEN',
    image: 'https://roombee.de/file/i/d9862da8914871522.png',
  },
  {
    id: 4,
    category: 'TATORTREINIGUNG',
    title: 'DISKRETION\nauf höchstem Niveau',
    subtitle: 'Zertifizierte Spezialreinigung rund um die Uhr',
    buttonText: '24H NOTDIENST',
    image: 'https://roombee.de/file/i/b8a22c33054871522.png',
  }
];

const AccordionGallery: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  return (
    <section className="bg-white pb-20">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-4 h-[400px] md:h-[450px] w-full">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              onClick={() => setExpandedIndex(index)}
              onMouseEnter={() => setExpandedIndex(index)}
              animate={{
                flex: expandedIndex === index ? 4 : 1,
              }}
              className="relative overflow-hidden rounded-[2.5rem] cursor-pointer group shadow-2xl border border-zinc-200/50"
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            >
              {/* Background Image */}
              <motion.div
                animate={{
                  scale: expandedIndex === index ? 1.05 : 1.15,
                  filter: expandedIndex === index ? 'brightness(1) grayscale(0)' : 'brightness(0.6) grayscale(0.2)'
                }}
                transition={{ duration: 1.2 }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              />

              {/* Overlay for collapsed state title contrast */}
              <div className={`absolute inset-0 bg-black/20 transition-opacity duration-700 ${expandedIndex === index ? 'opacity-0' : 'opacity-100'}`} />

              {/* Content Container */}
              <div className="absolute inset-0 p-6 md:p-12 flex items-center justify-start overflow-hidden">
                <AnimatePresence>
                  {expandedIndex === index ? (
                    <motion.div
                      key="expanded"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="glassmorphism-premium p-8 md:p-14 rounded-[2.5rem] border border-white/30 shadow-2xl max-w-2xl backdrop-blur-xl relative"
                    >
                      {/* Orange Shine effect */}
                      <div className="absolute -top-20 -left-20 w-40 h-40 bg-orange-500/10 blur-[80px] rounded-full pointer-events-none" />
                      
                      <div className="mb-6">
                        <span className="bg-white/90 text-zinc-900 px-5 py-2.5 rounded-xl font-black tracking-[0.3em] text-[10px] uppercase shadow-lg border border-white/20">
                          {item.category}
                        </span>
                      </div>
                      
                      <h2 className="text-4xl md:text-7xl font-black text-white leading-[1.1] mb-6 drop-shadow-xl whitespace-pre-line uppercase tracking-tighter">
                        {item.title}
                      </h2>
                      
                      <p className="text-white/90 text-lg md:text-2xl mb-10 font-medium drop-shadow-md">
                        {item.subtitle}
                      </p>
                      
                      <button className="relative group/btn bg-gradient-to-br from-orange-400 to-orange-600 text-white px-10 py-5 rounded-2xl font-black text-xs tracking-widest uppercase transition-all hover:scale-105 active:scale-95 shadow-[0_15px_30px_-10px_rgba(249,115,22,0.5)] border-t border-white/20 overflow-hidden">
                        <span className="relative z-10">{item.buttonText}</span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="collapsed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                      <p className="text-white/40 font-black text-xl md:text-3xl tracking-[0.4em] uppercase whitespace-nowrap lg:rotate-[-90deg]">
                        {item.category.split(' ')[0]}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccordionGallery;
