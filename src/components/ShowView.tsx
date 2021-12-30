import { ShowViewProps } from "./ShowPage";

export function ShowView({ tvShow, setShowID }: ShowViewProps): JSX.Element {
  return (
    <div key={tvShow.id} className="episode">
      <h3
        className="tvShowTitle"
        onClick={() => setShowID(tvShow.id.toString())}
      >
        {tvShow.name}
      </h3>
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
