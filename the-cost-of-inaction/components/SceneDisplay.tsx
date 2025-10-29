import React from 'react';

interface TensesDisplayProps {
  tenses: { tense: string, sentence: string, translation: string }[];
}

const TensesDisplay: React.FC<TensesDisplayProps> = ({ tenses }) => {
  return (
    <div className="w-full bg-slate-800/50 p-6 rounded-lg shadow-lg border border-slate-700 animate-fade-in mt-6">
        <h2 className="text-2xl font-display text-center text-slate-300 mb-6">The Grammar of Regret</h2>
        <div className="space-y-4">
            {tenses.map(({ tense, sentence, translation }, index) => (
                <div key={index} className="p-3 bg-slate-800 rounded-md border-l-4 border-slate-600">
                    <p className="font-semibold text-orange-400 text-sm">{tense}</p>
                    <p className="text-slate-300 italic mt-1">"{sentence}"</p>
                    <p className="text-slate-400 italic mt-2 text-sm">"{translation}"</p>
                </div>
            ))}
        </div>
    </div>
  );
};

export default TensesDisplay;