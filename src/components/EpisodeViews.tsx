import { EpisodeView } from "./EpisodeView";
import episodes from "../episodes.json";

const EpisodeViews = episodes.map((episode) => (
  <EpisodeView episode={episode} key={episode.id} />
));

export default EpisodeViews;
