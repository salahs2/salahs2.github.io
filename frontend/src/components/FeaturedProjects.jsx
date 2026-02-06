import React from "react"
import { projects } from "../data/projectsData.js"

export default function FeaturedProjects() {
  const featuredProjects = projects.filter(p => p.featured)

  return (
    <section className="mt-24 px-6">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <h2 className="mb-8 text-2xl font-semibold text-white">
          <span className="text-[#F8B286]">&gt;</span> Featured Projects
        </h2>

        {/* Projects */}
        <div className="space-y-6">
          {featuredProjects.map(project => (
            <div
              key={project.id}
              className="rounded-lg border border-white/10 bg-[#0f111a] p-6 hover:border-[#F8B286]/40 transition"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-medium text-white">
                  {project.title}
                </h3>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-gray-400 hover:text-[#F8B286] transition"
                  >
                    view →
                  </a>
                )}
              </div>

              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                {project.tech.map(tech => (
                  <span
                    key={tech}
                    className="rounded bg-white/5 px-2 py-1 text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer link */}
        <div className="mt-8 text-sm text-gray-400">
          <a
            href="/projects"
            className="hover:text-white transition"
          >
            View all projects →
          </a>
        </div>
      </div>
    </section>
  )
}
