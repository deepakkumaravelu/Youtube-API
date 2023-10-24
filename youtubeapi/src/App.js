import './App.css';

const API_KEY='AIzaSyAFYd9rPaVlpQlhcytFxotavCzX3tLvOuc';


const CHANNEL_NAME ="Rahul M";

// URL to search for the channel by name
const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${CHANNEL_NAME}&type=channel&part=id&maxResults=1`;


// First, make a request to search for the channel by name
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Extract the channel ID from the search results
    const channel = data.items[0];
    if (channel) {
      const channelId = channel.id.channelId;
      console.log(`Channel ID: ${channelId}`);

      // Now that you have the channelId, make a request to get channel statistics
    

      // Make a GET request to the YouTube Data API to get channel statistics
      
    } else {
      console.log(`Channel not found.`);
    }
  })
  .catch(error => {
    console.error(`Error searching for the channel: ${error}`);
  });
  //   const statsUrl = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id="22132fa"&key=${API_KEY}`;
  // fetch(statsUrl)
  // .then(response => response.json())
  // .then(data => {
  //   // Extract the subscriber count from the API response
  //   const subscriberCount = data.items[0].statistics.subscriberCount;

  //   console.log(`Subscriber count: ${subscriberCount}`);
  // })
  // .catch(error => {
  //   console.error(`Error fetching channel statistics: ${error}`);
  // });
function App() {
 
  return (
    <div className="App">
    <h1>view console</h1>
    </div>
  );
}

export default App;