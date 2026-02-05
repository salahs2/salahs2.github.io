import { useLocation } from "react-router-dom"

export default function Navbar() {
    const location = useLocation()

    const path = location.pathname === "/" ? '/home' : location.pathname

    return (
    <nav className="w-full border-b border-gray-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Route + Cursor */}
        <div className="flex items-center font-mono text-lg">
          <span className="mr-1 text-[#F8B286]">&gt;</span>
          <span className="">{path}</span>
          <span className="ml-0.5 animate-blink text-[#F8B286]">▍</span>
        </div>

        {/* Links */}
        <ul className="flex gap-6 text-lg font-medium">
          <li><a href="/" className="hover:text-gray-600">Home</a></li>
          <li><a href="/projects" className="hover:text-gray-600">Projects</a></li>
          <li><a href="/experience" className="hover:text-gray-600">Experience</a></li>
          <li><a href="/contact" className="hover:text-gray-600">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

