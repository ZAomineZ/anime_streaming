import { AnimeSearch } from "../../types/animes/anime";
import Image from "next/image";
import { useRouter } from "next/router";

type AnimeSearchItemProps = {
  anime: AnimeSearch;
};

export function AnimeSearchItem({ anime }: AnimeSearchItemProps) {
  const router = useRouter();

  return (
    <li
      className="relative cursor-pointer select-none py-2 px-4 transition duration-200 text-gray-900"
      id="search_anime_item"
      role="option"
      onClick={() =>
        router.push(`/anime/${anime.animeId}-episode-1`).then((r) => r)
      }
    >
      <span className="flex items-center space-x-2">
        <img
          className="h-12 rounded-sm"
          src={anime.animeImg}
          alt="One Piece search bar"
        />
        <span className="block truncate font-normal">{anime.animeTitle}</span>
      </span>
    </li>
  );
}
