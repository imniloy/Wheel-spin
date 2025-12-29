import { CheckCircle2 } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';
import GameView from './components/GameView';
import Header from './components/Header';
import LandingView from './components/LandingView';
import ResultView from './components/ResultView';
import ReviewView from './components/ReviewView';

import { SEGMENTS } from './utils/config';

const ProgressBar = ({ gameState }) => {
  const steps = ['Start', 'Review', 'Spin', 'Prize'];
  const currentIdx = ['landing', 'review', 'game', 'result'].indexOf(gameState);
  
  return (
    <div className="relative mb-6">
      <div className="flex justify-between items-center mb-8 px-2">
        {steps.map((step, idx) => (
          <div key={step} className="flex flex-col items-center z-10">
            <div 
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 border-2
                ${idx <= currentIdx ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-white border-slate-200 text-slate-400'}`}
            >
              {idx < currentIdx ? <CheckCircle2 className="w-4 h-4" /> : idx + 1}
            </div>
            <span className={`text-xs mt-2 font-medium transition-colors duration-300 ${idx <= currentIdx ? 'text-indigo-600' : 'text-slate-300'}`}>
              {step}
            </span>
          </div>
        ))}
        {/* Progress Line Background */}
        <div className="absolute top-12 left-0 w-full px-12 h-0.5">
           <div className="w-full h-full bg-slate-100" />
        </div>
      </div>
    </div>
  );
};

const Confetti = () => {
  const [particles] = useState(() => {
    return Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: ['#EF476F', '#FFD166', '#06D6A0', '#118AB2'][Math.floor(Math.random() * 4)],
      delay: Math.random() * 0.5,
      duration: Math.random() * 2 + 2,
      rotation: Math.random() * 360,
    }));
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-50">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute w-2 h-2 sm:w-3 sm:h-3 rounded-sm"
          style={{
            left: `${p.x}%`,
            top: -20,
            backgroundColor: p.color,
            transform: `rotate(${p.rotation}deg)`,
            animation: `fall ${p.duration}s linear forwards`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes fall {
          to { transform: translateY(100vh) rotate(720deg); }
        }
      `}</style>
    </div>
  );
};



export default function App() {
  const timerRef = useRef(null);

  const [gameState, setGameState] = useState('landing');
  const [reviewText, setReviewText] = useState('');
  const [gameResult, setGameResult] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);


  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);


  const handleStart = () => setGameState('review');

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (reviewText.trim().length > 0) {
      setGameState('game');
    }
  };

  const handleSpin = useCallback(() => {
    if (isSpinning) return;

    setIsSpinning(true);
    setGameResult(null);

    // 1. Calculate spins: At least 5 full spins (1800 deg) + random offset
    const minSpins = 5;
    const maxSpins = 8;
    const randomSpins = Math.floor(Math.random() * (maxSpins - minSpins + 1)) + minSpins;
    const randomDegree = Math.floor(Math.random() * 360);
    
    // 2. Determine target rotation
    const newRotation = rotation + (randomSpins * 360) + randomDegree;
    setRotation(newRotation);

    // 3. Set timer to calculate result after animation
    timerRef.current = setTimeout(() => {
      const normalizedRotation = newRotation % 360;
      const effectiveAngle = (360 - normalizedRotation) % 360;
      
      const segmentSize = 360 / SEGMENTS.length;
      const index = Math.floor(effectiveAngle / segmentSize);
      const safeIndex = Math.min(Math.max(index, 0), SEGMENTS.length - 1);
      const resultSegment = SEGMENTS[safeIndex];

      setGameResult({
        type: resultSegment.value,
        prize: resultSegment.prize
      });
      setIsSpinning(false);
      setGameState('result');
    }, 4000); 
  }, [rotation, isSpinning]);

  const handleReset = () => {
    setGameState('landing');
    setReviewText('');
    setGameResult(null);
    setRotation(0);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col overflow-hidden">
      
      {gameState === 'result' && gameResult?.type === 'win' && <Confetti />}

      <Header />

      <main className="grow flex items-center justify-center p-4 sm:p-6">
        <div className="w-full max-w-xl bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] p-8 sm:p-10 border border-slate-100 relative overflow-hidden min-h-137.5 flex flex-col">
          
          <ProgressBar gameState={gameState} />

          <div className="grow flex items-center justify-center w-full">
            {gameState === 'landing' && <LandingView onStart={handleStart} />}
            
            {gameState === 'review' && (
              <ReviewView 
                reviewText={reviewText} 
                setReviewText={setReviewText} 
                onSubmit={handleSubmitReview} 
              />
            )}
            
            {gameState === 'game' && (
              <GameView 
                rotation={rotation} 
                isSpinning={isSpinning} 
                onSpin={handleSpin} 
              />
            )}
            
            {gameState === 'result' && (
              <ResultView 
                result={gameResult} 
                onReset={handleReset} 
              />
            )}
          </div>
        </div>
      </main>

      <footer className="p-6 text-center text-indigo-700 text-sm">
        &copy; 2025 Review Roulette Inc. • Developed by Niloy Kumar Das • Website: <a href="http://www.imniloy.xyz" target="_blank" rel="noopener noreferrer">www.imniloy.xyz</a> 
      </footer>

      {/* <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes bounce-in {
          0% { opacity: 0; transform: scale(0.8); }
          50% { transform: scale(1.05); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-bounce-in {
          animation: bounce-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style> */}
    </div>
  );
}