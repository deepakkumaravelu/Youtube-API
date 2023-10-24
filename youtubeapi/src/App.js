import './App.css';
const Url="https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_Dk7EGKeq4rae2BpD8SW1zLmop8jTAyD3AYi19s0NMzzaJSmLC5SbT6B0tHisomeO";
fetch(Url)
.then(response => response.json())
.then(data => {
  // Extract the channel ID from the search results
  const img = data;
  if (img) {
    const channelId = img[0].url;
    document.querySelector(".imm").src=channelId;
  } else {
    console.log(`not found.`);
  }
})
.catch(error => {
  console.error(`Error searching for the channel: ${error}`);
});
function App() {
  return (
    <div className="App">
    <img src="" className="imm" ></img>
    </div>
  );
}
export default App;