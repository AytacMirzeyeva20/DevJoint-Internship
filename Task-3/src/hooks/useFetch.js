import { useEffect, useState } from "react";

const API_KEY = "293a085dd6c23c6a4bf35fb6d3c3e1a4";

export default function useFetch(search, page) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const url = search
      ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}&page=${page}`
      : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`;

    setLoading(true);
    setError("");

    fetch(url, {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Xəta baş verdi");
        }

        return res.json();
      })
      .then((data) => {
        setMovies(data.results || []);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, [search, page]);

  return { movies, loading, error };
}