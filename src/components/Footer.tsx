import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-zinc-200/50 bg-zinc-50">
      <div className="flex flex-col md:flex-row justify-between items-start px-12 pt-16 pb-8 max-w-screen-2xl mx-auto font-inter text-sm leading-relaxed">
        <div className="mb-12 md:mb-0 max-w-xs">
          <div className="mb-6">
            <img src="/logo.png" alt="Roombee" className="h-12 w-auto" />
          </div>
          <p className="text-zinc-500 mb-8">
            Ihr Partner für professionelles Facility Management auf höchstem Niveau. Reinheit ist unser Handwerk, Präzision unser Versprechen.
          </p>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-xl border border-zinc-200 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors group" href="#">
              <span className="material-symbols-outlined text-[18px]">share</span>
            </a>
            <a className="w-10 h-10 rounded-xl border border-zinc-200 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors group" href="#">
              <span className="material-symbols-outlined text-[18px]">mail</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
          <div>
            <h5 className="font-bold text-zinc-900 mb-6 uppercase tracking-widest text-xs">Leistungen</h5>
            <ul className="space-y-4">
              <li><a className="text-zinc-500 hover:text-orange-600 transition-colors" href="#">Büroreinigung</a></li>
              <li><a className="text-zinc-500 hover:text-orange-600 transition-colors" href="#">Industrieservice</a></li>
              <li><a className="text-zinc-500 hover:text-orange-600 transition-colors" href="#">Reinraum</a></li>
              <li><a className="text-zinc-500 hover:text-orange-600 transition-colors" href="#">Fassadenpflege</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-zinc-900 mb-6 uppercase tracking-widest text-xs">Unternehmen</h5>
            <ul className="space-y-4">
              <li><a className="text-zinc-500 hover:text-orange-600 transition-colors" href="#">Referenzen</a></li>
              <li><a className="text-zinc-500 hover:text-orange-600 transition-colors" href="#">Business-Lösungen</a></li>
              <li><a className="text-zinc-500 hover:text-orange-600 transition-colors" href="#">Karriere</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-zinc-900 mb-6 uppercase tracking-widest text-xs">Rechtliches</h5>
            <ul className="space-y-4">
              <li><a className="text-zinc-500 hover:text-orange-600 transition-colors" href="#">Impressum</a></li>
              <li><a className="text-zinc-500 hover:text-orange-600 transition-colors" href="#">Datenschutz</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="px-12 py-4 border-t border-zinc-200/50 max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-zinc-400 text-xs">© 2026 Roombee Gebäudereinigung & Dienstleistungen. Alle Rechte vorbehalten.</div>
        <div className="flex gap-6 text-xs text-zinc-400">
          <span>Mit Stolz entwickelt in Deutschland</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
