import { AnimeGenre } from "./../../types/animes/genre";
import { AnimeRecent, AnimeSearch } from "../../types/animes/anime";

export class Anime {
  public async search(input: string): Promise<AnimeSearch[]> {
    return fetch(`https://gogoanime.herokuapp.com/search?keyw=${input}`).then(
      (r) => r.json()
    );
  }

  public async movies(page: number = 1): Promise<AnimeGenre[]> {
    return fetch(
      `https://gogoanime.herokuapp.com/anime-movies?page=${page}`
    ).then((r) => r.json());
  }

  public async recentEpisodes(page: number = 1): Promise<AnimeRecent[]> {
    return fetch(
      `https://gogoanime.herokuapp.com/recent-release?page=${page}`
    ).then((r) => r.json());
  }
}
