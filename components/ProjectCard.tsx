import React from 'react';
import { Project } from '../types';
import GitHubIcon from './icons/GitHubIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon';


interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
     <div className="group card flex flex-col sm:flex-row gap-4 p-4 rounded-lg border border-transparent transition-all duration-300 hover:!border-teal-400/20 hover:bg-slate-800/50">
        <div className="sm:w-full">
            <header className="flex justify-between items-baseline mb-2">
                <h3 className="font-bold text-slate-200 text-lg card-title transition-colors">
                    {project.name}
                </h3>
                <div className="flex items-center gap-4 text-slate-400">
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} on GitHub`} className="hover:text-teal-300 transition-colors">
                            <GitHubIcon className="w-5 h-5"/>
                        </a>
                    )}
                    {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Live demo of ${project.name}`} className="hover:text-teal-300 transition-colors">
                            <ExternalLinkIcon className="w-5 h-5"/>
                        </a>
                    )}
                </div>
            </header>
            <p className="text-slate-400 text-sm">{project.description}</p>
            {project.details && (
                <ul className="mt-2 space-y-1 text-sm text-slate-400 list-disc list-inside">
                    {project.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                    ))}
                </ul>
            )}
            <div className="flex flex-wrap gap-2 mt-4">
            {project.technologies.map((tech) => (
                <span key={tech} className="bg-teal-400/10 text-teal-300 text-xs font-medium px-3 py-1 rounded-full">
                {tech}
                </span>
            ))}
            </div>
        </div>
    </div>
  );
};

export default ProjectCard;
