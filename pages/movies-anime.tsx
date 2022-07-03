import Head from "next/head";
import { Header } from "../components/Layout/Header";
import { Anime } from "../utils/api/Anime";
import { ChevronLeft } from "../components/Icon/ChevronLeft";
import { ChevronRight } from "../components/Icon/ChevronRight";
import { useRouter } from "next/router";
import { AnimeGenre } from "../types/animes/genre";
import { CardMoviesAnime } from "../components/Anime/CardMoviesAnime";

interface LatestEpisodesProps {
  moviesAnime: AnimeGenre[];
  page: number;
}

const MoviesAnime = ({ moviesAnime, page }: LatestEpisodesProps) => {
  const router = useRouter();

  const handleChangePage = (pageCurrent: number) => {
    router.push(`/movies-anime?page=${pageCurrent}`);
  };

  return (
    <>
      <Head>
        <title>Movies anime</title>
        <meta name="description" content="Anime streaming" />
        <link rel="icon" href="/favicon.ico" />
        {/* Font Google */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <Header>
        <br />
        <div className="space-y-6 md:px-6">
          <div className="z-50 space-y-8 rounded-3xl bg-white p-8">
            <p className="text-3xl font-bold text-gray-700 antialiased">
              Movies anime
            </p>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-2 md+:grid-cols-3 lgc:grid-cols-2 xlc:grid-cols-4 2xlc:grid-cols-5 3xlc:grid-cols-6 custom_col">
              {moviesAnime.length !== 0 &&
                moviesAnime.map((anime) => {
                  return <CardMoviesAnime anime={anime} key={anime.animeId} />;
                })}
            </div>
            <div className="flex space-x-2">
              <button
                className="rounded-full bg-indigo-500 p-2 text-xl text-white shadow-lg shadow-indigo-200 transition duration-200 hover:scale-105"
                onClick={() => handleChangePage(page - 1)}
              >
                <ChevronLeft />
              </button>
              <button
                className="rounded-full bg-indigo-500 p-2 text-xl text-white shadow-lg shadow-indigo-200 transition duration-200 hover:scale-105"
                onClick={() => handleChangePage(page + 1)}
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </Header>
    </>
  );
};

interface Context {
  query: {
    page?: number;
  };
}

export async function getServerSideProps({ query }: Context) {
  const page = query.page ?? 1;

  return {
    props: {
      moviesAnime: await new Anime().movies(page),
      page: parseInt(page),
    },
  };
}

export default MoviesAnime;
