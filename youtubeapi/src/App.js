
import './App.css';
import {useState} from 'react';



function App() {
  const [sub,setSub]=useState();
  const API_KEY='AIzaSyAFYd9rPaVlpQlhcytFxotavCzX3tLvOuc';


  const CHANNEL_NAME = prompt("Enter channel name to get subscriber count:");
  
  // URL to search for the channel by name
  const searchUrl = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${CHANNEL_NAME}&type=channel`;
  
  // First, make a request to search for the channel by name
  fetch(searchUrl)
    .then(response => response.json())
    .then(data => {
      // Extract the channel ID from the search results
      const channel = data.items[0];
      if (channel) {
        const channelId = channel.id.channelId;
        console.log(`Channel ID: ${channelId}`);
  
        // Now that you have the channelId, make a request to get channel statistics
        const statsUrl = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${API_KEY}`;
  
        // Make a GET request to the YouTube Data API to get channel statistics
        fetch(statsUrl)
          .then(response => response.json())
          .then(data => {
            // Extract the subscriber count from the API response
            const subscriberCount = data.items[0].statistics.subscriberCount;
            setSub(subscriberCount);
            console.log(`Subscriber count: ${subscriberCount}`);
          })
          .catch(error => {
            console.error(`Error fetching channel statistics: ${error}`);
          });
      } else {
        console.log(`Channel not found.`);
      }
    })
    .catch(error => {
      console.error(`Error searching for the channel: ${error}`);
    });
  return (
    <div className="App">
    <h1>{sub}</h1>
    </div>
  );
}

export default App;
