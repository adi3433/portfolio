import React from 'react';
import { Experience } from '../types';

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="group card flex flex-col sm:flex-row gap-4 p-4 rounded-lg border border-transparent transition-all duration-300 hover:!border-teal-400/20 hover:bg-slate-800/50">
      <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 sm:w-1/4 pt-1">
        {experience.period}
      </div>
      <div className="sm:w-3/4">
        <h3 className="font-bold text-slate-200 text-lg card-title transition-colors">
          {experience.role} · {experience.company}
        </h3>
        <ul className="mt-2 space-y-2 text-slate-400 list-disc list-inside text-sm">
          {experience.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 mt-4">
          {experience.technologies.map((tech) => (
            <span key={tech} className="bg-teal-400/10 text-teal-300 text-xs font-medium px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
