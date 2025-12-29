import { Frown, RotateCcw, Trophy } from "lucide-react";

const ResultView = ({ result, onReset }) => (
  <div className="text-center animate-bounce-in space-y-8 w-full">
    <div className="relative inline-block">
      {result?.type === 'win' ? (
        <>
          <div className="absolute inset-0 bg-green-400 blur-2xl opacity-20 animate-pulse" />
          <div className="relative p-6 bg-green-50 rounded-3xl border border-green-100">
            <Trophy className="w-20 h-20 text-green-600" />
          </div>
        </>
      ) : (
        <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
          <Frown className="w-20 h-20 text-slate-400" />
        </div>
      )}
    </div>
    
    <div className="space-y-2">
      <h2 className="text-3xl font-extrabold text-slate-800">
        {result?.type === 'win' ? 'Woohoo!' : 'Oh no!'}
      </h2>
      <div className="h-16 flex items-center justify-center">
        <p className="text-xl text-slate-600 font-medium">
          {result?.type === 'win' ? (
             <span>You won <span className="text-indigo-600 font-bold">{result.prize}</span>!</span>
          ) : (
            'Better luck next time.'
          )}
        </p>
      </div>
    </div>

    <button 
      onClick={onReset}
      className="flex items-center gap-2 mx-auto px-6 py-3 rounded-full text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 font-semibold transition-all"
    >
      <RotateCcw className="w-4 h-4" /> Try Again
    </button>
  </div>
);

export default ResultView
