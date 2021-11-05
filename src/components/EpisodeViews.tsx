import React, { useState } from "react";
import { EpisodeView, IEpisode } from "./EpisodeView";
import episodes from "../episodes.json";

function EpisodeViews(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearchTermChange(txt: string) {
    setSearchTerm(txt);
  }

  episodes.sort((a, b) => (a.name < b.name ? -1 : 1));

  const filteredEpisodes = episodes.filter(matchesSearchTerm);

  function matchesSearchTerm(episode: IEpisode) {
    return (
      episode.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      episode.summary.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return (
    <>
      <input
        value={searchTerm}
        onChange={(e) => handleSearchTermChange(e.target.value)}
        placeholder={"search term ..."}
      />
      Search term is: {searchTerm} Loaded {episodes.length}
      {"      "}
      {episodes.length === 1 ? "bias" : "biases"} Showing{"      "}
      {filteredEpisodes.length}{" "}
      {filteredEpisodes.length === 1 ? "bias" : "biases"}
      <br />
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
