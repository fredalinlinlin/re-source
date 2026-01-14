import React, { useEffect, useState } from 'react';

interface ProcessingScreenProps {
  charId: string;
  onComplete: () => void;
}

const ProcessingScreen: React.FC<ProcessingScreenProps> = ({ charId, onComplete }) => {
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    const messages = [
      "正在分析神經連結...",
      `偵測到靈魂特質: [${charId}]`,
      "正在連接 ComfyUI 節點...",
      "Loading LoRA: Future_Chrome_v9...",
      "生成大頭貼...",
      "合成場景..."
    ];

    let i = 0;
    const interval = setInterval(() => {
      if (i < messages.length) {
        setLogs(prev => [...prev, messages[i]]);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 1000);
      }
    }, 800);

    return () => clearInterval(interval);
  }, [charId, onComplete]);

  return (
    <div className="flex flex-col items-center justify-center h-full animate-fadeIn text-center">
      <div className="w-[80px] h-[80px] relative mb-10">
         <div className="absolute inset-0 border-4 border-[#333] rounded-full"></div>
         <div className="absolute inset-0 border-4 border-t-[#e0e0e0] border-r-[#e0e0e0] border-b-transparent border-l-transparent rounded-full animate-spin shadow-[0_0_15px_rgba(255,255,255,0.2)]"></div>
      </div>
      
      <div className="text-xl text-[#e0e0e0] mb-6 font-mono tracking-[0.2em] uppercase drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
        重組原創數據中
      </div>
      
      <div className="font-mono text-xs text-[#888] text-left w-full max-w-[320px] h-[160px] overflow-hidden border border-[#222] p-4 bg-[#080808]">
        {logs.map((log, idx) => (
          <div key={idx} className="mb-2 border-l border-[#444] pl-2">{`> ${log}`}</div>
        ))}
        <div className="animate-blink inline-block w-2 h-4 bg-[#666] align-middle ml-2"></div>
      </div>
    </div>
  );
};

export default ProcessingScreen;