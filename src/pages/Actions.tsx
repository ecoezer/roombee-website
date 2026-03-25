import React from 'react';
import { motion } from 'framer-motion';

const Actions: React.FC = () => {
  const mainPerks = [
    { title: "Erfahrung seit 1988", icon: "history" },
    { title: "Schnell & zuverlässig!", icon: "bolt" },
    { title: "Keine Anfahrt!", icon: "distance" },
    { title: "Bonusprogramm!", icon: "stars" }
  ];

  const processPerks = [
    "Keine Anfahrt.",
    "Keine versteckten Kosten.",
    "Keine Verpflichtung."
  ];

  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen">
      {/* Hero Header */}
      <section className="relative pt-32 pb-8 px-8 overflow-hidden border-b border-zinc-200/50">
        <div className="max-w-screen-xl mx-auto z-10 relative">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-headline text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-4 max-w-4xl"
          >
            Fensterputzer <span className="text-orange-500">...wir putzen GRATIS!</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 text-lg md:text-xl leading-relaxed max-w-2xl font-light"
          >
            Professionelle Glas- und Fensterreinigung mit 100% Zufriedenheits-Garantie für Privathaushalte und Gewerbe.
          </motion.p>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-500/5 to-transparent -z-0"></div>
      </section>

      <div className="max-w-screen-xl mx-auto px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Main Offer Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 relative rounded-[3rem] overflow-hidden bg-zinc-900 shadow-2xl p-10 md:p-16 border border-zinc-800 hover:border-orange-500/20 transition-all duration-500 group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="text-orange-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">Exklusive Test-Aktion</h2>
                  <h3 className="font-headline text-4xl font-extrabold text-white mb-6">Jetzt <span className="text-orange-500">kostenlos</span> testen!</h3>
                </div>
                <div className="bg-orange-500/10 border border-orange-500/20 px-4 py-2 rounded-2xl">
                  <span className="text-orange-500 font-bold text-xs">Aktion 2026</span>
                </div>
              </div>

              <div className="space-y-6 text-zinc-400 text-lg leading-relaxed mb-10 max-w-xl">
                <p>Sie sind noch kein Kunde bei uns? Testen Sie uns <strong className="text-white underline decoration-orange-500 underline-offset-4">völlig kostenlos</strong> und lassen Sie ein Fenster gratis von uns professionell reinigen!</p>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <p className="text-white font-semibold">...und jede weitere Glasfläche (egal wie groß) <span className="text-orange-500 text-2xl font-black">nur 2,99 €*</span></p>
                  <p className="text-zinc-500 text-xs mt-2 italic">Von innen und außen bei frei zugänglicher Glasfläche</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-8 items-center">
                <a href="tel:01712780777" className="bg-orange-500 text-white px-10 py-4 rounded-2xl font-bold text-sm tracking-widest uppercase hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20">
                  0171 - 27 80 777
                </a>
              </div>
            </div>
            
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-500/5 to-transparent pointer-events-none"></div>
          </motion.div>

          {/* New Customer & Features Column */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-orange-500 rounded-[2.5rem] p-10 text-white shadow-xl shadow-orange-500/20 relative overflow-hidden group hover:shadow-orange-500/40 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-5xl font-headline font-black mb-2">10%</div>
                <div className="text-2xl font-bold mb-4">Rabatt</div>
                <p className="text-white/80 font-medium text-sm leading-relaxed mb-6">...für Neukunden! Starten Sie jetzt Ihre erste Reinigung mit exklusivem Preisvorteil.</p>
              </div>
              <div className="absolute -bottom-10 -right-10 opacity-10">
                <span className="material-symbols-outlined text-[150px]">percent</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-zinc-50 dark:bg-zinc-900 p-10 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 hover:border-orange-500/20 hover:shadow-2xl hover:shadow-orange-500/[0.05] transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h4 className="font-headline text-lg font-bold mb-6 tracking-tight uppercase text-zinc-400 relative z-10">Ihre Vorteile</h4>
              <div className="space-y-4 relative z-10">
                {mainPerks.map((perk, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span className="text-orange-500 material-symbols-outlined text-xl">{perk.icon}</span>
                    <span className="text-sm font-bold text-zinc-600 dark:text-zinc-300">{perk.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Detailed Explanation Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 py-12 px-10 bg-zinc-50 dark:bg-zinc-900/40 rounded-[3rem] border border-zinc-200/60 dark:border-zinc-800/60 hover:border-orange-500/20 hover:shadow-2xl hover:shadow-orange-500/[0.05] transition-all duration-500 group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="font-headline text-3xl md:text-3xl font-bold mb-6 tracking-tight">Sie fragen sich, wie das gehen soll?</h2>
            <p className="text-orange-500 text-lg font-bold mb-6 leading-tight">
              Ganz einfach... WIR TUN ES EINFACH & ZEIGEN ES IHNEN IN DER PRAXIS!
            </p>
            
            <div className="prose prose-zinc dark:prose-invert max-w-none text-zinc-500 dark:text-zinc-400 text-base leading-relaxed font-light space-y-4">
              <p>
                Wenn Sie noch kein Kunde sind, haben Sie jetzt die Möglichkeit, unsere Leistungen kostenlos und unverbindlich kennenzulernen.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 my-8 not-prose">
                {processPerks.map((perk, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white dark:bg-zinc-800 p-4 rounded-xl border border-zinc-200/50 shadow-sm hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 group/perk relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/[0.03] to-transparent opacity-0 group-hover/perk:opacity-100 transition-opacity"></div>
                    <span className="material-symbols-outlined text-orange-500 text-[20px] relative z-10">check_circle</span>
                    <span className="text-sm font-bold text-zinc-700 dark:text-zinc-200 relative z-10">{perk}</span>
                  </div>
                ))}
              </div>

              <p>
                Sie entscheiden im Anschluss selbst, ob Sie unsere Leistungen künftig in Anspruch nehmen möchten.
              </p>

              <p className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <strong>Unsere Erfahrung zeigt:</strong> Wer unsere Arbeit einmal live erlebt hat, entscheidet sich häufig für eine Zusammenarbeit. Nicht wegen kurzfristiger Vorteile, sondern wegen Qualität, Zuverlässigkeit ve flexibler Terminplanung.
              </p>

              <p>
                Zusätzlich bieten wir ein in unserer Branche eher ungewöhnliches Bonussystem, das unseren Kunden langfristige Vorteile sichert.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Final CTA Area */}
        <section className="text-center bg-zinc-900 text-white rounded-[3rem] p-12 md:p-16 relative overflow-hidden shadow-3xl hover:shadow-orange-500/10 transition-all duration-700 group/cta border border-zinc-800 hover:border-orange-500/20">
          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/[0.05] to-transparent opacity-0 group-hover/cta:opacity-100 transition-opacity duration-700"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="font-headline text-3xl md:text-4xl font-black mb-4 tracking-tighter">Neugierig geworden?</h3>
            <p className="text-zinc-400 text-lg mb-8 font-light leading-relaxed">
              Dann vereinbaren Sie jetzt einen unverbindlichen Termin. Wir freuen uns auf Ihre Anfrage.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="tel:01712780777" className="bg-orange-500 text-white px-10 py-4 rounded-xl font-bold text-base hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20">
                0171 - 27 80 777
              </a>
              <a href="https://www.wirputzengratis.de" target="_blank" rel="noopener noreferrer" className="bg-white/10 text-white px-10 py-4 rounded-xl font-bold text-base hover:bg-white/20 transition-all border border-white/10">
                wirputzengratis.de
              </a>
            </div>
          </div>
          
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent opacity-50"></div>
          <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-500 text-[9px] w-full px-8 max-w-4xl italic">
            * Preis gilt pro gerahmte Glasfläche ohne Rahmenreinigung zzgl. gültiger MwSt. | Leiter-, Sonder-, & Serviceleistungen sowie Wintergärten, Glasdächer, Sprossenfenster und Glasfassaden werden gesondert berechnet | 01.2026
          </p>
        </section>
      </div>
    </div>
  );
};

export default Actions;
