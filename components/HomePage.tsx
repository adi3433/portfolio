import React from 'react';
import { resumeData } from '../constants';
import useTypewriter from '../hooks/useTypewriter';
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import CodeforcesIcon from './icons/CodeforcesIcon';

interface HomePageProps {
    onNavigate: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  // --- CHANGE: Updated the profile image URL ---
  const profileImageUrl = '/dp.jpg';
  
  const { displayText: nameText, isTyping: isTypingName } = useTypewriter(resumeData.name, 70, 500);

  // --- CHANGE: Reverted to using resumeData.title now that the hook is fixed ---
  const { displayText: titleText, isTyping: isTypingTitle } = useTypewriter(
    resumeData.title, 
    50, 
    500 + resumeData.name.length * 70 + 200
  );

  return (
    <div className="min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center text-center">
      <div className="relative mb-6">
        <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-slate-700 profile-glow">
          <img src={profileImageUrl} alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>

      <h1 className="text-4xl sm:text-5xl font-bold text-slate-100 tracking-tight flex items-center justify-center min-h-[4rem]">
        {nameText}
        {(isTypingName || isTypingTitle) && <span className="typewriter-cursor"></span>}
      </h1>
      <p className="mt-3 text-lg sm:text-xl text-cyan-400 min-h-[2rem]">
        {!isTypingName && titleText}
      </p>

      <div className="flex items-center gap-6 mt-8">
        <a href={resumeData.socials.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-transform hover:scale-110" aria-label="GitHub">
          <GitHubIcon className="w-8 h-8" />
        </a>
        <a href={resumeData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-transform hover:scale-110" aria-label="LinkedIn">
          <LinkedInIcon className="w-8 h-8" />
        </a>
        <a href={resumeData.socials.codeforces} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-transform hover:scale-110" aria-label="Codeforces">
          <CodeforcesIcon className="w-8 h-8" />
        </a>
      </div>
       <button 
        onClick={() => onNavigate('skills')}
        className="mt-12 px-6 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 font-semibold rounded-md hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
       >
        Explore My Work
      </button>
    </div>
  );
};

export default HomePage;