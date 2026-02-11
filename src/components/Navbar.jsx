import React from 'react';
import { Link, useLocation } from 'react-router';

export const Navbar = () => {
  const location = useLocation();
  const isProjects = location.pathname === '/projects';

  return (
    <nav className="flex items-center justify-between px-6 py-8 md:px-12 lg:px-24">
      <Link to="/" className="font-mono text-[#ff9e64] text-xl">
        {isProjects ? '~/projects/' : '~/'}
      </Link>
      <div className="flex gap-6 md:gap-10 font-mono text-sm md:text-base">
        <Link 
          to="/" 
          className={`hover:text-[#ff9e64] transition-colors ${location.pathname === '/' ? 'text-[#ff9e64]' : ''}`}
        >
          About
        </Link>
        {/* <Link to="#" className="hover:text-[#ff9e64] transition-colors">Posts</Link> */}
        <Link 
          to="/projects" 
          className={`hover:text-[#ff9e64] transition-colors ${location.pathname === '/projects' ? 'text-[#ff9e64]' : ''}`}
        >
          Projects
        </Link>
        {/* <Link to="#" className="hover:text-[#ff9e64] transition-colors">Pics</Link> */}
        {/* <Link to="#" className="hover:text-[#ff9e64] transition-colors">More...</Link> */}
      </div>
    </nav>
  );
};
