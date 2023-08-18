import { useEffect, useState } from "react";
import { Filter } from "./components/Filter";
import { Jobs } from "./components/Jobs";
import { Search } from "./components/Search";
import data from './data.json'

function App() {

  const [ results, setResults ] = useState(data)

  return (
    <div className="grid grid-cols-[300px,1fr] gap-x-8">
      <h1 className="text-[#282538] text-2xl font-light"><span className="font-bold">Github</span> Jobs</h1>
      <Search setResults={setResults} />
      <Filter setResults={setResults} />
      <Jobs results={results} />
    </div>
  );
}

export default App;
