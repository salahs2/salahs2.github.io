import React from 'react';
import { Star, Tag, Folder } from 'lucide-react';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { projects } from '../constants/projects';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-[#24283b]/30 rounded-2xl border border-[#414868]/20 overflow-hidden flex flex-col group hover:border-[#ff9e64]/30 transition-all duration-300 cursor-pointer hover:bg-[#24283b]/80 transition-colors">

      {/* Terminal Preview */}
      <div className="p-4 bg-[#1a1b26]/50">
        <div className="bg-[#1f2335] rounded-xl p-5 border border-[#414868]/40 shadow-xl relative min-h-50 flex flex-col">
          <a href={project.projectLink} className="absolute inset-0 z-10" target="_blank" rel="noopener noreferrer" />
          <div className="flex items-center justify-between mb-6">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#f7768e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#e0af68]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#9ece6a]" />
            </div>

          </div>

          <div className="font-mono text-sm mb-4">
            <span className="text-[#f7768e]">{project.owner}</span>
            <span className="text-[#c0caf5]/40"> / </span>
            <span className="text-[#9ece6a]">{project.name}</span>
          </div>

          <p className="font-mono text-[#c0caf5] text-sm leading-relaxed mb-auto">
            {project.previewDescription}
          </p>

        </div>
      </div>

      {/* Content */}
      <div className="p-6 pt-4 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-mono text-xl text-[#c0caf5] font-bold group-hover:text-[#ff9e64] transition-colors">
            {project.title}
          </h3>
          <span className="font-mono text-[10px] text-[#c0caf5]/30">
            {project.date}
          </span>
        </div>

        <p className="font-mono text-xs text-[#c0caf5]/60 mb-6 leading-relaxed line-clamp-3">
          {project.fullDescription}
        </p>

        <div className="mt-auto flex flex-wrap gap-2">
          <Tag size={12} className="text-[#c0caf5]/30" />
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded bg-[#414868]/20 text-[#7aa2f7] font-mono text-[10px] border border-[#414868]/30"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Projects = () => {
  return (
    <div className="px-6 py-12 md:px-12 lg:px-24">
      <div className="flex items-center gap-4 mb-12">
        <Folder className="text-[#ff9e64]" size={32} />
        <h1 className="font-mono text-3xl md:text-4xl">Projects</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </div>
  );
};
