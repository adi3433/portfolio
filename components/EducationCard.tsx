
import React from 'react';
import { Education } from '../types';

interface EducationCardProps {
  education: Education;
}

const EducationCard: React.FC<EducationCardProps> = ({ education }) => {
  return (
    <div className="group card flex flex-col sm:flex-row gap-4 p-4 rounded-lg border border-transparent transition-all duration-300 hover:!border-teal-400/20 hover:bg-slate-800/50">
      <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 sm:w-1/4 pt-1">
        {education.period}
      </div>
      <div className="sm:w-3/4">
        <h3 className="font-bold text-slate-200 text-lg card-title transition-colors">
          {education.degree}
        </h3>
        <p className="text-slate-400">{education.institution}</p>
        <ul className="mt-2 text-sm text-slate-400 list-disc list-inside">
          {education.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EducationCard;
