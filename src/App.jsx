import { Routes, Route, BrowserRouter } from 'react-router';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#1a1b26] text-[#c0caf5] selection:bg-[#ff9e64]/30 selection:text-[#ff9e64]">
        {/* Subtle background effects */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#7aa2f7]/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#ff9e64]/5 blur-[120px] rounded-full" />
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
