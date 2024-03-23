import React, { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [data, setData] = useState<any>(null); // State to hold fetched data
  const [isLoading, setIsLoading] = useState(false); // State to track loading state
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const url = 'https://yahoo-finance127.p.rapidapi.com/search/NVDA';
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '81c594aa00msh92ed28b973a4984p1187a7jsnd5853be48766', // Replace with your actual API key
            'X-RapidAPI-Host': 'yahoo-finance127.p.rapidapi.com',
          },
        };

        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.statusText}`);
        }

        const fetchedData = await response.json();
        setData(fetchedData);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Yahoo Finance Data</h1>
       {isLoading && <p>Loading...</p>}
       {data && (
        // Render fetched data here based on its structure
        <pre>{JSON.stringify(data, null, 2)}</pre> // Example for initial rendering
      )}
    </div>
  );
};

export default App;