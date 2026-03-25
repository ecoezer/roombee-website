import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const services = [
  "Entrümpeln & Entsorgen",
  "Messiwohnungen räumen",
  "Animal Hoarding & Tier-Notrettung",
  "Tatortreinigung",
  "Bauschlussreinigung!",
  "Grundreinigungsarbeiten",
  "Fassadenreinigung",
  "Graffiti-Entfernung",
  "Glas- & Rahmenreinigung",
  "Treppenhausreinigung",
  "Hausmeister-Service",
  "Garten- & Grundstückspflege",
  "Unterhaltsreinigung",
  "Haushaltsreinigung",
  "Solar- & Photovoltaikanlagenreinigung",
  "Rohrreinigung | 24h Notdienst",
  "Wir übernehmen Verantwortung"
];

const Navbar: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ÜBER UNS', path: '/ueber-uns' },
  ];

  const extraItems = [
    { name: 'AKTIONEN', path: '/aktionen' },
    { name: 'SERVICE', path: '/service' },
    { name: 'KONTAKT', path: '#kontakt' },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] bg-white/90 dark:bg-zinc-950/90 backdrop-blur-2xl border-b border-zinc-200/50 dark:border-zinc-800/50 shadow-sm transition-all duration-300">
      <div className="flex justify-between items-center px-8 py-0 max-w-screen-2xl mx-auto">
        <Link to="/" className="flex items-center group">
          <motion.img 
            src="/logo.png" 
            alt="Roombee" 
            className="h-20 w-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="relative px-4 py-8 text-[11px] font-bold tracking-widest transition-colors duration-300"
            >
              <span className={`relative z-10 ${location.pathname === item.path ? 'text-orange-500' : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100'}`}>
                {item.name}
              </span>
              {location.pathname === item.path && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
          
          {/* Leistungen Dropdown */}
          <div className="relative group px-4 py-8">
            <button className="flex items-center gap-1 text-[11px] font-bold tracking-widest text-zinc-500 group-hover:text-orange-500 transition-colors">
              LEISTUNGEN
              <span className="material-symbols-outlined text-[16px] transition-transform group-hover:rotate-180">expand_more</span>
            </button>
            
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out z-50">
              <div className="bg-white/95 dark:bg-zinc-900/95 backdrop-blur-3xl p-8 rounded-[2rem] shadow-3xl border border-zinc-200/50 dark:border-zinc-800/50 w-[600px] origin-top scale-95 group-hover:scale-100 transition-transform">
                <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-left">
                  {services.map((service, index) => (
                    <motion.a 
                      key={index} 
                      href="#" 
                      whileHover={{ x: 5, color: '#f97316' }}
                      className="text-[13px] text-zinc-600 dark:text-zinc-400 font-semibold leading-tight block py-1 border-b border-transparent"
                    >
                      {service}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {extraItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="px-4 py-8 text-[11px] font-bold tracking-widest text-zinc-500 hover:text-orange-500 transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(249, 115, 22, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-orange-500 text-white px-8 py-3.5 rounded-2xl font-bold text-xs tracking-wider uppercase transition-colors shadow-lg shadow-orange-500/20"
          >
            Angebot anfordern
          </motion.button>

          {/* Mobile Menu Icon */}
          <button className="md:hidden text-zinc-900 dark:text-white p-2">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
