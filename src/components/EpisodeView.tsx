export interface IEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  _links: { self: { href: string } };
}

export interface EpisodeProps {
  episode: IEpisode;
}

export function EpisodeView(props: EpisodeProps): JSX.Element {
  const episode = props.episode;

  return (
    <div className="episode">
      <p className="SeriesEpisode">
        {" "}
        <strong>
          S{("0" + episode.season).slice(-2)}E{("0" + episode.number).slice(-2)}
        </strong>{" "}
      </p>
      <h2>{episode.name}</h2>
      <br />
      <img src={episode.image.medium} alt={""} /> <br />
      <p>
        {episode.summary
          .replace(/<p>/g, "")
          .replace(/<\/p>/g, "")
          .replace(/<br>/g, "")}
      </p>
    </div>
  );
}
