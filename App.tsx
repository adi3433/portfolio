
import React, { useState } from 'react';
import { resumeData } from './constants';
import Header from './components/Header';
import HomePage from './components/HomePage';
import AnimatedWrapper from './components/AnimatedWrapper';
import Section from './components/Section';
import ExperienceCard from './components/ExperienceCard';
import ProjectCard from './components/ProjectCard';
import EducationCard from './components/EducationCard';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'skills':
        return (
          <Section title="Skills">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {resumeData.skills.map((category) => (
                <div key={category.title} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                  <h3 className="text-lg font-bold text-teal-300 mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.skills.map(skill => (
                      <li key={skill} className="text-slate-300">{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>
        );
      case 'experience':
        return (
          <Section title="Work Experience">
            <div className="space-y-8">
              {resumeData.experience.map((exp, i) => (
                <ExperienceCard key={i} experience={exp} />
              ))}
            </div>
          </Section>
        );
      case 'projects':
         return (
          <Section title="Projects">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resumeData.projects.map((proj, i) => (
                <ProjectCard key={i} project={proj} />
              ))}
            </div>
          </Section>
        );
      case 'education':
        return (
          <Section title="Education">
            <div className="space-y-6">
                {resumeData.education.map((edu, i) => (
                  <EducationCard key={i} education={edu} />
                ))}
            </div>
          </Section>
        );
      case 'home':
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="relative z-10">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <AnimatedWrapper>
          {renderPage()}
        </AnimatedWrapper>
      </main>
      <ChatWidget />
    </div>
  );
};

export default App;
