import { useLocation } from "react-router-dom";
import { Record } from "./services/types";

const MovieDetails = () => {
  const { state: record }: { state: Record } = useLocation();
  const detailsStyles =
    "text-slate-400 font-mono w-full text-center uppercase tracking-widest";
  return (
    <div className="w-full h-screen bg-black justify-center">
      <div className="w-full h-3/4 bg-black">
        <img src={record.Poster} className="mx-auto h-full rounded-lg" />
      </div>
      <div className="h-1/4 bg-indigo-900 py-4">
        <h1 className="text-slate-300 font-sans w-full text-center uppercase tracking-widest">
          {record.Title}
        </h1>
        <div className="w-full my-8 space-y-4">
          <p className={detailsStyles}>{`Year: ${record.Year}`}</p>
          <p className={detailsStyles}>{`Type: ${record.Type}`}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
