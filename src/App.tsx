import "./App.css";
import EpisodeViews from "./components/EpisodeViews";
import { useEffect, useState } from "react";
import { IEpisode } from "./components/EpisodeView";
import tvShows from "./shows.json";
import ShowSelector from "./components/ShowSelector";
import ShowProps from "./components/ShowProps";

function App(): JSX.Element {
  const [showID, setShowID] = useState<string>("82");
  const [episodes, setEpisodes] = useState<IEpisode[]>([]);
  const showList: ShowProps[] = tvShows;
  async function getData() {
    const response = await fetch(
      `https://api.tvmaze.com/shows/${showID}/episodes`
    );
    const episodes: IEpisode[] = await response.json();
    setEpisodes(episodes);
  }

  useEffect(() => {
    getData();
  }, [showID]);

  return (
    <>
      <header>
        <h1>TV Show Episodes</h1>
      </header>
      <ShowSelector
        showID={showID.toString()}
        setShowID={setShowID}
        tvShows={showList}
      />
      <EpisodeViews episodes={episodes} />
      <footer>
        Data sourced from <a href="https://tvmaze.com/">TVMaze.com</a>.
      </footer>
    </>
  );
}

export default App;
