import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Terminal } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="px-6 py-12 md:px-12 lg:px-24">
      
      <div className="bg-[#1f2335]/80 backdrop-blur-md border border-[#414868]/30 rounded-xl px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs text-[#c0caf5]/60">
        <div className="flex items-center gap-6">
          <span>© 2026 Salah Salah</span>
        </div>

        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4">
          </div>
          <div className="flex items-center gap-4 text-[#c0caf5]/40">
            <a href="#" className="hover:text-[#ff9e64] transition-colors"><Github size={16} /></a>
            <a href="#" className="hover:text-[#ff9e64] transition-colors"><Linkedin size={16} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
