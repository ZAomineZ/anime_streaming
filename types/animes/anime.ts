import { episode } from "./episode";

export type AnimeRecent = {
  animeImg: string;
  animeTitle: string;
  episodeId: string;
  episodeNum: string;
  episodeUrl: string;
  subOrDub: string;
};

export type AnimePopular = {
  animeId: string;
  animeTitle: string;
  animeImg: string;
  releasedDate: string;
  animeUrl: string;
};

export type AnimeStreaming = {
  Referer: string;
};

export type AnimeDetail = {
  animeTitle: string;
  type: string;
  status: string;
  releasedDate: string;
  genres: string[];
  otherNames: string;
  synopsis: string;
  animeImg: string;
  totalEpisodes: string;
  episodesList: episode[];
};

export type AnimeSearch = {
  animeId: string;
  animeTitle: string;
  animeUrl: string;
  animeImg: string;
  status: string;
};

export type AnimeTop = {
  animeId: string;
  animeTitle: string;
  animeImg: string;
  latestEp: string;
  animeUrl: string;
  genres: string[];
};
