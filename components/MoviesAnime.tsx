import { AnimeGenre } from "../types/animes/genre";
import { CardMoviesAnime } from "./Anime/CardMoviesAnime";
import { useRouter } from "next/router";

type MoviesAnimeProps = {
  animes: AnimeGenre[];
};

export function MoviesAnime({ animes }: MoviesAnimeProps) {
  const router = useRouter();

  return (
    <div className="z-50 space-y-8 rounded-3xl bg-white p-8">
      <p className="text-3xl font-bold text-gray-700 antialiased">
        Movies anime
      </p>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-2 md+:grid-cols-3 lgc:grid-cols-2 xlc:grid-cols-4 2xlc:grid-cols-5 3xlc:grid-cols-6 custom_col">
        {animes.length !== 0 &&
          animes.map((anime) => {
            return <CardMoviesAnime anime={anime} key={anime.animeId} />;
          })}
      </div>
      <div className="flex space-x-2">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => router.push(`/movies-anime`)}
        >
          Voir+
        </button>
      </div>
    </div>
  );
}
