import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 20, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText('');
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(interval);
        if (onComplete) onComplete();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, onComplete]);

  return (
    <div className="whitespace-pre-wrap leading-relaxed relative text-[#d1d1d1]">
      {displayedText}
      <span className="inline-block w-[10px] h-[1.2em] bg-[#c0c0c0] animate-blink align-text-bottom ml-1 shadow-[0_0_8px_#ffffff]"></span>
    </div>
  );
};

export default Typewriter;