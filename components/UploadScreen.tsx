import React, { useRef, useState } from 'react';

interface UploadScreenProps {
  onStart: (img: string) => void;
}

const UploadScreen: React.FC<UploadScreenProps> = ({ onStart }) => {
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        if (ev.target?.result) {
          setPreview(ev.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col h-full animate-fadeIn">
      <div className="flex justify-between text-xs sm:text-sm text-[#888] border-b border-[#333] pb-2 mb-4 tracking-widest">
        <span>STEP: 身份同步</span>
        <span>STATUS: WAITING</span>
      </div>
      
      <div className="text-center text-[#ccc] mb-6 text-sm sm:text-base leading-relaxed">
        請上傳一張照片以建立神經連結。<br />
        <span className="text-xs text-[#666] font-mono">(此照片將用於生成你的數位化身)</span>
      </div>

      <input 
        type="file" 
        ref={fileInputRef} 
        accept="image/*" 
        className="hidden" 
        onChange={handleFileChange} 
      />
      
      <div 
        onClick={() => fileInputRef.current?.click()}
        className="border border-dashed border-[#666] rounded-sm h-[250px] sm:h-[300px] flex flex-col justify-center items-center cursor-pointer transition-all duration-300 hover:bg-[#151515] hover:border-[#fff] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] relative overflow-hidden bg-[#0c0c0c] mb-6 group"
      >
        {preview ? (
          <img src={preview} alt="Preview" className="w-full h-full object-contain" />
        ) : (
          <div className="text-center group-hover:scale-105 transition-transform">
            <div className="text-6xl text-[#444] group-hover:text-[#e0e0e0] mb-4 font-thin">+</div>
            <div className="text-[#666] group-hover:text-[#e0e0e0] tracking-widest text-sm">點擊拍攝或上傳</div>
          </div>
        )}
      </div>

      <button 
        onClick={() => preview && onStart(preview)}
        disabled={!preview}
        className={`mt-auto w-full py-4 text-black font-bold text-lg font-mono transition-all duration-300 uppercase tracking-[0.2em] border border-[#666]
          ${preview 
            ? 'bg-gradient-to-r from-[#888] via-[#e0e0e0] to-[#888] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] cursor-pointer' 
            : 'bg-[#1a1a1a] text-[#444] border-[#333] cursor-not-allowed'}`}
      >
        開始同步並進入廢墟
      </button>
    </div>
  );
};

export default UploadScreen;