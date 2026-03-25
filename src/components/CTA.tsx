import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-16 px-4 max-w-screen-xl mx-auto">
      <div className="bg-inverse-surface rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent pointer-events-none"></div>
        <div className="relative z-10">
          <h2 className="font-headline text-3xl md:text-5xl font-black text-inverse-on-surface tracking-tighter mb-4">Bereit für den neuen <span className="text-primary-container">Standard?</span></h2>
          <p className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto mb-8">
            Laden Sie sich unsere detaillierte Leistungsübersicht herunter oder fordern Sie direkt ein individuelles Angebot für Ihren Standort an.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary-gradient text-on-primary px-8 py-4 rounded-full font-headline font-bold text-base shadow-xl shadow-primary/30 transition-all hover:scale-105">
              Leistungskatalog anfordern
            </button>
            <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-headline font-bold text-base hover:bg-white/20 transition-all">
              Beratungstermin buchen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
