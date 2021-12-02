export default interface ShowProps {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number | null;
  averageRuntime: number | null;
  premiered: string | null;
  ended: string | null;
  officialSite: string | null;
  schedule: {
    time: string;
    days: string[];
  };
  rating: {
    average: number | null;
  };
  weight: number;
  network: null | {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    };
  };
  webChannel: null | {
    id: number;
    name: string;
    country: null | {
      name: string;
      code: string;
      timezone: string;
    };
  };
  dvdCountry: string | null;
  externals: {
    tvrage: number;
    thetvdb: number | null;
    imdb: string | null;
  };
  image: null | {
    medium: string | null;
    original: string | null;
  };
  summary: string;
  updated: number;
  _links: null | {
    self: {
      href: string;
    };
  };
}
