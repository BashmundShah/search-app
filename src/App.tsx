import React from "react";
import { useGetRecordsByNameQueryQuery } from "./services/odmb";

function App() {
  const catchPhrase = "Unlimited movies, TV shows, and more. Watch anywhere.";
  const [searchString, setSearchString] = React.useState("");
  const { data, error, isLoading } =
    useGetRecordsByNameQueryQuery(searchString);
  React.useEffect(() => {
    console.log("data:", data);
    console.log("error: ", error);
    console.log("isLoading: ", isLoading);
  }, [data]);
  return (
    <div className="w-full h-screen flex flex-col items-center bg-slate-500">
      <nav className="py-2 w-full bg-green-500 sm:bg-yellow-500 md:bg-orange-500 lg:bg-red-500 text-center">
        Search App
      </nav>
      <div className="bg-slate-300 w-full h-full p-8 flex flex-col items-center">
        <input
          className="mb-8"
          onChange={(e) => setSearchString(e.target.value)}
        ></input>
        <h1 className="w-full text-center">{catchPhrase}</h1>
      </div>
    </div>
  );
}

export default App;
