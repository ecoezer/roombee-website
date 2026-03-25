import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Actions from './pages/Actions';
import Services from './pages/Services';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-zinc-900">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ueber-uns" element={<About />} />
            <Route path="/aktionen" element={<Actions />} />
            <Route path="/service" element={<Services />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
