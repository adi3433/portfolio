import React from 'react';
import { resumeData } from '../constants';
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import CodeforcesIcon from './icons/CodeforcesIcon';
import Navigation from './Navigation';

interface LeftPanelProps {
    data: typeof resumeData;
    sections: {id: string; title: string}[];
}

const LeftPanel: React.FC<LeftPanelProps> = ({ data, sections }) => {
  return (
    <aside className="w-full lg:w-1/2 lg:h-screen lg:sticky lg:top-0 lg:flex lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-100 tracking-tight">{data.name}</h1>
        <p className="mt-3 text-lg font-medium text-slate-200">{data.title}</p>
        
        <nav className="hidden lg:block mt-16" aria-label="In-page-navigation">
            <Navigation sections={sections} />
        </nav>
      </div>

      <div className="flex items-center gap-4 mt-8 lg:mt-0">
          <a href={data.socials.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-100 transition-colors" aria-label="GitHub">
            <GitHubIcon className="w-6 h-6" />
          </a>
          <a href={data.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-100 transition-colors" aria-label="LinkedIn">
            <LinkedInIcon className="w-6 h-6" />
          </a>
          <a href={data.socials.codeforces} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-100 transition-colors" aria-label="Codeforces">
            <CodeforcesIcon className="w-6 h-6" />
          </a>
      </div>
    </aside>
  );
};

export default LeftPanel;
