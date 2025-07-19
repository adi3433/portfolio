import { useState, useEffect, useRef } from 'react';

const useScrollSpy = (sectionIds: string[]): string | null => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    // A map to store the elements to avoid repeated getElementById calls
    const elements = new Map(sectionIds.map(id => [id, document.getElementById(id)]));

    observer.current = new IntersectionObserver(
      (entries) => {
        // Find the entry that is intersecting the most at the top of the viewport
        const intersectingEntries = entries.filter(e => e.isIntersecting);
        if (intersectingEntries.length > 0) {
            // Sort by which is closest to the top of the viewport
            intersectingEntries.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
            setActiveSection(intersectingEntries[0].target.id);
        }
      },
      // Adjust rootMargin to define the "active" zone in the viewport.
      // e.g., "-25% 0px -75% 0px" means the active line is 25% from the top.
      { rootMargin: '-40% 0px -60% 0px', threshold: 0 }
    );

    const currentObserver = observer.current;

    elements.forEach((element) => {
      if (element) {
        currentObserver.observe(element);
      }
    });

    return () => {
      if (currentObserver) {
        currentObserver.disconnect();
      }
    };
  }, [sectionIds]);

  return activeSection;
};

export default useScrollSpy;
