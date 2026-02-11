import React from 'react';
import { Github, Linkedin, Twitter, ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="px-6 py-12 md:px-12 lg:px-24 max-w-5xl">
      <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl mb-8">
        Hey! I'm <span className="text-[#ff9e64]">Salah Salah</span>
      </h1>
      <p className="font-mono text-[#c0caf5]/80 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl">
        I’m a software engineer focused on building data-driven systems across finance, AI, and full-stack development.
        I built this site as a living showcase of the projects I’ve been working on. 
        It’s a space where I document what I’m building, what I’m learning, and how I think about solving problems with code.
      </p>

      <div className="flex flex-wrap items-center gap-6 font-mono text-sm md:text-base text-[#c0caf5]/60 mb-12">
        <a href="#" className="flex items-center gap-2 hover:text-[#ff9e64] transition-colors">
          <Github size={18} /> GitHub
        </a>
        <span className="text-[#c0caf5]/20">|</span>
        <a href="#" className="flex items-center gap-2 hover:text-[#ff9e64] transition-colors">
          <Linkedin size={18} /> LinkedIn
        </a>
      </div>

      <div className="flex flex-wrap items-center gap-8 font-mono">
        {/* <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#7aa2f7] flex items-center justify-center text-white text-xs">$</div>
          <span className="text-[#c0caf5]">Stan</span>
        </div>
        <span className="text-[#c0caf5]/30">/</span> */}
        <div className="flex items-center gap-3 opacity-50">
          <div className="w-8 h-8 rounded-lg bg-[#24283b] flex items-center justify-center">
            <div className="w-4 h-4 bg-[#7aa2f7] rotate-45"></div>
          </div>
          <span className="text-[#c0caf5]">Fidelity <span className="text-xs">(Past)</span></span>
        </div>
        <span className="text-[#c0caf5]/30">/</span>
        <div className="flex items-center gap-3 opacity-50">
          <div className="w-8 h-8 rounded-full bg-[#f7768e] flex items-center justify-center text-white text-xs">🦔</div>
          <span className="text-[#c0caf5]">HOOPP <span className="text-xs">(Past)</span></span>
        </div>
      </div>
    </section>
  );
};
