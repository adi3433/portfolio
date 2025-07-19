import React from 'react';
import useScrollSpy from '../hooks/useScrollSpy';

interface NavigationProps {
    sections: {id: string, title: string}[];
}

const Navigation: React.FC<NavigationProps> = ({ sections }) => {
    const sectionIds = sections.map(s => s.id);
    const activeSection = useScrollSpy(sectionIds);

    return (
        <ul className="w-max">
            {sections.map(section => (
                <li key={section.id}>
                    <a 
                        href={`#${section.id}`} 
                        className={`group nav-link flex items-center py-3 ${activeSection === section.id ? 'active' : ''}`}
                    >
                        <span className="nav-line mr-4 h-px w-8 bg-slate-600"></span>
                        <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500">
                            {section.title}
                        </span>
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default Navigation;
