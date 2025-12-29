
import { memo, useMemo } from "react";
import { SEGMENTS, WHEEL_COLORS } from "../utils/config";


const WheelSVG = memo(({ rotation, isSpinning }) => {
  const segmentAngle = 360 / SEGMENTS.length;

  const paths = useMemo(() => {
    return SEGMENTS.map((segment, index) => {
      const startAngle = index * segmentAngle;
      const endAngle = (index + 1) * segmentAngle;
      
      const x1 = 50 + 50 * Math.cos(Math.PI * startAngle / 180);
      const y1 = 50 + 50 * Math.sin(Math.PI * startAngle / 180);
      const x2 = 50 + 50 * Math.cos(Math.PI * endAngle / 180);
      const y2 = 50 + 50 * Math.sin(Math.PI * endAngle / 180);
      
      return {
        pathData: `M50,50 L${x1},${y1} A50,50 0 0,1 ${x2},${y2} Z`,
        color: WHEEL_COLORS[index % WHEEL_COLORS.length],
        label: segment.label,
        rotation: startAngle + segmentAngle / 2
      };
    });
  }, [segmentAngle]);

  return (
    <div 
      className="w-full h-full rounded-full border-4 border-white shadow-2xl overflow-hidden relative"
      style={{ 
        transform: `rotate(${rotation}deg)`,
        transition: isSpinning ? 'transform 4s cubic-bezier(0.15, 0, 0.15, 1)' : 'none',
        willChange: 'transform'
      }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
        {paths.map((p, index) => (
          <g key={index}>
            <path d={p.pathData} fill={p.color} stroke="white" strokeWidth="0.5" />
            <text 
              x="50" y="50" 
              fill="white" fontSize="4.5" fontWeight="800"
              transform={`rotate(${p.rotation}, 50, 50) translate(28, 1.5)`}
              textAnchor="middle"
              style={{ textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}
            >
              {p.label}
            </text>
          </g>
        ))}
        <circle cx="50" cy="50" r="8" fill="white" />
        <circle cx="50" cy="50" r="6" className="fill-slate-800" />
        <path d="M50 44 L50 38" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
});


const GameView = ({ rotation, isSpinning, onSpin }) => (
  <div className="flex flex-col items-center justify-center w-full animate-fade-in">
    <div className="relative w-64 h-64 sm:w-72 sm:h-72 mb-10">
      {/* Pointer */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20 filter drop-shadow-md">
        <div className="w-8 h-10 bg-slate-800 [clip-path:polygon(0%_0%,100%_0%,50%_100%)]"></div>
      </div>

      <WheelSVG rotation={rotation} isSpinning={isSpinning} />
      
      {/* Shadow beneath wheel */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 h-4 bg-black/10 blur-xl rounded-[100%]" />
    </div>

    <div className="space-y-4 text-center">
      <h3 className="text-xl font-bold text-slate-800">
         {isSpinning ? "Good Luck!" : "Ready to Spin?"}
      </h3>
      <button 
        onClick={onSpin}
        disabled={isSpinning}
        className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 px-16 rounded-full text-lg shadow-xl shadow-indigo-200 hover:shadow-2xl hover:shadow-indigo-300 hover:-translate-y-1 transition-all active:scale-95"
      >
        {isSpinning ? 'Spinning...' : 'SPIN THE WHEEL'}
      </button>
    </div>
  </div>
);

export default GameView
