import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  
  return (
    <header className="bg-dark-800 bg-opacity-90 backdrop-blur-sm sticky top-0 z-10 border-b border-dark-700">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-xl font-semibold">
          <Code size={24} className="text-accent" />
          <span className="bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
            isuckat.dev
          </span>
        </Link>
        
        <nav className="flex gap-2">
          <Link 
            to="/" 
            className={`nav-link transition-colors ${location.pathname === '/' ? 'text-accent' : 'text-white hover:text-accent'}`}
          >
            Home
          </Link>
          <Link 
            to="/links" 
            className={`nav-link transition-colors ${location.pathname === '/links' ? 'text-accent' : 'text-white hover:text-accent'}`}
          >
            Links
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;