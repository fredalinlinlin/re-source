import React from 'react';

interface HeaderProps {
  progress: number;
}

const Header: React.FC<HeaderProps> = ({ progress }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between border-b border-dashed border-[#808080] pb-2 mb-5 text-sm sm:text-base text-[#c0c0c0] font-mono gap-2">
      <span>SYS.DATE: 2046.11.08</span>
      <span>LOC: SERVER_RUINS_LAYER_0</span>
      <div className="flex items-center gap-2">
        <span>SYNC_RATE:</span>
        <div className="w-[100px] h-[10px] border border-[#c0c0c0] relative bg-[#222]">
          <div 
            className="h-full bg-gradient-to-r from-[#808080] to-[#e0e0e0] transition-all duration-300 ease-out" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;