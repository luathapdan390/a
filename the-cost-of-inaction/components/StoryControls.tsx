import React from 'react';

interface InputFormProps {
  date: string;
  onDateChange: (value: string) => void;
  years: string;
  onYearsChange: (value: string) => void;
  principal: string;
  onPrincipalChange: (value: string) => void;
  onCalculate: () => void;
}

const InputForm: React.FC<InputFormProps> = ({
  date, onDateChange, years, onYearsChange, principal, onPrincipalChange, onCalculate
}) => {
  return (
    <div className="bg-slate-800/50 p-6 rounded-lg shadow-lg border border-slate-700">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
                <label htmlFor="date" className="block text-sm font-medium text-slate-400 mb-1">Date of Inaction</label>
                <input
                    id="date"
                    type="date"
                    value={date}
                    onChange={(e) => onDateChange(e.target.value)}
                    className="w-full p-3 bg-slate-700 border border-slate-600 rounded-md text-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                />
            </div>
            <div>
                <label htmlFor="years" className="block text-sm font-medium text-slate-400 mb-1">Years to Project</label>
                <input
                    id="years"
                    type="number"
                    value={years}
                    onChange={(e) => onYearsChange(e.target.value)}
                    placeholder="e.g., 30"
                    className="w-full p-3 bg-slate-700 border border-slate-600 rounded-md text-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                />
            </div>
            <div>
                <label htmlFor="principal" className="block text-sm font-medium text-slate-400 mb-1">Value of Today's Reading ($)</label>
                <input
                    id="principal"
                    type="number"
                    value={principal}
                    onChange={(e) => onPrincipalChange(e.target.value)}
                    placeholder="e.g., 100"
                    className="w-full p-3 bg-slate-700 border border-slate-600 rounded-md text-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                />
            </div>
        </div>
      <button
        onClick={onCalculate}
        className="w-full px-6 py-4 border border-transparent text-base font-bold rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-orange-500 transition duration-200"
      >
        Calculate The Cost
      </button>
    </div>
  );
};

export default InputForm;