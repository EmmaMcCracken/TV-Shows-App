import ShowProps from "./ShowProps";

interface ShowPageProps {
  tvShows: ShowProps[];
  setShowID: (id: string) => void;
}

interface ShowViewProps {
  tvShow: ShowProps;
  setShowID: (id: string) => void;
}

function ShowView({ tvShow, setShowID }: ShowViewProps): JSX.Element {
  return (
    <div key={tvShow.id} className="episode">
      <h3 onClick={() => setShowID(tvShow.id.toString())}>{tvShow.name}</h3>
      {tvShow.image && (
        <img
          src={tvShow.image.medium ? tvShow.image.medium : undefined}
          alt={""}
        />
      )}
      <h4>Summary:</h4>
      <p>
        {tvShow.summary &&
          tvShow.summary
            .replace(/<p>/g, "")
            .replace(/<\/p>/g, "")
            .replace(/<br>/g, "")
            .replace(/<b>/g, "")
            .replace(/<\/b>/g, "")
            .replace(/<i>/g, "")
            .replace(/<\/i>/g, "")}
      </p>
      <h4>Genres:</h4>
      <p>{tvShow.genres.join(", ")}</p>
      <h4>Status:</h4>
      <p>{tvShow.status}</p>
      <h4>Rating:</h4>
      <p>{tvShow.rating.average}</p>
      <h4>Runtime:</h4>
      <p>{tvShow.runtime} minutes</p>
    </div>
  );
}

export default function ShowPage({
  tvShows,
  setShowID,
}: ShowPageProps): JSX.Element {
  return (
    <div className="episodes">
      {/* <ShowView tvShow={tvShows[0]} /> */}
      {tvShows.map((show) => (
        <ShowView key={show.id} tvShow={show} setShowID={setShowID} />
      ))}
    </div>
  );
}
