import Head from "next/head";
import { Header } from "../../components/Layout/Header";
import styles from "../../styles/Anime.module.css";
import { ChoiceEpisode } from "../../components/ChoiceEpisode";
import { NewEpisodes } from "../../components/NewEpisodes";
import {
  AnimeDetail,
  AnimeRecent,
  AnimeStreaming,
} from "../../types/animes/anime";
import { useRouter } from "next/router";

interface AnimeProps {
  streamingAnime: AnimeStreaming;
  animeDetail: AnimeDetail;
  recentAnimes: AnimeRecent[];
  animeSlug: string;
  animeEpisode: string | number;
}

function Anime({
  streamingAnime,
  animeDetail,
  recentAnimes,
  animeSlug,
  animeEpisode,
}: AnimeProps) {
  return (
    <>
      <Head>
        <title>Anime Streaming</title>
        <meta name="description" content="Anime streaming" />
        <link rel="icon" href="/favicon.ico" />
        {/* Font Google */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <Header>
        <div className="py-6 md:px-6">
          <div
            style={{
              backgroundImage:
                "url(https://media.kitsu.io/anime/43691/cover_image/tiny-db764a0c17d399aac3ef33ec40915c9a.jpeg)",
            }}
            className={`md:h-42 flex h-40 w-full flex-row items-end rounded-3xl bg-cover bg-center lg:h-48 ${styles["anime-header"]}`}
          ></div>
          <div className="md:space-x-34 flex h-[84px] flex-row items-stretch space-x-32 space-y-4 lg:space-x-36 xl:h-[116px] xl:space-x-56">
            <img
              className="absolute top-48 left-10 h-36 rounded-xl shadow-xl md:top-52 md:left-[300px] lg:top-60 lg:left-[370px] xl:top-44 xl:left-96 xl:h-60"
              src={animeDetail.animeImg}
              alt={animeDetail.animeImg}
            />
            <div className="inline-flex flex-row items-center space-x-8 rounded-xl bg-indigo-500 px-8 py-5 text-white">
              <div className="flex flex-col space-y-1">
                <div className="text-md font-semibold antialiased line-clamp-2 xl:text-2xl">
                  {animeDetail.animeTitle}
                </div>
                <div className="hidden text-sm text-gray-100 xl:inline-flex">
                  {animeDetail.animeTitle}
                  {animeDetail.otherNames}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6 md:px-6">
          <div className="flex-row space-x-4 2xl:flex">
            <div className="space-y-4 2xl:basis-1/2">
              <iframe
                src={streamingAnime.Referer}
                allowFullScreen
                frameBorder="0"
                marginWidth={0}
                marginHeight={0}
                scrolling="no"
                className="aspect-[4/3] h-auto w-full 2xl:aspect-video"
              ></iframe>
              <div className="space-y-6 rounded-xl bg-indigo-500 p-6">
                <span className="text-2xl font-bold text-white">
                  Anime Info
                </span>
                <div className="flex flex-col">
                  <div className="flex flex-row space-x-6">
                    <img
                      className="w-32 rounded-xl object-contain shadow-xl"
                      src={animeDetail.animeImg}
                      alt={animeDetail.animeTitle}
                    />
                    <div className="flex flex-col space-y-4">
                      <span className="text-xl font-semibold text-white">
                        {animeDetail.animeTitle}
                      </span>
                      <div className="flex flex-row space-x-12">
                        <div className="flex flex-col">
                          <span className="text-white">
                            Synopsis: {animeDetail.synopsis}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-row space-x-16">
                        <div className="flex flex-col">
                          <span className="text-white">
                            Episode Count: {animeDetail.totalEpisodes}
                          </span>
                          <span className="text-white">
                            Launch Date: {animeDetail.releasedDate}
                          </span>
                          <span className="text-white">
                            Genre:{" "}
                            {animeDetail.genres &&
                              animeDetail.genres.join(", ")}
                          </span>
                          <span className="text-white">
                            Status: {animeDetail.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden space-y-6 2xl:inline 2xl:basis-1/2">
              <ChoiceEpisode
                episodeTotal={animeDetail.totalEpisodes}
                animeEpisode={animeEpisode}
                animeSlug={animeSlug}
              />
              <NewEpisodes animesRecent={recentAnimes} />
            </div>
          </div>
        </div>
      </Header>
    </>
  );
}

export async function getServerSideProps(context: {
  params: { slug: string };
}) {
  const { slug } = context.params;

  let animeSlugData = slug.split("episode");
  let animeSlug =
    animeSlugData.length !== 0 ? animeSlugData[0].slice(0, -1) : null;
  let animeEpisode =
    animeSlugData.length !== 0 ? animeSlugData[1].slice(1) : null;

  const resultWatchAnime = await fetch(
    `https://gogoanime.herokuapp.com/vidcdn/watch/${slug}`
  );
  const resultAnimeDetail = await fetch(
    `https://gogoanime.herokuapp.com/anime-details/${animeSlug}`
  );
  const resultRecentAnimes = await fetch(
    `https://gogoanime.herokuapp.com/recent-release`
  );

  return {
    props: {
      streamingAnime: await resultWatchAnime.json(),
      animeDetail: await resultAnimeDetail.json(),
      recentAnimes: await resultRecentAnimes.json(),
      animeSlug,
      animeEpisode,
    },
  };
}

export default Anime;
