import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CaesarCipher from './components/CaesarCipher';
import AboutMe from './components/AboutMe';
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon, HomeIcon, UserIcon } from 'lucide-react';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <header className="pt-6 pb-4 px-4">
          <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Caesar Cipher
            </h1>
            <div className="flex gap-4">
              <Link 
                to="/" 
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <HomeIcon size={20} />
                <span className="hidden md:inline">Home</span>
              </Link>
              <Link 
                to="/about" 
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <UserIcon size={20} />
                <span className="hidden md:inline">About Me</span>
              </Link>
            </div>
          </nav>
          <p className="mt-2 text-center text-gray-400">Encrypt and decrypt messages using the classic Caesar Cipher algorithm</p>
        </header>
        
        <main className="container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<CaesarCipher />} />
            <Route path="/about" element={<AboutMe />} />
          </Routes>
        </main>

        <footer className="mt-12 py-6 bg-gray-900/60 border-t border-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold text-cyan-400">P Ganesh Krishna Reddy</h3>
                <p className="text-gray-400 mt-1">Cybersecurity Enthusiast</p>
              </div>
              
              <div className="flex space-x-4">
                <a href="https://linkedin.com/in/pganeshkrishnareddy" target="_blank" rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <LinkedinIcon size={20} />
                </a>
                <a href="https://github.com/ganeshkrishnareddy" target="_blank" rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <GithubIcon size={20} />
                </a>
                <a href="mailto:pganeshkrishnareddy@gmail.com" 
                  className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <MailIcon size={20} />
                </a>
                <a href="tel:+918374622779" 
                  className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <PhoneIcon size={20} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;