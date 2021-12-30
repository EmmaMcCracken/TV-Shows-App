import React, { useEffect, useState } from "react";
import { EpisodeView, IEpisode } from "./EpisodeView";

interface EpisodeViewsProps {
  episodes: IEpisode[];
  setShowID: (id: string) => void;
}

function EpisodeViews(props: EpisodeViewsProps): JSX.Element {
  const { episodes } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEpisodes, setFilteredEpisodes] =
    useState<IEpisode[]>(episodes);

  useEffect(() => {
    setFilteredEpisodes(episodes);
    setSearchTerm("");
  }, [episodes]);

  console.log(
    "EpisodeViews has been run and filteredEpisodes is ",
    filteredEpisodes
  );

  function handleSearchTermChange(txt: string) {
    setSearchTerm(txt);
    setFilteredEpisodes(
      episodes.filter((episode) => {
        return (
          episode.name.toLowerCase().includes(txt.toLowerCase()) ||
          episode.summary.toLowerCase().includes(txt.toLowerCase())
        );
      })
    );
  }

  function handleEpisodeSelected(episodeID: string) {
    const foundEpisode = episodes.find(
      (episode) => episode.id === parseInt(episodeID)
    );

    if (foundEpisode) {
      setFilteredEpisodes([foundEpisode]);
    }
  }
  function makeEpisodeElements(episodes: IEpisode[]): JSX.Element[] {
    const EpisodeElements = episodes.map((episode) => (
      <EpisodeView episode={episode} key={episode.id} />
    ));
    return EpisodeElements;
  }
  return (
    <>
      <input
        value={searchTerm}
        onChange={(e) => handleSearchTermChange(e.target.value)}
        placeholder={"search term ..."}
      />
      <select
        className="control"
        onChange={(event) => handleEpisodeSelected(event.target.value)}
        value={
          filteredEpisodes.length === 1
            ? filteredEpisodes[0].id
            : "Select an episode"
        }
      >
        {
          //create the options within the select
          filteredEpisodes.map((episode) => (
            <option key={episode.id} value={episode.id}>
              S{("0" + episode.season).slice(-2)}E
              {("0" + episode.number).slice(-2)} {episode.name}
            </option>
          ))
        }
      </select>
      <button
        onClick={() => {
          setSearchTerm("");
          setFilteredEpisodes(episodes);
        }}
      >
        Clear filter
      </button>
      <br />
      {searchTerm !== "" && `Search term is: ${searchTerm}`}
      <br />
      {`Loaded ${episodes.length}      ${
        episodes.length === 1 ? "episode" : "episodes"
      }`}
      <br />{" "}
      {`Showing      ${filteredEpisodes.length} ${
        filteredEpisodes.length === 1 ? "episode" : "episodes"
      }`}
      <button
        onClick={() => {
          props.setShowID("");
        }}
      >
        Return to list of shows
      </button>
      <div className="episodes">{makeEpisodeElements(filteredEpisodes)}</div>
    </>
  );
}

export default EpisodeViews;
