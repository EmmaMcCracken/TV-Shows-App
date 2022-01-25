import { useState } from "react";
import ShowProps from "../utils/ShowProps";
import { ShowView } from "./ShowView";

interface ShowPageProps {
  tvShows: ShowProps[];
  setShowID: (id: string) => void;
}

export interface ShowViewProps {
  tvShow: ShowProps;
  setShowID: (id: string) => void;
}

export default function ShowPage({
  tvShows,
  setShowID,
}: ShowPageProps): JSX.Element {
  const [showSearchTerm, setShowSearchTerm] = useState("");
  const [filteredShows, setFilteredShows] = useState<ShowProps[]>([]);

  function handleShowSearchTermChange(txt: string): void {
    setShowSearchTerm(txt);
    setFilteredShows(
      tvShows.filter((show) => {
        return (
          (show.genres &&
            show.genres.filter((genre) =>
              genre.toLowerCase().includes(txt.toLowerCase())
            ).length > 0) ||
          (show.name && show.name.toLowerCase().includes(txt.toLowerCase())) ||
          (show.summary &&
            show.summary.toLowerCase().includes(txt.toLowerCase()))
        );
      })
    );

    console.log(filteredShows);
  }

  return (
    <>
      <input
        value={showSearchTerm}
        onChange={(e) => handleShowSearchTermChange(e.target.value)}
        placeholder={"Search term..."}
      />
      Show search term: {showSearchTerm}
      <div className="episodes">
        {/* <ShowView tvShow={tvShows[0]} /> */}
        {filteredShows.length === 0 && showSearchTerm === ""
          ? tvShows.map((show) => (
              <ShowView key={show.id} tvShow={show} setShowID={setShowID} />
            ))
          : filteredShows.map((show) => (
              <ShowView key={show.id} tvShow={show} setShowID={setShowID} />
            ))}
      </div>
    </>
  );
}
