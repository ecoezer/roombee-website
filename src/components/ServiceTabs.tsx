import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceItem {
  title: string;
  desc: string;
  fullDesc?: string;
  image?: string;
  hasNotruf?: boolean;
  moreLink?: string;
}

interface TabContent {
  id: string;
  label: string;
  icon: string;
  heading: string;
  subtext: string;
  items: ServiceItem[];
}

const ServiceTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('alltag');
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const tabs: TabContent[] = [
    {
      id: 'alltag',
      label: 'ALLTAG & FRÜHJAHR',
      icon: 'home',
      heading: 'Frühjahr & Alltag',
      subtext: 'Glasreinigung, Haushalt, Solar und mehr. Jetzt im Frühjahr der richtige Moment.',
      items: [
        { 
          title: 'Gratis-Fenster-Aktion', 
          desc: 'Erstes Fenster kostenlos für Neukunden zum Kennenlernen.',
          fullDesc: 'Als Neukunde reinigen wir Ihr erstes Fenster komplett kostenlos ve unverbindlich. Erleben Sie unsere Arbeitsweise ve Qualität ohne Risiko. Keine Anfahrt, keine versteckten Kosten.',
          image: 'https://roombee.de/file/i/82df3d8bd15862522.png',
          moreLink: '/aktionen'
        },
        { 
          title: 'Professionelle Glasreinigung: lohnt sich das?', 
          desc: 'Schlierenfreie Ergebnisse ve Werterhalt Ihrer Glasflächen.',
          fullDesc: 'Mineralische Ablagerungen ve Umwelteinflüsse trüben Glasflächen dauerhaft. Unsere professionelle Reinigung sorgt nicht nur für streifenfreien Glanz, sondern schützt das Material langfristig.',
          image: 'https://roombee.de/file/i/e3f2389af14101522.png',
          moreLink: '/service'
        },
        { 
          title: 'Solaranlage reinigen: bringt das wirklich was?', 
          desc: 'Bis zu 30% mehr Ertrag durch rückstandsfreie Reinigung.',
          fullDesc: 'Schmutz, Pollen ve Moos können die Leistung Ihrer Solaranlage massiv reduzieren. Wir prüfen den Zustand ve reinigen ökologisch vertretbar für maximale Energieausbeute.',
          image: 'https://roombee.de/file/i/eb962d11234172522.png',
          moreLink: '/service'
        },
        { 
          title: 'Haushaltsreinigung als Geschenk?', 
          desc: 'Geschenkgutscheine für jede Gelegenheit ve jeden Bedarf.',
          fullDesc: 'Schenken Sie Zeit ve Sauberkeit. Unsere Gutscheine sind das perfekte Geschenk für Eltern, Freunde veya als Unterstützung in stressigen Zeiten. Individuell gestaltbar.',
          image: 'https://roombee.de/file/i/b36f2279a13172522.png',
          moreLink: '/service'
        },
        { 
          title: 'Treppenhausreinigung: wer zahlt das eigentlich?', 
          desc: 'Beratung zu Umlagefähigkeit ve transparenten Kostenstrukturen.',
          fullDesc: 'Die Kosten für die Treppenhausreinigung können in der Regel als Betriebskosten auf die Mieter umgelegt werden. Wir sorgen für rechtssichere Abrechnungen ve ein gepflegtes Entree.',
          image: 'https://roombee.de/file/i/8ab22c8ab74172522.png',
          moreLink: '/service'
        }
      ]
    },
    {
      id: 'besondere',
      label: 'BESONDERE SITUATIONEN',
      icon: 'emergency_home',
      heading: 'Besondere Situationen',
      subtext: 'Für Fälle, die man nicht plant. Diskret, professionell, ohne Vorwürfe.',
      items: [
        { 
          title: 'Messiwohnung geerbt. Was jetzt?', 
          desc: 'Diskrete Räumung ve Reinigung mit klarem Sanierungskonzept.',
          fullDesc: 'Kein Urteil, kein Stress. Ein Anruf reicht. Wir besichtigen diskret, erstellen ein klares Konzept ve übernehmen alles: Räumung, Reinigung, Entsorgung. Danach ist die Wohnung bezugsfertig veya übergabebereit.',
          image: 'https://roombee.de/file/i/89e35be3b13822522.png',
          hasNotruf: true,
          moreLink: '/service'
        },
        { 
          title: 'Gibt es Situationen, die zu schlimm sind?', 
          desc: 'Spezialisierte Hilfe bei Tatortreinigung veya Animal Hoarding.',
          fullDesc: 'Wir übernehmen Tatortreinigungen ve Animal-Hoarding-Fälle jeder Art. Mit zertifizierten Verfahren ve höchster Diskretion stellen wir die Bewohnbarkeit wieder her.',
          image: 'https://roombee.de/file/i/23f24fd3656362522.png',
          hasNotruf: true,
          moreLink: '/service'
        },
        { 
          title: 'Mieter hat die Wohnung verwahrlost hinterlassen', 
          desc: 'Dokumentation ve Wiederherstellung für eine schnelle Neuvermietung.',
          fullDesc: 'Wir räumen, reinigen ve dokumentieren den Zustand des Objekts für eventuelle rechtliche Schritte. Schnell, gründlich ve bereit für die Neuvermietung.',
          image: 'https://roombee.de/file/i/55c94927239852522.png',
          moreLink: '/service'
        },
        { 
          title: 'Wie diskret arbeiten Sie wirklich?', 
          desc: 'Einsatz neutraler Fahrzeuge ve diskrete Arbeitsweise vor Ort.',
          fullDesc: 'Unsere Fahrzeuge sind unauffällig, unsere Mitarbeiter arbeiten ruhig ve ohne Aufsehen. Bei Animal Hoarding arbeitet wir eng mit Tierschutzorganisationen zusammen.',
          image: 'https://roombee.de/file/i/e7af408fd90952522.png',
          hasNotruf: true,
          moreLink: '/service'
        },
        { 
          title: 'Rohrverstopfung nachts oder am Wochenende?', 
          desc: '24/7 Notdienst bei akuten Problemen im Sanitärbereich.',
          fullDesc: 'Unser Notdienst ist 24 Stunden an 7 Tagen erreichbar, auch an Feiertagen. Wir beheben Verstopfungen ve minimieren Wasserschäden durch sofortige Intervention.',
          image: 'https://roombee.de/file/i/7f5d4fca178852522.png',
          hasNotruf: true,
          moreLink: '/service'
        }
      ]
    },
    {
      id: 'ablauf',
      label: 'ABLAUF & PREISE',
      icon: 'contract',
      heading: 'Ablauf & Preise',
      subtext: 'Kein Kleingedrucktes. Klare Antworten auf Fragen, die sich jeder stellt.',
      items: [
        { 
          title: 'Was kostet ein Einsatz?', 
          desc: 'Transparente Festpreise nach kostenloser Vor-Ort-Besichtigung.',
          fullDesc: 'Faire Preise ohne Überraschungen. Nach einer kostenlosen Besichtigung erhalten Sie ein verbindliches Angebot, das alle Leistungen ve Entsorgungskosten beinhaltet.',
          image: 'https://roombee.de/file/i/82df3d8bd15862522.png',
          moreLink: '/service'
        },
        { 
          title: 'Wie läuft ein Auftrag ab?', 
          desc: 'Anfrage → Besichtigung → Angebot → Ausführung → Abnahme.',
          fullDesc: 'Strukturierte Prozesse garantieren Qualität. Wir begleiten Sie von der ersten Anfrage bis zur finalen Übergabe des blitzsauberen Objekts.',
          moreLink: '/ueber-uns'
        },
        { 
          title: 'Sind Ihre Mitarbeiter versichert?', 
          desc: 'Voller Versicherungs- ve Haftungsschutz für alle Mitarbeiter.',
          fullDesc: 'Sicherheit geht vor. Alle unsere Mitarbeiter sind fest angestellt, sozialversichert ve wir verfügen über eine umfassende Betriebshaftpflichtversicherung.',
          moreLink: '/ueber-uns'
        },
        {
          title: 'Bonusprogramm für Stammkunden?',
          desc: 'Exklusive Vorteile für unsere langjährigen Partner.',
          fullDesc: 'Treue zahlt sich aus. Mit unserem Bonusprogramm profitieren Stammkunden von attraktiven Konditionen ve bevorzugter Terminvergabe.',
          moreLink: '/aktionen'
        },
        {
          title: 'Wie schnell sind Sie verfügbar?',
          desc: 'Notfälle werden bei uns immer priorisiert.',
          fullDesc: 'In dringenden Fällen sind wir innerhalb kürzester Zeit vor Ort. Reguläre Termine vergeben wir so zeitnah wie möglich nach Ihren Wünschen.',
          moreLink: '/service'
        }
      ]
    },
    {
      id: 'leistungen',
      label: 'UNSERE LEISTUNGEN',
      icon: 'analytics',
      heading: 'Das leisten wir für Sie',
      subtext: 'Von der Grundreinigung bis zur Tatortsanierung. Alles auf einen Blick.',
      items: [
        { title: 'Entrümpeln & Entsorgen', desc: 'Professionelle Räumung von Häusern ve Gewerbeobjekten.', fullDesc: 'Vom Keller bis zum Dachboden - wir räumen besenrein ve entsorgen fachgerecht.', moreLink: '/service' },
        { title: 'Messiewohnungen', desc: 'Empathische ve diskrete Hilfe bei extremen Verschmutzungen.', fullDesc: 'Wir stellen die Bewohnbarkeit verwahrloster Objekte wieder her - ohne Vorurteile.', moreLink: '/service' },
        { title: 'Animal Hoarding | Tier-Notrettung', desc: 'Spezialisierte Reinigung unter Einhaltung des Tierschutzes.', fullDesc: 'Wir sanieren Objekte nach Animal-Hoarding-Fällen in Abstimmung mit Behörden.', moreLink: '/service' },
        { title: 'Tatortreinigung', desc: 'Zertifizierte Wiederherstellung nach Unfällen veya Verbrechen.', fullDesc: 'Hygienische ve diskrete Sanierung durch staatlich geprüfte Desinfektoren.', moreLink: '/service' },
        { title: 'Bauschlussreinigung', desc: 'Gründliche Reinigung nach Sanierung veya Neubau.', fullDesc: 'Wir entfernen Baustaub, Farbreste ve Zementschleier für einen perfekten Einzug.', moreLink: '/service' },
        { title: 'Grundreinigungsarbeiten', desc: 'Intensive Tiefenreinigung aller Bodenbeläge ve Flächen.', fullDesc: 'Wir bringen Ihre Böden zum Glänzen ve entfernen selbst hartnäckigste Schmutzschichten.', moreLink: '/service' },
        { title: 'Fassadenreinigung', desc: 'Werterhalt durch professionelle Außenpflege.', fullDesc: 'Wir reinigen Ihre Fassade schonend ve effektiv gegen Umwelteinflüsse.', moreLink: '/service' },
        { title: 'Graffiti-Entfernung', desc: 'Schnelle ve rückstandsfreie Beseitigung von Schmierereien.', fullDesc: 'Wir entfernen Graffiti material- ve umweltschonend von fast allen Oberflächen.', moreLink: '/service' },
        { title: 'Glas- und Rahmenreinigung', desc: 'Streifenfreier Glanz für alle Fensterflächen.', fullDesc: 'Professionelle Reinigung inklusive Rahmen ve Falzen für perfekte Sicht.', moreLink: '/service' },
        { title: 'Treppenhausreinigung', desc: 'Regelmäßige Unterhaltspflege für Mehrfamilienhäuser.', fullDesc: 'Wir sorgen für ein einladendes Treppenhaus, fegen ve wischen nach Ihren Intervallen.', moreLink: '/service' },
        { title: 'Hausmeister-Service', desc: 'Zuverlässige Objektbetreuung ve kleine Reparaturen.', fullDesc: 'Wir haben ein Auge auf Ihr Objekt ve erledigen anfallende Arbeiten sofort.', moreLink: '/service' },
        { title: 'Garten- & Grundstückspflege', desc: 'Ganzjährige Pflege Ihrer Außenanlagen.', fullDesc: 'Vom Rasenschnitt bis zum Winterdienst - Ihr Grundstück in besten Händen.', moreLink: '/service' },
        { title: 'Unterhaltsreinigungen', desc: 'Individuelle Reinigungskonzepte für Büro ve Privat.', fullDesc: 'Regelmäßige Sauberkeit nach fest definierten Leistungsverzeichnissen.', moreLink: '/service' }
      ]
    },
    {
      id: 'handwerk',
      label: 'HANDWERK & HAUSMEISTER',
      icon: 'construction',
      heading: 'Handwerk & Hausmeister',
      subtext: 'Kleine Reparaturen, Montage, Grundstückspflege. Zuverlässig erledigt, bevor es teuer wird.',
      items: [
        { 
          title: 'Kleine Reparaturen: lohnt sich ein Profi?', 
          desc: 'Leuchtmittel, Türen, Handläufe: Wir erledigen Kleinigkeiten zuverlässig.',
          fullDesc: 'Leuchtmittel tauschen, Türen nachstellen, lockere Handläufe befestigen: Wer Kleinigkeiten rechtzeitig erledigt, spart langfristig hohe Reparaturkosten.',
          image: 'https://roombee.de/file/i/e7af408fd90952522.png',
          moreLink: '/service'
        },
        { 
          title: 'Montagearbeiten: was übernehmen Sie?', 
          desc: 'Möbel, Regale, Schilder, Briefkastenanlagen: Schnell ve sauber aufgebaut.',
          fullDesc: 'Wir montieren alles, was befestigt werden muss. Schnell, sauber ve professionell, ohne dass Sie selbst zum Werkzeug greifen müssen.',
          moreLink: '/service'
        },
        {
          title: 'Grundstückspflege: was gehört dazu?',
          desc: 'Rasenpflege, Heckenschnitt ve Winterdienst.',
          fullDesc: 'Wir übernehmen die regelmäßige Pflege Ihres Grundstücks, damit Sie sich entspannen können.',
          moreLink: '/service'
        },
        {
          title: 'Wer kümmert sich, wenn ich nicht da bin?',
          desc: 'Zuverlässige Urlaubsvertretung ve Objektkontrolle.',
          fullDesc: 'Wir schauen nach dem Rechten, leeren den Briefkasten ve wässern die Pflanzen.',
          moreLink: '/service'
        },
        {
          title: 'Hausmeister-Service: Einzelauftrag oder Dauervertrag?',
          desc: 'Flexible Lösungen für Eigentümer ve Verwalter.',
          fullDesc: 'Wählen Sie das Modell, das am besten zu Ihrem Objekt ve Budget passt.',
          moreLink: '/service'
        }
      ]
    }
  ];

  const activeContent = tabs.find(t => t.id === activeTab);

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8 py-12">
      <div className="bg-white rounded-[3rem] shadow-2xl border border-zinc-200/50 overflow-hidden">
        {/* Tabs Desktop */}
        <div className="hidden md:flex border-b border-zinc-200/50 bg-zinc-50/50">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setExpandedItem(null);
              }}
              className={`flex-1 flex items-center justify-center gap-3 py-8 px-4 text-[11px] font-bold tracking-widest transition-all relative border-r last:border-r-0 border-zinc-200/50
                ${activeTab === tab.id ? 'text-orange-500 bg-white' : 'text-zinc-400 hover:text-zinc-600'}
              `}
            >
              <span className="material-symbols-outlined text-xl">{tab.icon}</span>
              {tab.label}
              {activeTab === tab.id && (
                <motion.div 
                  layoutId="active-tab-indicator"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500"
                />
              )}
            </button>
          ))}
        </div>

        {/* Mobile Tabs */}
        <div className="md:hidden flex overflow-x-auto border-b border-zinc-100">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setExpandedItem(null);
              }}
              className={`flex-shrink-0 px-6 py-4 text-[10px] font-bold tracking-widest
                ${activeTab === tab.id ? 'text-orange-500 border-b-2 border-orange-500' : 'text-zinc-400'}
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="p-6 md:p-12 min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="max-w-4xl mx-auto">
                <h3 className="font-headline text-3xl font-extrabold mb-4 tracking-tight">{activeContent?.heading}</h3>
                <p className="text-zinc-500 text-lg font-light mb-12">{activeContent?.subtext}</p>
                
                <div className="space-y-4">
                  {activeContent?.items.map((item, i) => (
                    <div 
                      key={i}
                      className="group flex flex-col p-4 md:p-6 rounded-3xl bg-zinc-50 border border-zinc-200/50 hover:border-orange-500/30 transition-all cursor-pointer shadow-sm hover:shadow-xl hover:shadow-orange-500/[0.05]"
                      onClick={() => setExpandedItem(expandedItem === `${activeTab}-${i}` ? null : `${activeTab}-${i}`)}
                    >
                      <div className="flex items-center justify-between">
                        <h4 className={`font-bold transition-colors uppercase tracking-tight text-sm 
                          ${expandedItem === `${activeTab}-${i}` ? 'text-orange-500' : 'text-zinc-900 group-hover:text-orange-500'}
                        `}>
                          {item.title}
                        </h4>
                        <motion.span 
                          animate={{ rotate: expandedItem === `${activeTab}-${i}` ? 180 : 0 }}
                          className="material-symbols-outlined text-orange-500 text-xl"
                        >
                          expand_more
                        </motion.span>
                      </div>
                      
                      <AnimatePresence>
                        {expandedItem === `${activeTab}-${i}` && (
                          <motion.div
                            initial={{ height: 0, opacity: 0, marginTop: 0 }}
                            animate={{ height: 'auto', opacity: 1, marginTop: 24 }}
                            exit={{ height: 0, opacity: 0, marginTop: 0 }}
                            className="overflow-hidden border-t border-zinc-200/50 pt-6"
                          >
                            <div className="flex flex-col gap-6">
                              {item.image && (
                                <motion.div 
                                  initial={{ scale: 0.95, opacity: 0 }}
                                  animate={{ scale: 1, opacity: 1 }}
                                  className="w-full h-48 md:h-64 rounded-2xl overflow-hidden shadow-inner bg-zinc-200"
                                >
                                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                </motion.div>
                              )}
                              
                              <div className="flex flex-col gap-6">
                                <p className="text-zinc-600 text-base font-light leading-relaxed">
                                  {item.fullDesc || item.desc}
                                </p>
                                
                                <div className="flex flex-wrap gap-3">
                                  {item.hasNotruf && (
                                    <button className="flex items-center gap-2 px-5 py-2.5 bg-red-600 text-white rounded-xl font-bold text-[10px] tracking-widest uppercase hover:bg-red-700 transition-all shadow-lg shadow-red-600/20">
                                      <span className="material-symbols-outlined text-sm">emergency</span>
                                      Notruf
                                    </button>
                                  )}
                                  <button className="flex items-center gap-2 px-5 py-2.5 bg-orange-500 text-white rounded-xl font-bold text-[10px] tracking-widest uppercase hover:bg-orange-600 transition-all">
                                    Mehr Erfahren
                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom Buttons */}
          <div className="mt-16 flex flex-wrap gap-4 justify-center md:justify-end border-t border-zinc-100 pt-8">
            <button className="flex items-center gap-3 px-8 py-3.5 bg-orange-500 text-white rounded-2xl font-bold text-xs tracking-widest uppercase hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20">
              <span className="material-symbols-outlined text-sm">redeem</span>
              Aktionen entdecken
            </button>
            <button className="flex items-center gap-3 px-8 py-3.5 bg-zinc-900 text-white rounded-2xl font-bold text-xs tracking-widest uppercase hover:bg-zinc-800 transition-all">
              <span className="material-symbols-outlined text-sm">call</span>
              Kostenlos anfragen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTabs;
