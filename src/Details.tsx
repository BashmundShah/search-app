import { useParams } from "react-router-dom";
import { useGetRecordByIdQuery } from "./services/odmb";
import { ReactComponent as Loader } from "./assets/loader.svg";
import { ReactComponent as ImagePlaceholder } from "./assets/image_not_supported.svg";

const MovieDetails = () => {
  const { id } = useParams();
  const { data, isFetching } = useGetRecordByIdQuery(id ?? "");
  const isDataFetched = data?.Response === "True";
  return (
    <div
      className={`w-full bg-slate-900 flex justify-center text-slate-200 ${
        isDataFetched ? "min-h-screen" : "h-screen"
      }`}
    >
      {isDataFetched ? (
        <div className="w-full h-full p-4 ">
          <h1>{data.Title}</h1>
          <div className="my-2 space-y-2 w-full italic font-sans font-thin text-slate-400">
            <p>
              <span className="uppercase">{data.Type}</span> {data.Year}
            </p>
            <p>{data.Runtime}</p>
            <p>Genre: {data.Genre}</p>
            <p>Director: {data.Director}</p>
          </div>
          {data.Poster === "N/A" ? (
            <div className="max-h-screen max-w-sm h-96 flex items-center justify-center bg-slate-600 text-white fill-current rounded m-1">
              <ImagePlaceholder />
            </div>
          ) : (
            <img
              src={data.Poster}
              className="rounded my-4 mx-auto object-contain"
            />
          )}
          <div>
            <h2>Plot</h2>
            <p className="text-sm">{data.Plot}</p>
          </div>
        </div>
      ) : isFetching ? (
        <Loader className="w-12 h-12 animate-spin stroke-current text-indigo-400" />
      ) : (
        <h1 className="text-red-400">Error: 404</h1>
      )}
    </div>
  );
};

export default MovieDetails;
