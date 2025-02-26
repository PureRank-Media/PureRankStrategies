// src/components/HeroSection.jsx
import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';

function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center text-gray-800 overflow-hidden bg-gradient-to-br from-[#f1efe7] to-[#121212]">
       {/* Logo */}
       <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
        <img src="/PRS.png" alt="PureRank Strategies Logo" className="h-12" />
      </div>
      {/* Content Overlay */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Unlock Automated Growth</h1>
        <p className="text-lg mb-8">We help businesses scale their marketing efforts...</p>
        <a href="https://purerank.ac-page.com/schedule-audit" target="_blank" rel="noopener noreferrer">
          <button className="bg-white text-purple-700 font-bold py-3 px-6 rounded-full hover:bg-purple-200">
            Schedule a Free Audit
          </button>
        </a>
      </div>

      {/* Bouncing Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-white float">
        <ChevronDownIcon className="h-8 w-8" />
      </div>
    </section>
  );
}

export default HeroSection;
