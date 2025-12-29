import { Star } from "lucide-react";

const Header = () => (
  <header className="bg-white border-b border-slate-200 p-4 sticky top-0 z-40 bg-opacity-90 backdrop-blur-sm">
    <div className="max-w-4xl mx-auto flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="bg-indigo-600 p-1.5 rounded-lg">
          <Star className="text-white fill-current w-4 h-4" />
        </div>
        <span className="font-bold text-lg tracking-tight text-slate-800">ReviewRoulette</span>
      </div>
      <div className="text-sm font-semibold px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full border border-indigo-100">
        <a href="https://www.imniloy.xyz" target="_blank" rel="noopener noreferrer">
        Developed by imniloy.xyz</a>
      </div>
    </div>
  </header>
);


export default Header;