import React from "react"

export default function AboutMe() {
  return (
    <section className="mt-24 px-6">
      <div className="mx-auto max-w-4xl rounded-xl bg-[#141625] p-10 text-gray-300 shadow-lg">
        {/* Heading */}
        <h1 className="mb-4 text-3xl font-semibold tracking-tight text-white">
          Hey! I'm{" "}
          <span className="text-[#F8B286]">Salah</span>
        </h1>

        {/* Description */}
        <p className="mb-4 leading-relaxed text-gray-400">
          I'm a software developer focused on building performant,
          intuitive applications across the web and backend systems. Seeing 
          code I wrote actually help people at scale is what keeps me building.
        </p>

        <p className="mb-6 leading-relaxed text-gray-400">
          I've worked on projects spanning{" "}
          <span className="text-[#F8B286]">
            financial analytics, automation tools, and developer platforms
          </span>
          . I’m driven by solving real problems and building systems that scale
          with clarity and purpose.
        </p>

        {/* Links */}
        <div className="mb-8 flex flex-wrap gap-4 text-sm">
          <a
            href="https://github.com/salahs2"
            className="flex items-center gap-1 hover:text-white transition"
          >
            GitHub
          </a>
          <span className="text-gray-600">|</span>
          <a
            href="https://linkedin.com/in/salahsalah"
            className="flex items-center gap-1 hover:text-white transition"
          >
            LinkedIn
          </a>
          <span className="text-gray-600">|</span>
          <a
            href="/about"
            className="flex items-center gap-1 hover:text-white transition"
          >
            More about me →
          </a>
        </div>

        {/* Affiliations / Experience Footer */}
        <div className="flex flex-wrap items-center gap-6 text-xs text-gray-500">
          <span className="flex items-center gap-2">
            <span className="text-[#F8B286]">$</span> Fidelity
          </span>
          <span>/</span>
          <span>HOOPP (Past)</span>
          <span>/</span>
          <span>McMaster University</span>
        </div>
      </div>
    </section>
  )
}
