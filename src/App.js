import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col md:flex-row min-h-screen bg-gray-900 text-white">
        {/* Sidebar will be full-width on mobile and fixed-width on desktop */}
        <div className="w-full md:w-64 bg-gray-800">
          <Sidebar />
        </div>

        {/* Main content adjusts to screen size */}
        <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
