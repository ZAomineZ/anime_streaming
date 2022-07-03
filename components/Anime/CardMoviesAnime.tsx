import { AnimeGenre } from "../../types/animes/genre";
import { useRouter } from "next/router";

interface CardMoviesAnimeProps {
  anime: AnimeGenre;
}

export function CardMoviesAnime({ anime }: CardMoviesAnimeProps) {
  const router = useRouter();

  const redirectStreamingMovie = (anime: AnimeGenre) => {
    router.push(`/anime/${anime.animeId}-episode-1`);
  };

  return (
    <div
      className="flex aspect-[2/3] h-56 cursor-pointer flex-col rounded-3xl bg-cover transition hover:scale-105 hover:saturate-150 lg:h-72"
      key={anime.animeId}
      style={{
        background: `url(${anime.animeImg}) no-repeat center center`,
        backgroundSize: "cover",
      }}
      onClick={() => redirectStreamingMovie(anime)}
    >
      <div className="grow p-4">
        <div className="w-min rounded-full bg-indigo-500 py-1 px-5 text-white">
          {anime.releasedDate && anime.releasedDate.length !== 0
            ? anime.releasedDate
            : "Unknown"}
        </div>
      </div>
      <div className="text-md w-full rounded-b-3xl bg-black/70 py-4 px-2 text-center font-medium text-white backdrop-opacity-50">
        <span className="line-clamp-2">{anime.animeTitle}</span>
      </div>
    </div>
  );
}
