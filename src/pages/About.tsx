import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-surface">
      {/* Hero Section */}
      <section className="relative pt-32 pb-8 px-8 overflow-hidden border-b border-zinc-200/50">
        <div className="max-w-screen-xl mx-auto z-10 relative">
          <h1 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-4 max-w-4xl">
            Professionelle Gebäudereinigung für <span className="text-orange-500">Privat- und Gewerbekunden.</span>
          </h1>
          <p className="text-zinc-500 text-lg md:text-xl leading-relaxed max-w-2xl font-light">
            Zuverlässige Abläufe. Saubere Ergebnisse. Klare Kommunikation.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-500/5 to-transparent -z-0"></div>
      </section>

      {/* Philosophy Section */}
      <section className="py-12 px-8 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-headline text-3xl font-bold tracking-tight mb-6">
                Wir sorgen dafür, dass Ihre Immobilie dauerhaft gepflegt, hygienisch und werterhaltend bleibt.
              </h2>
              <div className="space-y-6">
                <div className="group">
                  <h3 className="text-lg font-bold text-orange-500 mb-1 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs">01</span>
                    Strukturierte Abläufe
                  </h3>
                  <p className="text-on-surface-variant pl-10">Klare Planung und koordinierte Umsetzung ohne Verzögerungen für maximale Effizienz.</p>
                </div>
                <div className="group">
                  <h3 className="text-lg font-bold text-orange-500 mb-1 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs">02</span>
                    Zuverlässige Ausführung
                  </h3>
                  <p className="text-on-surface-variant pl-10">Geschultes Personal, feste Standards und kontrollierte Qualität bei jedem Einsatz.</p>
                </div>
                <div className="group">
                  <h3 className="text-lg font-bold text-orange-500 mb-1 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs">03</span>
                    Nachhaltige Ergebnisse
                  </h3>
                  <p className="text-on-surface-variant pl-10">Werterhalt, Hygiene und ein gepflegter Gesamteindruck, der Ihre Professionalität widerspiegelt.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-gradient p-1">
                <img 
                  src="/team.png" 
                  alt="Team working with precision" 
                  className="w-full h-full object-cover rounded-[2.8rem]"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-xl border border-zinc-200/50 dark:border-zinc-700/50 max-w-[200px]">
                <div className="text-primary font-bold text-3xl mb-1">100%</div>
                <div className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">Qualitätsgarantie</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-8 relative overflow-hidden border-t border-zinc-200/50">
        <div className="max-w-screen-xl mx-auto text-center mb-10 relative z-10">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight mb-3">So arbeiten wir</h2>
          <p className="text-zinc-500 text-base max-w-2xl mx-auto">Ein bewährter 6-Schritte-Prozess, der höchste Standards bei jeder Objektgröße garantiert.</p>
        </div>
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {[
            { step: "01", title: "Anfrage und Erstklärung", desc: "Wir erfassen Ihre individuellen Anforderungen präzise." },
            { step: "02", title: "Objektbesichtigung", desc: "Professionelle Bestandsaufnahme direkt vor Ort." },
            { step: "03", title: "Transparentes Angebot", desc: "Detaillierte Kostenkalkulation ohne versteckte Gebühren." },
            { step: "04", title: "Terminplanung", desc: "Flexible und verlässliche Zeitpläne für Ihren Betrieb." },
            { step: "05", title: "Fachgerechte Umsetzung", desc: "Durchführung durch unsere spezialisierten Expertenteams." },
            { step: "06", title: "Kontrolle und Übergabe", desc: "Gemeinsame Abnahme für kompromisslose Qualitätssicherung." }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-[2.5rem] bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-800/60 hover:border-orange-500/30 transition-all duration-300 group relative overflow-hidden hover:shadow-2xl hover:shadow-orange-500/5">
              <div className="absolute top-0 left-0 w-1 h-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="text-5xl font-headline font-black text-zinc-200/50 dark:text-zinc-800/50 group-hover:text-orange-500/10 transition-colors mb-4">{item.step}</div>
              <h4 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors">{item.title}</h4>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 pb-16">
        <div className="max-w-screen-xl mx-auto py-16 px-8 text-center bg-zinc-900 text-white rounded-[3rem] overflow-hidden relative">
          <div className="max-w-screen-md mx-auto relative z-10">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">
              Sie möchten Ihr Projekt sauber, zuverlässig ve terminsicher umsetzen?
            </h2>
            <button className="bg-orange-500 text-white px-8 py-3.5 rounded-2xl font-bold text-base hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/10">
              Jetzt unverbindlich anfragen
            </button>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50"></div>
        </div>
      </section>
    </div>
  );
};

export default About;
