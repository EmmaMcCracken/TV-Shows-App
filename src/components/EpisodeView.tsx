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
    <div>
      <h2>{episode.name}</h2>
    </div>
  );
}
