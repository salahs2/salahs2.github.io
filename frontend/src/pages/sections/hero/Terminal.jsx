import { useRef, useState } from "react"

const Terminal = ({ onClose }) => {
  const terminalRef = useRef(null)

  const [position, setPosition] = useState({ x: 100, y: 80 })
  const [dragging, setDragging] = useState(false)
  const dragOffset = useRef({ x: 0, y: 0 })

  const onMouseDown = (e) => {
    setDragging(true)
    dragOffset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    }
  }

  const onMouseMove = (e) => {
    if (!dragging) return

    setPosition({
      x: e.clientX - dragOffset.current.x,
      y: e.clientY - dragOffset.current.y,
    })
  }

  const onMouseUp = () => {
    setDragging(false)
  }

  return (
    <div
      ref={terminalRef}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      className="absolute w-full max-w-4xl cursor-default select-none overflow-hidden rounded-lg border border-gray-700 bg-[#0c0c0c] font-mono text-sm text-gray-200 shadow-xl animate-fadeIn"
    >
      {/* Title bar (drag handle) */}
      <div
        onMouseDown={onMouseDown}
        className="flex items-center justify-between bg-[#1f1f1f] px-4 py-2 text-xs text-gray-400 cursor-move"
      >
        <span>Windows Terminal</span>

        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-gray-500" />
          <span className="h-3 w-3 rounded-full bg-gray-500" />
          <button
            onClick={onClose}
            className="h-3 w-3 rounded-full cursor-pointer bg-red-500 hover:bg-red-400 transition"
            aria-label="Close terminal"
          />
        </div>
      </div>

      {/* Terminal body */}
      <div className="p-6 leading-relaxed">
        <p>
          <span className="text-[#F8B286]">PS C:\Users\name&gt;</span> whoami
        </p>
        <p className="mt-1">name — software engineer</p>

        <br />

        <p>
          <span className="text-[#F8B286]">PS C:\Users\name&gt;</span> cat skills.txt
        </p>
        <ul className="ml-4 mt-1 list-disc">
          <li>React / TypeScript</li>
          <li>Python / Data Engineering</li>
          <li>APIs, Systems, Cloud</li>
        </ul>

        <br />

        <p>
          <span className="text-[#F8B286]">PS C:\Users\name&gt;</span>
          <span className="ml-1 animate-blink text-[#F8B286]">▍</span>
        </p>
      </div>
    </div>
  )
}

export default Terminal
