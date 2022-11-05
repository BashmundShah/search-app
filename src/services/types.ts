export type Record = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
};

export type Records = {
  Response: string;
  Error: string;
  Search: Record[];
  totalResults: string;
};
