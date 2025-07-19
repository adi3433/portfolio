import { useState, useEffect } from 'react';

const useTypewriter = (text: string, speed: number = 50, startDelay: number = 0) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    // Reset the state whenever the input text changes
    setDisplayText('');
    setIsTyping(true);
    let timeoutId: NodeJS.Timeout;

    // A recursive function to handle the typing
    const typeCharacter = (currentIndex: number) => {
      // Stop if we've typed the whole string
      if (currentIndex >= text.length) {
        setIsTyping(false);
        return;
      }

      // Add the next character
      setDisplayText(prev => prev + text.charAt(currentIndex));

      // Schedule the next character to be typed
      timeoutId = setTimeout(() => {
        typeCharacter(currentIndex + 1);
      }, speed);
    };

    // Initial timer to respect the startDelay
    const initialDelayId = setTimeout(() => {
      typeCharacter(0); // Start typing from the first character
    }, startDelay);
    

    // --- Cleanup Function ---
    // This is crucial. It runs when the component unmounts or when the 'text' prop changes.
    // It clears any pending timeouts to prevent memory leaks and bugs.
    return () => {
      clearTimeout(initialDelayId);
      clearTimeout(timeoutId);
    };
    
  }, [text, speed, startDelay]);

  return { displayText, isTyping };
};

export default useTypewriter;