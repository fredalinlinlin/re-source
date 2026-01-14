import React, { useState, useRef, useEffect } from 'react';
import { scenes, characters, calculateCharacterID } from './data';
import { GameScores, Option } from './types';
import Typewriter from './components/Typewriter';
import GlitchText from './components/GlitchText';
import UploadScreen from './components/UploadScreen';
import ProcessingScreen from './components/ProcessingScreen';
import ResultCard from './components/ResultCard';

type GameState = 'INTRO' | 'UPLOAD' | 'GAME' | 'PROCESSING' | 'RESULT_AVATAR' | 'RESULT_SCENE';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>('INTRO');
  const [currentSceneId, setCurrentSceneId] = useState<string>('start');
  const [scores, setScores] = useState<GameScores>({ Q2: '', Q3: '', Q4: '', Final: '' });
  const [pathStep, setPathStep] = useState(0);
  const [userImage, setUserImage] = useState<string | null>(null);
  const [showOptions, setShowOptions] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const currentScene = scenes[currentSceneId];
  
  // Scroll to bottom when content changes in Game
  useEffect(() => {
    if (gameState === 'GAME' && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [currentSceneId, showOptions, gameState]);

  const handleStartGame = (img: string) => {
    setUserImage(img);
    setGameState('GAME');
    setPathStep(0);
    setCurrentSceneId('start');
    setScores({ Q2: '', Q3: '', Q4: '', Final: '' });
  };

  const handleOptionClick = (option: Option) => {
    // Logic Mapping
    const newScores = { ...scores };
    if (['E', 'I'].includes(option.type)) newScores.Q2 = option.type;
    if (['T', 'F'].includes(option.type)) newScores.Q3 = option.type;
    if (['Ladder', 'Core'].includes(option.type)) newScores.Q4 = option.type;
    if (option.next === 'end') newScores.Final = option.type;
    
    setScores(newScores);
    setPathStep(prev => prev + 1);

    if (option.next === 'end') {
      setGameState('PROCESSING');
    } else {
      setShowOptions(false);
      setCurrentSceneId(option.next);
    }
  };

  const charId = calculateCharacterID(scores);
  const progress = Math.min((pathStep / 5) * 100, 100);

  return (
    <div className="font-mono min-h-screen flex items-center justify-center p-0 sm:p-4 relative bg-[#050505]">
      
      {/* CRT Overlay Effects - Subtle Static */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01),rgba(255,255,255,0.03))] bg-[length:100%_2px,3px_100%] opacity-30 mix-blend-overlay"></div>
      
      {/* Main Container - Silver Metallic Style */}
      {/* Changed h-screen to h-[100dvh] for mobile browser address bar handling */}
      <div className="w-full h-[100dvh] sm:h-[90vh] sm:max-w-[480px] bg-[#0a0a0a] border-x border-[#333] flex flex-col relative z-10 overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.9)] sm:border-y sm:rounded-sm">
        
        {/* Screen: INTRO */}
        {gameState === 'INTRO' && (
          // Added pb-20 for mobile safety
          <div className="flex flex-col h-full p-6 pb-20 sm:pb-6 animate-fadeIn justify-center">
            <div className="text-center mb-12">
              <h1 className="text-4xl text-[#e0e0e0] font-bold drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] mb-4 leading-none tracking-[0.2em]">
                <GlitchText text="RE:SOURCE" />
              </h1>
              <div className="text-lg text-[#888] font-light tracking-[0.5em] uppercase border-t border-[#333] pt-4 inline-block">尋回原檔</div>
            </div>
            
            <div className="text-sm text-[#aaa] leading-relaxed mb-12 border-l border-[#444] pl-6 py-2">
              <p className="mb-4">時間是 2046 年。</p>
              <p className="mb-4">所有的創作都已破碎，化為漂浮在數位世界中的殘骸。</p>
              <p>準備好尋找你遺失的「完全原創之物」了嗎？</p>
            </div>

            <button 
              onClick={() => setGameState('UPLOAD')}
              className="w-full py-4 bg-gradient-to-r from-[#666] via-[#bbb] to-[#666] text-black font-bold text-lg hover:via-[#fff] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-all duration-300 tracking-[0.2em]"
            >
              連線至伺服器
            </button>
          </div>
        )}

        {/* Screen: UPLOAD */}
        {gameState === 'UPLOAD' && (
          // Added pb-20 for mobile safety
          <div className="p-6 pb-20 sm:pb-6 h-full">
            <UploadScreen onStart={handleStartGame} />
          </div>
        )}

        {/* Screen: GAME */}
        {gameState === 'GAME' && (
          <div className="flex flex-col h-full p-5">
            {/* Header */}
            <div className="flex justify-between text-[10px] text-[#666] border-b border-[#333] pb-2 mb-4 shrink-0 font-mono tracking-widest">
              <span>LOC: LAYER_0</span>
              <div className="w-[100px] h-2 border border-[#444] p-[1px] bg-[#000]">
                <div 
                  className="h-full bg-[#ccc] shadow-[0_0_5px_rgba(255,255,255,0.5)] transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Content */}
            <div ref={scrollRef} className="flex-grow overflow-y-auto mb-4 scrollbar-hide">
              <div className="text-lg leading-relaxed text-[#d0d0d0] mb-8 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                 <Typewriter 
                   text={currentScene.text} 
                   speed={20} 
                   onComplete={() => setTimeout(() => setShowOptions(true), 300)}
                   key={currentSceneId} // Reset on scene change
                 />
              </div>

              {showOptions && (
                 <div className="text-[#fff] font-bold mb-6 border-l-2 border-[#fff] pl-4 animate-fadeIn shadow-[0_0_15px_rgba(255,255,255,0.05)] py-3 bg-[#ffffff05] tracking-wide">
                   {currentScene.question}
                 </div>
              )}
            </div>

            {/* Options */}
            {/* Added pb-20 for mobile safety */}
            <div className="flex flex-col gap-4 mt-auto pb-20 sm:pb-6">
              {showOptions && currentScene.options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(opt)}
                  className="text-left p-5 border border-[#444] text-[#aaa] bg-[#0f0f0f] hover:bg-[#ccc] hover:text-black hover:border-[#fff] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-all duration-300 active:scale-[0.99]"
                  style={{ animation: `fadeIn 0.5s ease forwards ${idx * 0.1}s`, opacity: 0 }}
                >
                  <span className="font-bold mr-2">[{String.fromCharCode(65 + idx)}]</span> {opt.text.substring(3)}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Screen: PROCESSING */}
        {gameState === 'PROCESSING' && (
          <div className="p-6 h-full">
            <ProcessingScreen charId={charId} onComplete={() => setGameState('RESULT_AVATAR')} />
          </div>
        )}

        {/* Screen: RESULTS */}
        {(gameState === 'RESULT_AVATAR' || gameState === 'RESULT_SCENE') && (
          <div className="h-full">
            <ResultCard 
              view={gameState === 'RESULT_AVATAR' ? 'avatar' : 'scene'}
              character={characters[charId]}
              charId={charId}
              onNext={() => setGameState('RESULT_SCENE')}
              onRestart={() => setGameState('INTRO')}
            />
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        /* Hide scrollbar for game area but allow scroll */
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default App;