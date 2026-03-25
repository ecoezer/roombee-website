import React from 'react';

const Equipment: React.FC = () => {
  return (
    <section className="py-32 px-8 max-w-screen-2xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <img 
                alt="Specialized team working" 
                className="rounded-2xl shadow-lg" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmB9DOiB1gZ4Dk9c8ydI05YF_KUMPYHRGhAJsnUKjWY1k44lp4UKnET7GC3ynO7PgZ6fi8ApajmekfWgz3hLSQlxBdayRTk_VJx_XG8eaAaoa9xlnP9MZ-0Y_-_STtZRC6CW37Pqu7pEmLZxO3IwA349g6EMSdCL-TZZPHHwSiH8sgjykbN4VKH1UmKRDORAsVztyJRW29RNUH49NPmifHtrNyjnF1SQrSCt-E3elhXqh0icMwDZCfXUgJLmFPZPjzV-UCol1y97g"
              />
              <img 
                alt="Cleaning equipment" 
                className="rounded-2xl shadow-lg" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkxRjZiednO7_K14LJjc1EnYn6xzvY5S4PUJcdX31aLQTkU2jWU_6vcrwins-GhLQhruqCTSHvGIg5Fc0kRQdT0EgGbSWNJhhVZoB7ig-hr3SS6vDQAgcSL1wFEIL_d31Tc2IuuS5bLiOskFWMe9Q9pNxKJN0KFR95o6v2HlMKtEmOBTz9MDMPl54pP2u8wVTCwsCFvTjgSigmhnDI3I2T2qoUggUk6vYd2eo9Gd7AtdkgehpngR53cI80wVkf5cmdEi8Nj9kwfhk"
              />
            </div>
            <div className="space-y-4">
              <img 
                alt="Laboratory precision" 
                className="rounded-2xl shadow-lg" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6YeYxQ1FkiLmoFqd55SJoi4l86NEtxrAj8rcz5XWUsXED8thRSCnLAl1FfsM7O9zSywGTjFClCL31i-_VgZ8vmhRQk3fE-vdCPQbr42f77E9XyYty1tPyVs6D6wgyo4eM-jxzyA4iQQjzLhAX_x_dQ4JhkFRNR8l1PDgRRWS2ef3m7ElVsJ8sEroooczbhX3eKcHfxflXzvibokLrqehDN6YDy8gDL7DiSfV4ybSSh_e8biWROwZ8GM3u8TB_lhwfPVui-77OiIk"
              />
              <img 
                alt="Corporate meeting" 
                className="rounded-2xl shadow-lg" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAcZUbahSEwznA7YqxGV-FXtoavWcxMB96HzJyPEvrsoNPOXPx7UpbMFy_nF3exwtCA2PRkRl8RgbWwXelby7Gy1jWHWl1r--32jre_Qgq5c_FFKVDJZBF_suXL3zbHKh7umOdiY8apfGxjiAgq0lFlGfmisAMxuJzT3QjsCRfhhhAuX6LQhko2IAjo81XBPKJjihsYAPTz1lY3SyeGnAQHJBZNzU6K7wr9l-06rYfymPcu1zxcuoKXou2_4kn7hKCAris7rUXUE4"
              />
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tighter mb-8 leading-tight">Kapazität trifft auf <span className="text-primary">Spitzentechnologie.</span></h2>
          <p className="text-on-surface-variant text-lg mb-10 leading-relaxed">
            Wir verfügen über den größten Fuhrpark spezialisierter Reinigungsrobotik und Hochleistungs-Equipment in der Region. Unser Personal durchläuft kontinuierlich Schulungen für neue Materialien und Gefahrenstoffe.
          </p>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
              </div>
              <div>
                <h4 className="font-headline font-bold text-xl mb-2">Spezialisierte Teams</h4>
                <p className="text-on-surface-variant">Festangestellte Experten für jeden Bereich – keine Subunternehmer-Ketten.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>construction</span>
              </div>
              <div>
                <h4 className="font-headline font-bold text-xl mb-2">High-End Equipment</h4>
                <p className="text-on-surface-variant">Einsatz von ökologischen Hochleistungskonzentraten und KI-gestützten Reinigungssystemen.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>query_stats</span>
              </div>
              <div>
                <h4 className="font-headline font-bold text-xl mb-2">Digitales Reporting</h4>
                <p className="text-on-surface-variant">Echtzeit-Dokumentation aller Leistungen über unser Kundenportal.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Equipment;
