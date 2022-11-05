import React from "react";
import { useGetRecordsByNameQueryQuery } from "./services/odmb";
import { ReactComponent as Search } from "./assets/search.svg";
import { ReactComponent as VideoLibrary } from "./assets/video_library.svg";
import { Record } from "./services/types";

const recordJSX = (record: Record) => (
  <div className="h-24 flex rounded bg-gray-100 cursor-pointer hover:bg-gray-200 hover:border border-solid border-indigo-500 transition-all hover:shadow-md hover:scale-110 duration-200 ease-in-out">
    <img className="rounded-l" src={record.Poster} />
    <p className="w-full px-2 font-semibold text-center place-self-center">
      {record.Title}
    </p>
  </div>
);
function App() {
  const catchPhrase = "Unlimited Movies, TV Shows, and More.";
  const [searchString, setSearchString] = React.useState("");
  const { data, error, isLoading } =
    useGetRecordsByNameQueryQuery(searchString);

  const records = data?.Search;
  const isFetched = data?.Response === "True";
  return (
    <div className="w-full h-screen flex flex-col items-center bg-gray-300">
      <nav className="py-2 text-white flex justify-center w-full bg-indigo-500 sm:bg-yellow-500 md:bg-orange-500 lg:bg-red-500">
        <VideoLibrary className=" fill-current" />
        <span className="ml-2 tracking-widest font-sans">NeetFlix</span>
      </nav>
      <div className=" mt-4 w-full text-center flex flex-col flex-grow overflow-hidden space-y-4 px-4">
        <h1>{catchPhrase}</h1>
        <div className="flex items-center p-2 bg-white rounded text-black text-sm">
          <input
            className="bg-transparent w-full outline-none"
            placeholder="Type to search..."
            onChange={(e) => setSearchString(e.target.value)}
          />
          <Search className="w-5 h-5 stroke-current" />
        </div>
        <div className="w-full">
          <h2>Search Results</h2>
          <div className="space-y-4 h-1/3 overflow-y-auto no-scrollbar p-4">
            {isFetched && records?.map((record) => recordJSX(record))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
