import { MessageSquare } from "lucide-react";

const ReviewView = ({ reviewText, setReviewText, onSubmit }) => (
  <div className="w-full animate-fade-in">
    <div className="text-center mb-8">
      <h2 className="text-2xl font-bold text-slate-800 mb-2">Your Feedback</h2>
      <p className="text-slate-500 text-sm">Help us improve by sharing your thoughts.</p>
    </div>
    
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="group">
        <div className="relative">
          <MessageSquare className="absolute top-4 left-4 w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
          <textarea
            required
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none resize-none h-40 text-slate-700 placeholder:text-slate-400"
            placeholder="Tell us about your experience..."
          />
        </div>
        <div className="flex justify-end mt-2">
          <span className={`text-xs ${reviewText.length > 0 ? 'text-indigo-600' : 'text-slate-400'}`}>
            {reviewText.length} characters
          </span>
        </div>
      </div>
      <button 
        type="submit"
        disabled={!reviewText.trim()}
        className="w-full bg-slate-900 hover:bg-slate-800 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-2xl transition-all shadow-lg shadow-slate-200 hover:shadow-slate-300"
      >
        Submit Review
      </button>
    </form>
  </div>
);

export default ReviewView
