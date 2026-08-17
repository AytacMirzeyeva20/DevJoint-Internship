import MovieCard from "./MovieCard";

export default function ResultList({ movies }) {
  return (
    <div className="grid grid-cols-1 gap-8 px-8 py-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}