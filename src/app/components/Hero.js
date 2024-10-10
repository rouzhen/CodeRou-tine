import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-black text-white h-screen flex items-center justify-center">
      {/* Background Image or Element */}
      <div className="absolute inset-0 opacity-40">
        <img
          src="/angel-background.jpg"  // Replace with your image URL
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          josh <span className="text-indigo-400">Koo</span>
        </h1>
        <p className="text-lg md:text-2xl mb-4">
          Hi! I'm <span className="underline decoration-indigo-400 hover:text-indigo-400">Rou Zhen</span>, a front-end engineer with a passion for creating engaging user experiences. Currently at <a href="#" className="text-indigo-400 hover:underline">Powur</a>.
        </p>
      </div>

      {/* Floating Effect (Halo or any design element) */}
      <div className="absolute top-10 right-10 z-10">
        <div className="w-20 h-20 rounded-full border-4 border-indigo-400 opacity-75 animate-pulse"></div>
      </div>
    </div>
  );
};

export default Hero;
