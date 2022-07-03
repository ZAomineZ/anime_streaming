import { AnimeRecent } from "../types/animes/anime";
import { useRouter } from "next/router";

type NewEpisodesProps = {
  animesRecent: AnimeRecent[];
};

export function NewEpisodes({ animesRecent }: NewEpisodesProps) {
  const router = useRouter();

  const handleRedirectEpisode = (episodeID: string) => {
    router.push(`/anime/${episodeID}`).then((r) => r);
  };

  return (
    <div className="z-50 space-y-8 rounded-3xl bg-white p-8">
      <p className="text-3xl font-bold text-gray-700 antialiased">
        New Episodes
      </p>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-2 md+:grid-cols-3 lgc:grid-cols-2 xlc:grid-cols-4 2xlc:grid-cols-2 3xlc:grid-cols-3 custom_col">
        {animesRecent.length !== 0 &&
          animesRecent.map((anime) => {
            return (
              <div
                style={{
                  background: `url(${anime.animeImg}) no-repeat center center`,
                  backgroundSize: "cover",
                }}
                className="flex aspect-[2/3] h-56 cursor-pointer flex-col rounded-3xl bg-cover transition hover:scale-105 hover:saturate-150 lg:h-72"
                onClick={() => handleRedirectEpisode(anime.episodeId)}
                key={anime.episodeId}
              >
                <div className="grow p-4">
                  <div className="w-min rounded-full bg-indigo-500 py-1 px-5 text-white">
                    ep.{anime.episodeNum}
                  </div>
                </div>
                <div className="text-md w-full rounded-b-3xl bg-black/70 py-4 px-2 text-center font-medium text-white backdrop-opacity-50">
                  <span className="line-clamp-2">{anime.animeTitle}</span>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
