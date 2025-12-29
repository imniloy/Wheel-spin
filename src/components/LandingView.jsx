import { ArrowRight, PartyPopper } from "lucide-react";

const LandingView = ({ onStart }) => (
  <div className="text-center space-y-8 animate-fade-in w-full">
    <div className="relative">
      <div className="absolute inset-0 bg-blue-400 blur-[40px] opacity-20 rounded-full" />
      <div className="bg-linear-to-tr from-indigo-50 to-blue-50 p-6 rounded-3xl w-24 h-24 mx-auto flex items-center justify-center relative shadow-sm border border-indigo-100/50">
        <PartyPopper className="w-10 h-10 text-indigo-600" />
      </div>
    </div>
    
    <div className="space-y-3">
      <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Spin & Win!</h1>
      <p className="text-slate-500 text-lg max-w-xs mx-auto leading-relaxed">
        Leave a quick review and get a chance to win exclusive discounts.
      </p>
    </div>

    <button 
      onClick={onStart}
      className="group relative w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-10 rounded-2xl transition-all shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm"
    >
      <span className="flex items-center justify-center gap-2">
        Start Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </span>
    </button>
  </div>
);

export default LandingView
