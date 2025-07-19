import React from 'react';
import { resumeData } from '../constants';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navItems = [
  { id: 'home', title: 'Home' },
  { id: 'skills', title: 'Skills' },
  { id: 'experience', title: 'Experience' },
  { id: 'projects', title: 'Projects' },
  { id: 'education', title: 'Education' },
];

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  // A dummy CV link. In a real app, this would point to the actual file.
  const cvUrl = "/Adithyan_Nair_Resume.pdf";

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/50 backdrop-blur-md border-b border-slate-800 z-30">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
             <button onClick={() => onNavigate('home')} className="text-xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
              {resumeData.name}
            </button>
          </div>
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'bg-slate-800 text-cyan-300'
                    : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                }`}
              >
                {item.title}
              </button>
            ))}
          </nav>
          <div className="flex items-center">
             <a
              href={cvUrl}
              download="Adithyan_Nair_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-cyan-500 text-white text-sm font-semibold rounded-md hover:bg-cyan-600 transition-colors shadow-lg shadow-cyan-500/10"
            >
              Download CV
            </a>
            {/* Add a mobile menu button here if needed in the future */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;