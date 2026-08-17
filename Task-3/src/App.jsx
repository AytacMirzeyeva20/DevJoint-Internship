import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import ResultList from "./components/ResultList";
import Pagination from "./components/Pagination";
import useFetch from "./hooks/useFetch";
const API_KEY = "293a085dd6c23c6a4bf35fb6d3c3e1a4";
function App() {
const[search,setSearch]=useState("");
const [debouncedSearch, setDebouncedSearch] = useState("");
const [page, setPage] = useState(1);
const { movies, loading, error } = useFetch(debouncedSearch, page);
   useEffect(() => {
  const timer = setTimeout(() => {
    setDebouncedSearch(search);
  }, 500);
  return () => clearTimeout(timer);
}, [search]);

  return (
    <>
      <Navbar />
         <SearchBar search={search} setSearch={setSearch} />
{loading ? (
  <h1 className="text-center text-white text-3xl py-20">
    Loading...
  </h1>
) : error ? (
  <h1 className="text-center text-red-500 text-3xl py-20">
    {error}
  </h1>
) : movies.length === 0 ? (
  <h1 className="text-center text-gray-400 text-3xl py-20">
    No movies found.
  </h1>
) : (
  <ResultList movies={movies} />
)}
 <Pagination page={page}  setPage={setPage}/>
   
    </>
  );
}

export default App;

