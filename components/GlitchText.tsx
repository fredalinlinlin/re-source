import React from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '' }) => {
  return (
    <div className={`relative inline-block ${className} group`}>
      {/* Main Text */}
      <span className="relative z-10 text-[#e0e0e0] drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">{text}</span>
      
      {/* Glitch Layer 1 */}
      <span 
        className="absolute top-0 left-[2px] w-full h-full text-[#a0a0a0] z-0 opacity-75 animate-glitch-1 hidden group-hover:block"
        style={{ textShadow: '-2px 0 #fff' }}
        aria-hidden="true"
      >
        {text}
      </span>

      {/* Glitch Layer 2 */}
      <span 
        className="absolute top-0 -left-[2px] w-full h-full text-[#808080] z-0 opacity-75 animate-glitch-2 hidden group-hover:block"
        style={{ textShadow: '2px 0 #555' }}
        aria-hidden="true"
      >
        {text}
      </span>
    </div>
  );
};

export default GlitchText;