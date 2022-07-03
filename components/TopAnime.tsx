import { StarIcon } from "./Icon/StarIcon";
import { EpisodeIcon } from "./Icon/EpisodeIcon";
import { PlayIcon } from "./Icon/PlayIcon";
import { AnimeTop } from "../types/animes/anime";
import { useRouter } from "next/router";

type TopAnimeProps = {
  animesTop: AnimeTop[];
};

export function TopAnime({ animesTop }: TopAnimeProps) {
  const router = useRouter();

  return (
    <div className="hidden 2xl:inline 2xl:basis-1/4">
      <div className="w-full space-y-8 rounded-3xl bg-indigo-500 p-8">
        <p className="text-3xl font-bold text-white antialiased">Top Anime</p>
        <div className="grid grid-cols-1 space-y-6 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-1">
          {animesTop.length !== 0 &&
            animesTop.slice(0, 5).map((anime, index) => {
              return (
                <div
                  className="flex flex-row self-end"
                  key={anime.animeId}
                  onClick={() =>
                    router.push(`/anime/${anime.animeId}-episode-1`)
                  }
                >
                  <div className="self-center rounded-l-xl border-y-4 border-l-4 border-indigo-200 px-3 py-2 text-2xl text-indigo-200">
                    {index + 1}
                  </div>
                  <img
                    className="h-40 cursor-pointer rounded-xl transition hover:scale-105 hover:saturate-150"
                    src={anime.animeImg}
                    alt="Attack on Titan top"
                  />
                  <div className="inline-flex flex-col space-y-1 pl-4 2xl:hidden custom_col 3xlc:inline-flex">
                    <span className="text-lg font-semibold text-white antialiased line-clamp-2">
                      {anime.animeTitle}
                    </span>
                    <div className="flex flex-row">
                      <span className="flex flex-row items-center text-white">
                        <EpisodeIcon />
                        {anime.latestEp}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          <img
            className="mx-auto h-72 object-contain"
            src="https://i.pinimg.com/originals/17/37/21/173721246ff8546baedb7ef457f9d2c1.png"
            alt="Goku &amp; Vegeta"
          />
        </div>
      </div>
    </div>
  );
}
