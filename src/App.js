import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Add more routes as you create more pages */}
            {/* <Route path="/about" element={<AboutPage />} /> */}
            {/* <Route path="/programs" element={<ProgramsPage />} /> */}
            {/* <Route path="/donate" element={<DonatePage />} /> */}
            {/* <Route path="/blogs" element={<BlogsPage />} /> */}
            {/* <Route path="/contact" element={<ContactPage />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;