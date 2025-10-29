import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center py-4">
      <h1 className="font-display text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500 pb-2">
        The Cost of Inaction
      </h1>
      <p className="text-lg text-slate-400 font-light">
        Calculate the compound effect of a single missed day.
      </p>
    </header>
  );
};

export default Header;