import React from 'react';
import { CalculationResults } from '../services/geminiService'; // Re-using filename

interface ResultsDisplayProps {
  results: CalculationResults;
  years: number;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ results, years }) => {
  const formatNumber = (num: number) => new Intl.NumberFormat('en-US').format(parseFloat(num.toFixed(0)));
  const formatCurrency = (num: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(num);

  return (
    <div className="w-full animate-fade-in">
       <h2 className="text-2xl font-display text-center text-slate-300 mb-6">The Compounded Cost Over {years} Years</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Financial Loss */}
        <div className="bg-slate-800 border border-slate-700 p-6 rounded-lg text-center flex flex-col">
            <div className="text-red-400 mb-3 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
            </div>
            <h3 className="font-bold text-xl text-white mb-2">Financial Loss</h3>
            <p className="text-4xl font-display font-bold text-red-400 mb-3">{formatCurrency(results.financial)}</p>
            <p className="text-slate-400 text-sm">Potential earnings lost from the knowledge and opportunities you missed today.</p>
        </div>

        {/* Emotional Loss */}
        <div className="bg-slate-800 border border-slate-700 p-6 rounded-lg text-center flex flex-col">
            <div className="text-yellow-400 mb-3 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" /><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" /></svg>
            </div>
            <h3 className="font-bold text-xl text-white mb-2">Wisdom & Happiness Loss</h3>
            <p className="text-4xl font-display font-bold text-yellow-400 mb-3">{formatNumber(results.emotional)}</p>
            <p className="text-slate-400 text-sm">Units of insight, clarity, and personal growth that failed to compound.</p>
        </div>

        {/* Primal Brain Loss */}
        <div className="bg-slate-800 border border-slate-700 p-6 rounded-lg text-center flex flex-col">
            <div className="text-purple-400 mb-3 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" /></svg>
            </div>
            <h3 className="font-bold text-xl text-white mb-2">Discipline Loss</h3>
            <p className="text-4xl font-display font-bold text-purple-400 mb-3">{formatNumber(results.primal)}</p>
            <p className="text-slate-400 text-sm">Units of self-control and tamed instinct lost by giving in to the 'animal brain'.</p>
        </div>
      </div>
    </div>
  );
};

export default ResultsDisplay;