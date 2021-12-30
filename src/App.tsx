import "./App.css";
import EpisodeViews from "./components/EpisodeViews";
import { useEffect, useState } from "react";
import { IEpisode } from "./components/EpisodeView";
import tvShows from "./shows.json";
import ShowSelector from "./components/ShowSelector";
import ShowProps from "./components/ShowProps";
import ShowPage from "./components/ShowPage";

function App(): JSX.Element {
  const [showID, setShowID] = useState<string>("");
  const [episodes, setEpisodes] = useState<IEpisode[]>([]);
  const showList: ShowProps[] = tvShows;

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://api.tvmaze.com/shows/${showID}/episodes`
      );
      const episodes: IEpisode[] = await response.json();
      setEpisodes(episodes);
    }
    showID !== "" && getData();
  }, [showID]);

  return (
    <>
      <header>
        <h1>TV Shows</h1>
      </header>

      {
        <ShowSelector
          showID={showID.toString()}
          setShowID={setShowID}
          tvShows={showList}
        />
      }
      {showID === "" && <ShowPage tvShows={showList} setShowID={setShowID} />}
      {showID !== "" && (
        <EpisodeViews episodes={episodes} setShowID={setShowID} />
      )}
      <footer>
        Data sourced from <a href="https://tvmaze.com/">TVMaze.com</a>.
      </footer>
    </>
  );
}

export default App;
