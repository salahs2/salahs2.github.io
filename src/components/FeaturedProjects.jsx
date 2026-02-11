import React from "react";
import { Star, Tag, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import { projects } from "../constants/projects";

const ProjectCard = ({
  owner,
  name,
  description,
  fullDescription,
  tags,
  projectLink,
}) => {
  return (
    <div className="bg-[#24283b] rounded-xl overflow-hidden border border-[#414868]/30 flex flex-col h-full cursor-pointer hover:bg-[#24283b]/80 transition-colors hover:border-[#FF9E64]/50">
      {/* Top terminal area */}
      <div className="bg-[#1a1b26]/50 p-6 grow flex flex-col">
        <div className="bg-[#1f2335] rounded-lg p-5 border border-[#414868]/50 shadow-2xl relative grow flex flex-col min-h-55">
          <a href={projectLink} className="absolute inset-0 z-10" target="_blank" rel="noopener noreferrer" />
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#f7768e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#e0af68]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#9ece6a]" />
            </div>

          </div>

          <div className="font-mono mb-4">
            <span className="text-[#bb9af7]">{owner}</span>
            <span className="text-[#c0caf5]/40"> / </span>
            <span className="text-[#9ece6a]">{name}</span>
          </div>

          <p className="font-mono text-[#c0caf5] text-sm leading-relaxed mb-auto">
            {description}
          </p>

        </div>
      </div>

      {/* Bottom info area */}
      <div className="p-6 pt-2">
        <h3 className="font-mono text-xl mb-3 text-[#c0caf5]">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </h3>

        <p className="font-mono text-sm text-[#c0caf5]/60 mb-6 line-clamp-2">
          {fullDescription}
        </p>

        <div className="flex flex-wrap gap-2">
          <Tag size={14} className="text-[#c0caf5]/40 mt-1" />
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded bg-[#414868]/30 text-[#7aa2f7] font-mono text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const FeaturedProjects = () => {
  return (
    <section id="projects" className="px-6 py-12 md:px-12 lg:px-24">
      <div className="flex items-center justify-between mb-10">
        <h2 className="font-mono text-2xl md:text-3xl flex items-center gap-3">
          <Star className="text-[#ff9e64]" fill="currentColor" />
          Featured Projects
        </h2>

        <a
          href="#"
          className="font-mono text-[#ff9e64]/60 hover:text-[#ff9e64] text-sm flex items-center gap-1 border-b border-[#ff9e64]/20"
        >
          View all <ExternalLink size={12} />
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-7xl">
        {projects.map((project, i) => (
          project.featured && <ProjectCard key={i} {...project} />
        ))}
      </div>
    </section>
  );
};
