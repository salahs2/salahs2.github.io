const OpenTerminalButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-3 rounded-md cursor-pointer border border-gray-600 bg-[#1a1a1a] px-6 py-3 font-mono text-sm text-gray-200 shadow-md transition hover:bg-[#222] hover:border-gray-500"
    >
      <span className="text-[#F8B286]">&gt;_</span>
      <span>Open Terminal</span>
    </button>
  )
}

export default OpenTerminalButton
