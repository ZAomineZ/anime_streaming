import { AnimeGenre } from "./../../types/animes/genre";
export const genreList = [
  { name: "Action", index: "action" },
  { name: "Adventure", index: "adventure" },
  { name: "Cars", index: "cars" },
  { name: "Comedy", index: "comedy" },
  { name: "Crime", index: "crime" },
  { name: "Dementia", index: "dementia" },
  { name: "Demons", index: "demons" },
  { name: "Drama", index: "drama" },
  { name: "Dub", index: "dub" },
  { name: "Ecchi", index: "ecchi" },
  { name: "Family", index: "family" },
  { name: "Fantasy", index: "fantasy" },
  { name: "Game", index: "game" },
  { name: "Gourmet", index: "gourmet" },
  { name: "Harem", index: "harem" },
  { name: "Historical", index: "historical" },
  { name: "Horror", index: "horror" },
  { name: "Josei", index: "josei" },
  { name: "Kids", index: "kids" },
  { name: "Magic", index: "magic" },
  { name: "Martial-Arts", index: "martial-arts" },
  { name: "Mecha", index: "mecha" },
  { name: "Military", index: "military" },
  { name: "Mmusic", index: "Mmusic" },
  { name: "Mystery", index: "mystery" },
  { name: "Parody", index: "parody" },
  { name: "Police", index: "police" },
  { name: "Psychological", index: "psychological" },
  { name: "Romance", index: "romance" },
  { name: "Samurai", index: "samurai" },
  { name: "School", index: "school" },
  { name: "Sci-Fi", index: "sci-fi" },
  { name: "Seinen", index: "seinen" },
  { name: "Shoujo", index: "shoujo" },
  { name: "Shoujo-a", index: "shoujo-ai" },
  { name: "Shounen", index: "shounen" },
  { name: "Shounen-Ai", index: "shounen-ai" },
  { name: "Slice-of-Life", index: "slice-of-Life" },
  { name: "Space", index: "space" },
  { name: "Sports", index: "sports" },
  { name: "Super-powe", index: "super-power" },
  { name: "Supernatural", index: "supernatural" },
  { name: "Suspense", index: "suspense" },
  { name: "Thriller", index: "thriller" },
  { name: "Yaoi", index: "yaoi" },
  { name: "Yuri", index: "yuri" },
];

export function GenreAnimes(
  genre: string,
  page: number | string
): Promise<AnimeGenre> {
  return fetch(
    `https://gogoanime.herokuapp.com/genre/${genre}?page=${page}`
  ).then((r) => r.json());
}
