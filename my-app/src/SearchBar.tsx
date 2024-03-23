import React, { useState } from 'react';

const SearchBar: React.FC = () => {
  const [symbol, setSymbol] = useState('');

  const handleSymbolChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSymbol(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (symbol) {
      // Trigger price fetch using the symbol
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="symbol">Stock Symbol:</label>
      <input
        type="text"
        id="symbol"
        value={symbol}
        onChange={handleSymbolChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
