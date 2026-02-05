import { useState } from "react"
import Terminal from "./Terminal"
import OpenTerminalButton from "./OpenTerminalButton"

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {!isOpen ? (
        <OpenTerminalButton onClick={() => setIsOpen(true)} />
      ) : (
        <Terminal onClose={() => setIsOpen(false)} />
      )}
    </section>
  )
}

export default Hero
