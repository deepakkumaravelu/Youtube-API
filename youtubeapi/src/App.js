import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [imgUrl, setImgUrl] = useState('');

  useEffect(() => {
    const fetchCatImage = async () => {
      try {
        const response = await fetch(
          'https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=beng&api_key=YOUR_API_KEY'
        );

        if (response.ok) {
          const data = await response.json();
          if (data.length > 0) {
            const imageUrl = data[0].url;
            setImgUrl(imageUrl);
          } else {
            console.log('Image not found.');
          }
        } else {
          console.error('Failed to fetch data from the API');
        }
      } catch (error) {
        console.error(`Error searching for the cat image: ${error}`);
      }
    };

    fetchCatImage();
  }, []);

  return (
    <div className="App">
      <img src={imgUrl} alt="Cat" className="imm" />
    </div>
  );
}

export default App;
