import { AnimeRecent } from "../types/animes/anime";
import { CardAnime } from "./Anime/CardAnime";
import { useRouter } from "next/router";

interface LatestEpisodesProps {
  animesRecent: AnimeRecent[];
}

export function LatestEpisodes({ animesRecent }: LatestEpisodesProps) {
  const router = useRouter();

  return (
    <div className="2xl:basis-9/12">
      <div className="z-50 space-y-8 rounded-3xl bg-white p-8">
        <p className="text-3xl font-bold text-gray-700 antialiased">
          Latest Episodes
        </p>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-2 md+:grid-cols-3 lgc:grid-cols-2 xlc:grid-cols-3 2xlc:grid-cols-3 3xlc:grid-cols-5 custom_col">
          {animesRecent.length !== 0 &&
            animesRecent.map((anime) => {
              return <CardAnime anime={anime} key={anime.episodeId} />;
            })}
        </div>
        <div className="flex space-x-2">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => router.push(`/latest-episodes`)}
          >
            Voir+
          </button>
        </div>
      </div>
    </div>
  );
}
