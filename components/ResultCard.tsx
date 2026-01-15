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
  
  // Specific images for the two states
  const avatarUrl = "./result_card_example.png";
  const sceneUrl = "./scenario_card_example.png";
  const currentImageUrl = isAvatar ? avatarUrl : sceneUrl;

  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = currentImageUrl;
    link.download = `RE_SOURCE_${isAvatar ? 'RESULT' : 'SCENARIO'}_${charId}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="h-full flex flex-col bg-[#050505] relative overflow-hidden animate-fadeIn border-t border-[#333] shadow-[0_0_30px_rgba(255,255,255,0.05)] w-full">
      
      {/* 3D Card Container */}
      <div className="flex-grow relative w-full overflow-hidden bg-[#0a0a0a] flex items-center justify-center perspective-container py-4">
         {/* Subtle Grid Background */}
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

         {/* 
            Card Wrapper Sizing Logic:
            - h-[60vh] / md:h-[70vh] constraints.
            - aspect-[9/16] lock.
         */}
         <div id="card-wrapper" className="card-3d relative h-[60vh] md:h-[70vh] w-auto aspect-[9/16] rounded-lg overflow-hidden bg-black border border-[#444] shadow-2xl">
             
             {/* Base Image Layer (Z-10) */}
             <img 
                src={currentImageUrl} 
                alt={isAvatar ? "Result Card" : "Scenario Card"} 
                className="w-full h-full object-cover relative z-10 block"
                onError={(e) => {
                  console.warn("Image load failed:", currentImageUrl);
                  const target = e.target as HTMLImageElement;
                  target.onerror = null; 
                  target.src = `https://placehold.co/1080x1920/222/aaa?text=${isAvatar ? 'Missing+Img' : 'Missing+Img'}`;
                }}
             />
             
             {/* Holographic Overlay Layer (Z-20) */}
             <div className="holo-overlay absolute inset-0 z-20 pointer-events-none"></div>
             
             {/* Border/Highlight Layer (Z-30) */}
             <div className="absolute inset-0 border border-[#ffffff44] rounded-lg pointer-events-none z-30"></div>
         </div>
      </div>

      {/* Action Button Area */}
      <div className="w-full p-4 pb-12 sm:pb-6 bg-[#050505] border-t border-[#333] relative z-40 flex gap-3 shadow-[0_-5px_20px_rgba(0,0,0,0.8)] max-w-4xl mx-auto shrink-0">
        <button 
          onClick={downloadImage}
          className="flex-1 py-4 bg-[#111] text-[#888] font-bold font-mono text-sm tracking-widest border border-[#333] hover:bg-[#222] hover:text-[#fff] transition-all duration-300 active:scale-[0.98]"
        >
          下載
        </button>

        <button 
          onClick={isAvatar ? onNext : onRestart}
          className="flex-[2] py-4 bg-gradient-to-r from-[#4b5563] via-[#d1d5db] to-[#4b5563] text-black font-bold font-mono text-base tracking-[0.2em] transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] hover:brightness-110 active:scale-[0.99] border border-[#9ca3af]"
        >
          {isAvatar ? '下一頁 >>' : 'RESTART'}
        </button>
      </div>
      
      {/* Dev Info */}
      <div className="absolute top-4 right-4 text-[10px] text-[#555] font-mono tracking-widest pointer-events-none opacity-50">
        ID: {charId}
      </div>
    </div>
  );
};

export default ResultCard;