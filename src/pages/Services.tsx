import React from 'react';
import { motion } from 'framer-motion';
import ServiceTabs from '../components/ServiceTabs';

const Services: React.FC = () => {
  const categories = [
    {
      title: "Privatkunden",
      icon: "home",
      services: ["Glas- & Fensterreinigung", "Unterhaltsreinigung", "Wintergartenreinigung", "Teppichreinigung", "Hausmeisterservice"]
    },
    {
      title: "Gewerbekunden",
      icon: "business",
      services: ["Büroreinigung", "Praxisreinigung", "Industrie- & Hallenreinigung", "Reinraumreinigung", "Baureinigung"]
    },
    {
      title: "Spezialservices",
      icon: "settings_suggest",
      services: ["Tatortreinigung", "Animal Hoarding", "Solar- & Photovoltaik", "Entrümpelung", "Fassadenpflege"]
    }
  ];

  const utilities = [
    {
      title: "Notfall-Service 24 / 7",
      desc: "Im Notfall zählen Sekunden. Wir sind rund um die Uhr für Sie einsatzbereit.",
      icon: "emergency",
      color: "bg-orange-500",
      cta: "Jetzt anrufen"
    },
    {
      title: "Unser Einsatzgebiet",
      desc: "Wir sind regional für Sie da. Erfahren Sie mehr über unsere Einsatzgebiete.",
      icon: "location_on",
      color: "bg-zinc-900",
      cta: "Gebiet prüfen"
    },
    {
      title: "Download-Center",
      desc: "Alle wichtigen Formulare, Flyer ve Informationen an einem Ort.",
      icon: "download",
      color: "bg-zinc-100",
      cta: "Zu den Downloads"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-8 px-8 overflow-hidden border-b border-zinc-200/50">
        <div className="max-w-screen-xl mx-auto z-10 relative">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-headline text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-4 max-w-4xl"
          >
            Unsere <span className="text-orange-500">Leistungen & Services.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 text-lg md:text-xl leading-relaxed max-w-2xl font-light"
          >
            Hier finden Sie eine übersichtliche Zusammenstellung unserer Leistungen. Über „Welchen Service bieten wir?“ erhalten Sie einen kompakten Überblick und gelangen bei Bedarf mit einem Klick direkt zur jeweiligen Detailseite.
          </motion.p>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-500/5 to-transparent -z-0"></div>
      </section>

      <ServiceTabs />

      <div className="max-w-screen-xl mx-auto px-8 py-12">
        {/* Main Categories Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {categories.map((cat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-zinc-50 rounded-[2.5rem] p-10 border border-zinc-200/60 hover:border-orange-500/20 hover:shadow-2xl hover:shadow-orange-500/[0.05] transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <span className="material-symbols-outlined text-4xl text-orange-500 mb-6 block">{cat.icon}</span>
                <h3 className="font-headline text-2xl font-bold mb-8 tracking-tight group-hover:text-orange-500 transition-colors">{cat.title}</h3>
                <ul className="space-y-4">
                  {cat.services.map((service, si) => (
                    <li key={si} className="flex items-center gap-3 text-zinc-500 font-medium text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500/40"></span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Utility Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {utilities.map((util, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className={`p-10 rounded-[2.5rem] ${util.color} ${catColor(util.color)} relative overflow-hidden group border border-zinc-200/10 shadow-xl shadow-zinc-500/5`}
            >
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <span className={`material-symbols-outlined text-4xl ${catIconColor(util.color)}`}>{util.icon}</span>
                  <div className={`px-4 py-1.5 rounded-full ${catBadgeColor(util.color)} text-[10px] font-bold tracking-widest uppercase`}>Service</div>
                </div>
                <h4 className="font-headline text-2xl font-bold mb-4 tracking-tight">{util.title}</h4>
                <p className={`text-sm mb-8 leading-relaxed font-light ${catTextColor(util.color)}`}>{util.desc}</p>
                <button className={`inline-flex items-center gap-2 group/btn font-bold text-sm tracking-widest uppercase py-3 px-6 rounded-2xl transition-all ${catBtnColor(util.color)}`}>
                  {util.cta}
                  <span className="material-symbols-outlined text-sm transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                </button>
              </div>
              {util.color === 'bg-orange-500' && (
                <div className="absolute -bottom-10 -right-10 opacity-10 pointer-events-none">
                  <span className="material-symbols-outlined text-[180px]">support_agent</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Additional Claim Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-zinc-900 rounded-[3rem] p-12 md:p-16 text-center text-white relative overflow-hidden"
        >
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-black mb-6 tracking-tighter">Klare Abläufe, nachvollziehbare Leistungen.</h2>
            <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed mb-10">
              Unser Anspruch ist eine saubere, strukturierte und zuverlässige Umsetzung, die Ihren Anforderungen langfristig gerecht wird. Klare Abläufe ve feste Ansprechpartner sorgen dafür, dass Sie sich dauerhaft auf uns verlassen können.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest">
                <span className="material-symbols-outlined text-orange-500 text-sm">verified</span>
                Feste Ansprechpartner
              </div>
              <div className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest">
                <span className="material-symbols-outlined text-orange-500 text-sm">schedule</span>
                Zuverlässige Termine
              </div>
              <div className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest">
                <span className="material-symbols-outlined text-orange-500 text-sm">monitoring</span>
                Klare Dokumentation
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent opacity-50"></div>
        </motion.section>
      </div>
    </div>
  );
};

// Helper functions for dynamic styling based on background
const catColor = (color: string) => {
  if (color === 'bg-orange-500') return 'text-white border-0';
  if (color === 'bg-zinc-900') return 'text-zinc-50 border-0';
  return 'text-zinc-900 border border-zinc-200/60';
};

const catTextColor = (color: string) => {
  if (color === 'bg-orange-500') return 'text-white/80';
  if (color === 'bg-zinc-900') return 'text-zinc-400';
  return 'text-zinc-500';
};

const catIconColor = (color: string) => {
  if (color === 'bg-orange-500') return 'text-white';
  if (color === 'bg-zinc-900') return 'text-orange-500';
  return 'text-orange-500';
};

const catBadgeColor = (color: string) => {
  if (color === 'bg-orange-500' || color === 'bg-zinc-900') return 'bg-white/10 text-white';
  return 'bg-orange-500/10 text-orange-500';
};

const catBtnColor = (color: string) => {
  if (color === 'bg-orange-500') return 'bg-white text-orange-500 hover:bg-zinc-100';
  if (color === 'bg-zinc-900') return 'bg-orange-500 text-white hover:bg-orange-600';
  return 'bg-zinc-900 text-white hover:opacity-90';
};

export default Services;
