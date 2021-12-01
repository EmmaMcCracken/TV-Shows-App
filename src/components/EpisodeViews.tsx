import React, { useState } from "react";
import { EpisodeView, IEpisode } from "./EpisodeView";
import episodes from "../episodes.json";

function EpisodeViews(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearchTermChange(txt: string) {
    setSearchTerm(txt);
  }

  const filteredEpisodes = episodes.filter(matchesSearchTerm);

  function matchesSearchTerm(episode: IEpisode) {
    return (
      episode.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      episode.summary.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  // myArray.find(x => x.id === '45').foo;
  // function handleEpisodeSelected(selectedEpisodeID: number) {
  // let newSearchTerm = searchTerm;
  // if (episodes.find((x) => x.id === selectedEpisodeID)) {
  // newSearchTerm = episodes.find((x) => x.id === selectedEpisodeID)?.name;
  // }

  // setSearchTerm(newSearchTerm);
  // }

  function handleEpisodeSelected(episodeID: string) {
    // console.log(episodeID, "handleEpisodeSelected has been called");
    //  set searchTerm to be the episode name of the episode which has been selected:
    // foundEpisode = find in episodes the episode with id episodeID
    const foundEpisode = episodes.find(
      (episode) => episode.id === parseInt(episodeID)
    );
    // console.log(foundEpisode, "has been found.");
    // set searchTerm to be foundEpisode.name
    if (foundEpisode) {
      setSearchTerm(foundEpisode.name);
    }

    // setSearchTerm()
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
        value={filteredEpisodes.length === 1 ? filteredEpisodes[0].id : ""}
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
        }}
      >
        Reset
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
      <div className="episodes">{makeEpisodeElements(filteredEpisodes)}</div>
    </>
  );
}

function makeEpisodeElements(episodes: IEpisode[]): JSX.Element[] {
  const EpisodeElements = episodes.map((episode) => (
    <EpisodeView episode={episode} key={episode.id} />
  ));
  return EpisodeElements;
}
export default EpisodeViews;
