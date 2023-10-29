import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [imgUrl, setImgUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCatImage = async () => {
      try {
        const response = await fetch(
          'https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=beng&api_key=YOUR_API_KEY'
        );

        if (response.ok) {
          const data = await response.json();
          if (data.length > 0) {
            setImgUrl(data[0].url);
          } else {
            setError('Image not found.');
          }
        } else {
          setError('Failed to fetch data from the API');
        }
      } catch (error) {
        setError(`Error searching for the cat image: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchCatImage();
  }, []);

  return (
    <div className="App">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {imgUrl && <img src={imgUrl} alt="Cat" className="imm" />}
    </div>
  );
}

export default App;
