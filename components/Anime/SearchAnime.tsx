import { AnimeSearchItem } from "./AnimeSearchItem";
import { AnimeSearch } from "../../types/animes/anime";

export type SearchAnimeProps = {
  animes: AnimeSearch[];
};

export function SearchAnime({ animes }: SearchAnimeProps) {
  return (
    <ul
      className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
      role="listbox"
      id="search_anime_list"
    >
      {animes.length === 0 && (
        <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
          Nothing found.
        </div>
      )}
      {animes.length !== 0 &&
        animes.map((anime) => (
          <AnimeSearchItem anime={anime} key={anime.animeId} />
        ))}
    </ul>
  );
}
