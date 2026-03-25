import React from 'react';
import { HeroSlider } from './HeroSlider';

const Hero: React.FC = () => {
  return (
    <section className="relative px-6 py-4">
      <div className="max-w-[1440px] mx-auto">
        <HeroSlider />
      </div>
    </section>
  );
};

export default Hero;
