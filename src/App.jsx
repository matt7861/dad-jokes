import { useState } from "react";
import loadingImage from "./assets/loading.svg";

import "./App.css";

function App() {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);

  function getJoke() {
    async function requestJokes() {
      setLoading(true);
      try {
        const res = await fetch("https://icanhazdadjoke.com/", {
          headers: {
            Accept: "application/json",
          },
        });
        const data = await res.json();
        setJoke(data.joke);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    requestJokes();
  }

  return (
    <div className="App">
      <div className="container">
        <h3>Don't laugh challenge</h3>
        <div id="joke" className="joke">
          {loading ? <img class="loading" src={loadingImage} /> : joke}
        </div>
        <button onClick={getJoke} id="get_joke" className="btn">
          {joke.length > 0 ? "Get Another Joke" : "Get a Joke"}
        </button>
      </div>
    </div>
  );
}

export default App;
