
import React from 'react';

const CodeforcesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0-2.25a6.75 6.75 0 1 0 0-13.5 6.75 6.75 0 0 0 0 13.5z" fill="currentColor"></path>
      <path d="M12 9a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 12 9z" fill="currentColor"></path>
      <path d="M9 12a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 9 12z" fill="currentColor"></path>
    </g>
  </svg>
);

export default CodeforcesIcon;
