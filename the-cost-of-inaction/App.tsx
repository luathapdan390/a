import React, { useState } from 'react';
import Header from './components/Header';
import InputForm from './components/StoryControls'; // Re-using filename
import ResultsDisplay from './components/GardenGrid'; // Re-using filename
import TensesDisplay from './components/SceneDisplay'; // Re-using filename
import { calculateLosses, generateTenseSentences, CalculationResults } from './services/geminiService'; // Re-using filename

const App: React.FC = () => {
  const today = new Date().toISOString().split('T')[0];
  const [date, setDate] = useState(today);
  const [years, setYears] = useState('30');
  const [principal, setPrincipal] = useState('100');
  const [results, setResults] = useState<CalculationResults | null>(null);
  const [tenses, setTenses] = useState<{ tense: string; sentence: string; }[] | null>(null);

  const handleCalculate = () => {
    const yearsNum = parseInt(years, 10);
    const principalNum = parseFloat(principal);

    if (isNaN(yearsNum) || isNaN(principalNum) || yearsNum <= 0 || principalNum <= 0) {
      alert("Please enter valid positive numbers for years and principal value.");
      return;
    }
    
    const calculatedResults = calculateLosses(principalNum, yearsNum);
    setResults(calculatedResults);

    const dateObj = new Date(date);
    // Adjust for timezone offset to prevent date from shifting
    dateObj.setMinutes(dateObj.getMinutes() + dateObj.getTimezoneOffset());
    const generatedTenses = generateTenseSentences(dateObj, yearsNum, calculatedResults.financial);
    setTenses(generatedTenses);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-4xl mx-auto flex flex-col gap-8">
        <Header />
        
        <InputForm
          date={date}
          onDateChange={setDate}
          years={years}
          onYearsChange={setYears}
          principal={principal}
          onPrincipalChange={setPrincipal}
          onCalculate={handleCalculate}
        />

        {results && (
          <ResultsDisplay results={results} years={parseInt(years, 10)} />
        )}
        
        {tenses && (
          <TensesDisplay tenses={tenses} />
        )}
      </div>
    </div>
  );
};

export default App;