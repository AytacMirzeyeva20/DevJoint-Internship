import React from "react";

export default function MovieCard({ movie }) {
  const {
    title,
    poster_path,
    release_date,
    vote_average,
    overview,
  } = movie;

  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : "https://placehold.co/500x750?text=No+Image";

  const score = Math.round(vote_average * 10);

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-red-500/40 hover:shadow-2xl hover:shadow-red-500/20">
      <div className="relative aspect-2/3 overflow-hidden bg-slate-800">
        <img
          src={posterUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full bg-black/80 text-sm font-bold text-yellow-400 shadow-lg backdrop-blur-md">
          {score}%
        </div>
        <div className="absolute inset-0 flex items-end bg-linear-to-t from-black via-black/60 to-transparent p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
          <p className="line-clamp-6 text-sm leading-relaxed text-gray-200">
            {overview || "Təsvir mövcud deyil."}
          </p>
        </div>
      </div>
      <div className="space-y-2 p-4">
        <h3
          className="truncate text-lg font-bold text-white"
          title={title}
        >
          {title}
        </h3>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-400">
            {release_date}
          </span>
          <span className="rounded-full bg-red-500/10 px-2 py-1 text-xs font-semibold text-red-400">
            Movie
          </span>
        </div>
      </div>
    </article>
  );
}