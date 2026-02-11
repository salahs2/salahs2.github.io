import React from 'react';
import { Hero } from '../components/Hero';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { Dashboard } from '../components/Dashboard';

export const Home = () => {
  return (
    <main>
      <Hero />
      
      <div className="py-12">
        <FeaturedProjects />
      </div>
{/* 
      <div className="py-12">
        <Dashboard />
      </div> */}
    </main>
  );
};
