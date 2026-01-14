import React from 'react';
import { Character } from '../types';

interface ResultCardProps {
  view: 'avatar' | 'scene';
  character: Character;
  charId: string;
  onNext?: () => void;
  onRestart?: () => void;
}

const ResultCard: React.FC<ResultCardProps> = ({ view, character, charId, onNext, onRestart }) => {
  const isAvatar = view === 'avatar';
  
  // Using the requested example images for all results as placeholders
  const avatarUrl = "./result_card_example.png";
  const sceneUrl = "./scenario_card_example.png";

  return (
    <div className="h-full flex flex-col bg-[#050505] relative overflow-hidden animate-fadeIn border border-[#333] shadow-[0_0_30px_rgba(255,255,255,0.05)]">
      
      {/* Full Screen Image Display */}
      <div className="flex-grow relative w-full overflow-hidden bg-[#0a0a0a] flex items-center justify-center group">
         {/* Subtle Grid Background */}
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

         <img 
            src={isAvatar ? avatarUrl : sceneUrl} 
            alt={isAvatar ? "Result Card" : "Scenario Card"} 
            className="w-full h-full object-contain relative z-10 drop-shadow-[0_10px_20px_rgba(0,0,0,1)] transition-transform duration-700 group-hover:scale-[1.02]"
            onError={(e) => {
              // Fallback if local image is not found
              const target = e.target as HTMLImageElement;
              target.onerror = null; // Prevent infinite loop
              target.src = `https://placehold.co/1080x1920/222/aaa?text=${isAvatar ? 'Missing+Img:result_card_example.png' : 'Missing+Img:scenario_card_example.png'}`;
            }}
         />
      </div>

      {/* Action Button Area - Metallic Style */}
      {/* Increased bottom padding (pb-16) for mobile safety area */}
      <div className="w-full p-5 pb-16 sm:pb-5 bg-[#050505] border-t border-[#333] relative z-20">
        <button 
          onClick={isAvatar ? onNext : onRestart}
          className="w-full py-4 bg-gradient-to-r from-[#4b5563] via-[#d1d5db] to-[#4b5563] text-black font-bold font-mono text-base tracking-[0.2em] transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] hover:brightness-110 active:scale-[0.99] border border-[#9ca3af]"
        >
          {isAvatar ? '查看場景 (SCENARIO) >>' : '重新連線 (RESTART)'}
        </button>
      </div>
      
      {/* Dev Info (Minimalist) */}
      <div className="absolute top-4 right-4 text-[10px] text-[#555] font-mono tracking-widest pointer-events-none">
        ID: {charId} // {isAvatar ? 'RES' : 'SCN'}
      </div>
    </div>
  );
};

export default ResultCard;