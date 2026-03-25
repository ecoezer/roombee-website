import React from 'react';

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tighter mb-6">Spezialisierte Kompetenzbereiche</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">Kein Standard, sondern Präzision. Wir decken die gesamte Bandbreite industrieller und gewerblicher Anforderungen ab.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]">
          {/* Category 1: Bürokomplexe */}
          <div className="md:col-span-7 bg-surface-container-lowest rounded-3xl overflow-hidden relative group transition-all duration-500 hover:shadow-2xl">
            <img 
              alt="Office complex interior" 
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHi-1O1kehMa5D47w8Z9iLmCYyervmj8eqrm7GFJQcWDxXuzPq64JgMFurXWtEBTHUx7OFP8Ot0XGIsJILkv-xgQdX0tyeDIPd55WRVq5pW7DqU1OY31QxQolrYpdAVkBxKXx767o5l1LWyur546Zb6ju9gN3PwmqLvy-ljjPFcgXbBvivZuMmNZ1Sye8kWRzp9C0SvyRnMEDsIEpGUY4eAS3dt03uXXFlF2RyuaXXXWYboE8FYnS3bpsvB47qiv9el1bqi47RBrE"
            />
            <div className="relative p-12 h-full flex flex-col justify-end">
              <span className="material-symbols-outlined text-primary text-5xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>corporate_fare</span>
              <h3 className="font-headline text-3xl font-bold mb-4">Unterhaltsreinigung für Bürokomplexe</h3>
              <p className="text-on-surface-variant text-lg max-w-md mb-8">Tägliche Exzellenz für produktive Arbeitswelten. Wir managen Großflächen mit unsichtbarer Effizienz.</p>
              <ul className="flex flex-wrap gap-3">
                <li className="px-4 py-2 bg-surface-container-high rounded-full text-sm font-medium">Bodenpflege</li>
                <li className="px-4 py-2 bg-surface-container-high rounded-full text-sm font-medium">Sanitär-Hygiene</li>
                <li className="px-4 py-2 bg-surface-container-high rounded-full text-sm font-medium">Küchenservice</li>
              </ul>
            </div>
          </div>
          {/* Category 2: Industriereinigung */}
          <div className="md:col-span-5 bg-inverse-surface text-inverse-on-surface rounded-3xl overflow-hidden relative group transition-all duration-500 hover:shadow-2xl">
            <img 
              alt="Industrial hall cleaning" 
              className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCv7ZDTQ59TlATOxpalPUH8xg2m8ikYjbfmE_zAppbR-r1FrkXs2m4DJyb6o8OF41h6tOTO98FvUYeILSoIzH_UjIjUN39QYrOviBnFsfzcT-N49UCIR2g2N36K3FfNjutL3rBEejGfvsr0wzaTnoLmlt3UxgBkutRPuRTfpO44FBIyR4L2m-W-4Sm-j8lKv6laZvLrW4fVJGn0nWrmdhU84PYK2G4a0tSLWUQjhEwA3-4f4Uf83fIXLIHVgbLvqDMtIX7BrD9kbx8"
            />
            <div className="relative p-12 h-full flex flex-col">
              <span className="material-symbols-outlined text-primary-container text-5xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>precision_manufacturing</span>
              <h3 className="font-headline text-3xl font-bold mb-4">Industriereinigung</h3>
              <p className="text-zinc-400 text-lg mb-8">Maschinen & Hallen. Spezialisierte Hochdruck- und Trockeneisreinigung für unterbrechungsfreie Produktion.</p>
              <button className="mt-auto flex items-center gap-2 text-primary-container font-bold group-hover:gap-4 transition-all">
                Details ansehen <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
          {/* Category 3: Reinraum-Service */}
          <div className="md:col-span-5 bg-surface-container-lowest rounded-3xl overflow-hidden relative group transition-all duration-500 hover:shadow-2xl border border-outline-variant/10">
            <div className="p-12 h-full flex flex-col">
              <span className="material-symbols-outlined text-tertiary text-5xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>biotech</span>
              <h3 className="font-headline text-2xl font-bold mb-4">Reinraum-Service</h3>
              <p className="text-on-surface-variant mb-6">Hochspezialisierte Reinigung für Pharma- und Technologieunternehmen nach strengsten Protokollen.</p>
              <div className="mt-auto aspect-video rounded-xl overflow-hidden">
                <img 
                  alt="Laboratory cleaning" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSPSlLXtPVWO30P-_crcV4kJqVR_YPrM0tpzm7syBeJsV0AIIaB1DnkSiYLzrTdwJm7_Url2F4_QcyCVuiqNTl3MxERaXaO_-jdvX-k79OCKGe9hw-Z6Q1Ma2Km3tEHQgCaOuMGogmSb7mXGju5i3WsmhMGMp2OA-4UDoFLxqk8Nnrpa6Pj350ZJAMx1ujZwnxIoSTmaFg1Ya7Weo1O-46ypsFgk8KBYAIPsLeyeLYyKU2wFS6EATYyJ2TLsfqXpAFwqDN-0cgBtU"
                />
              </div>
            </div>
          </div>
          {/* Category 4: Glas- & Fassade */}
          <div className="md:col-span-7 bg-primary text-on-primary rounded-3xl overflow-hidden relative group transition-all duration-500 hover:shadow-2xl">
            <div className="relative p-12 h-full flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1">
                <span className="material-symbols-outlined text-primary-fixed text-5xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>apartment</span>
                <h3 className="font-headline text-3xl font-bold mb-4">Glas- & Fassadenreinigung</h3>
                <p className="text-primary-fixed/80 text-lg mb-6">Höhentauglichkeit und modernste Lifttechnik für den perfekten ersten Eindruck Ihres Gebäudes.</p>
              </div>
              <div className="flex-1 w-full">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-2xl font-bold">99.8%</div>
                    <div className="text-xs uppercase tracking-tighter opacity-70">Kundenzufriedenheit</div>
                  </div>
                  <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-white h-full w-[99.8%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
