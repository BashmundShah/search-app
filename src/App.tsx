import React from "react";
import { useGetRecordsByNameQueryQuery } from "./services/odmb";
import { ReactComponent as Search } from "./assets/search.svg";
import { ReactComponent as VideoLibrary } from "./assets/video_library.svg";
import { ReactComponent as ImagePlaceholder } from "./assets/image_not_supported.svg";
import { Record } from "./services/types";
import debounce from "debounce";

const recordJSX = (record: Record, key: number) => (
  <div
    key={key}
    className="h-24 w-full max-w-sm mx-auto flex rounded bg-gray-100 cursor-pointer hover:bg-gray-200 hover:border border-solid border-indigo-500 transition-all hover:shadow-2xl hover:-translate-y-1 duration-200 ease-in-out"
  >
    {record.Poster === "N/A" ? (
      <div className="w-24 flex items-center justify-center bg-gray-300 rounded m-1">
        <ImagePlaceholder />
      </div>
    ) : (
      <div className="flex items-center w-20 h-24">
        <img className="rounded-l object-cover" src={record.Poster} />
      </div>
    )}
    <p className="w-full px-2 font-semibold text-center place-self-center">
      {record.Title}
    </p>
  </div>
);
function App() {
  const catchPhrase = "Unlimited Movies, TV Shows, and More.";
  const [searchString, setSearchString] = React.useState("");
  const { data, isLoading } = useGetRecordsByNameQueryQuery(searchString);
  const records = data?.Search;
  const isDataFetched = data?.Response === "True";
  const handleSearch = debounce(
    (e: React.ChangeEvent<HTMLInputElement>) => setSearchString(e.target.value),
    500
  );

  React.useEffect(() => {
    console.log("searchString:", searchString);
  }, [searchString]);
  return (
    <div className="w-full h-screen flex flex-col items-center bg-gray-300">
      <nav className="py-2 text-white flex justify-center w-full bg-indigo-500">
        <VideoLibrary className=" fill-current" />
        <span className="ml-2 tracking-widest font-sans">NeetFlix</span>
      </nav>
      <div className="py-4 w-full text-center flex flex-col items-center flex-grow overflow-hidden space-y-4 px-4">
        <h1>{catchPhrase}</h1>
        <div className="flex w-full max-w-md items-center p-2 bg-white rounded text-black text-sm group focus-within:ring-1 ring-solid ring-indigo-700">
          <input
            className="bg-transparent w-full outline-none"
            placeholder="Type to search..."
            onChange={handleSearch}
          />
          <Search className="w-5 h-5 stroke-current group-focus-within:text-indigo-700" />
        </div>
        {searchString !== "" && (
          <div className="w-full overflow-hidden pb-8">
            <h2>Search Results</h2>
            <div className="w-full">
              {isDataFetched ? (
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full overflow-y-scroll p-4">
                  {records?.map((record, index) => recordJSX(record, index))}
                </div>
              ) : (
                <h2 className="text-red-500">{data?.Error}</h2>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
