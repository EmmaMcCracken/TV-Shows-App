import ShowProps from "./ShowProps";

interface ShowSelectorProps {
  showID: string;
  setShowID: (input: string) => void;
  tvShows: ShowProps[];
}

export default function ShowSelector(props: ShowSelectorProps): JSX.Element {
  function handleSelectShow(showID: string) {
    props.setShowID(showID);
  }

  return (
    <select
      value={props.showID}
      onChange={(e) => handleSelectShow(e.target.value)}
    >
      {props.tvShows
        .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
        .map((show) => (
          <option value={show.id.toString()} key={show.id}>
            {show.name}
          </option>
        ))}
    </select>
  );
}
