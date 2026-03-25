import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-24 px-8 max-w-screen-2xl mx-auto">
      <div className="bg-inverse-surface rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent pointer-events-none"></div>
        <div className="relative z-10">
          <h2 className="font-headline text-4xl md:text-6xl font-extrabold text-inverse-on-surface tracking-tighter mb-8">Bereit für den neuen <span className="text-primary-container">Standard?</span></h2>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Laden Sie sich unsere detaillierte Leistungsübersicht herunter oder fordern Sie direkt ein individuelles Angebot für Ihren Standort an.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="btn-primary-gradient text-on-primary px-10 py-5 rounded-full font-headline font-bold text-lg shadow-2xl shadow-primary/40 transition-all hover:scale-105">
              Leistungskatalog anfordern
            </button>
            <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-full font-headline font-bold text-lg hover:bg-white/20 transition-all">
              Beratungstermin buchen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
