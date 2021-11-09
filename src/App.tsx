import "./App.css";
import EpisodeViews from "./components/EpisodeViews";

function App(): JSX.Element {
  return (
    <>
      <header>
        <h1>TV Show Episodes</h1>
      </header>
      <EpisodeViews />
      <footer>
        Data sourced from <a href="https://tvmaze.com/">TVMaze.com</a>.
      </footer>
    </>
  );
}

export default App;
