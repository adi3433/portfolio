import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-slate-100 mb-8 tracking-tight">
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
};

export default Section;
