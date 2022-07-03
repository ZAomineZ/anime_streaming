import {
  AnimeDetail,
  AnimePopular,
  AnimeRecent,
} from "../../types/animes/anime";
import { useRouter } from "next/router";

type CardAnimeProps = {
  anime: AnimeRecent;
};

export function CardAnime({ anime }: CardAnimeProps) {
  const router = useRouter();

  const handleRedirectEpisode = (episodeID: string) => {
    router.push(`/anime/${episodeID}`).then((r) => r);
  };

  return (
    <div
      className="flex aspect-[2/3] h-56 cursor-pointer flex-col rounded-3xl bg-cover transition hover:scale-105 hover:saturate-150 lg:h-72"
      style={{
        background: `url(${anime.animeImg}) center center / cover no-repeat`,
      }}
      onClick={() => handleRedirectEpisode(anime.episodeId)}
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
}
