
import React from 'react';
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import CodeforcesIcon from './icons/CodeforcesIcon';

interface FooterProps {
    socials: {
        github: string;
        linkedin: string;
        codeforces: string;
    };
}

const Footer: React.FC<FooterProps> = ({ socials }) => {
    return (
        <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
            <p>
                Coded in <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300">Visual Studio Code</a>. 
                Built with <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300">React</a> and <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300">Tailwind CSS</a>, 
                and deployed with Vercel. All text is set in the Inter typeface.
            </p>
            <div className="flex items-center gap-4 mt-6 lg:hidden">
              <a href={socials.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-100 transition-colors" aria-label="GitHub">
                <GitHubIcon className="w-6 h-6" />
              </a>
              <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-100 transition-colors" aria-label="LinkedIn">
                <LinkedInIcon className="w-6 h-6" />
              </a>
              <a href={socials.codeforces} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-100 transition-colors" aria-label="Codeforces">
                <CodeforcesIcon className="w-6 h-6" />
              </a>
            </div>
        </footer>
    );
};

export default Footer;
