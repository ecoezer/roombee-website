import { motion } from 'framer-motion';
import SimpleSlider from './SimpleSlider';

const Hero = () => {
  return (
    <div className="pt-20 pb-12">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Headers styled like Über Uns */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-orange-500 font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase mb-4 border-b-2 border-orange-500/30 pb-1"
          >
            ROOMBEE STELLT SICH VOR
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-6xl font-black tracking-tighter leading-[1.1] text-zinc-900 dark:text-white"
          >
            Professionelle Gebäudereinigung für <br className="hidden md:block" />
            <span className="text-orange-500">Privat- und Gewerbekunden.</span>
          </motion.h1>
        </div>

        <SimpleSlider />
      </div>
    </div>
  );
};

export default Hero;
