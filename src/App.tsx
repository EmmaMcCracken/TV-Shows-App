import episodes from "./episodes.json";
import "./App.css";
import { EpisodeView } from "./components/EpisodeView";
import EpisodeViews from "./components/EpisodeViews";

function App(): JSX.Element {
  return (
    <>
      <h1>Game of Thrones Episodes</h1>
      <div className="episodes">{EpisodeViews}</div>
      <footer>
        Data sourced from <a href="https://tvmaze.com/">TVMaze.com</a>.
      </footer>
    </>
  );
}

export default App;
