import { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/Layout/Header";
import { AnimePopular } from "../types/animes/anime";
import { CardAnimePopular } from "../components/Anime/CardAnimePopular";
import { ChevronLeft } from "../components/Icon/ChevronLeft";
import { ChevronRight } from "../components/Icon/ChevronRight";
import { useRouter } from "next/router";

type PopularProps = {
  popularAnimes: AnimePopular[];
  page: number;
};

type QueryPopular = {
  page: string;
};

const Popular: NextPage<PopularProps> = ({ popularAnimes, page }) => {
  const router = useRouter();

  const handleChangePage = (page: number) => {
    router.push(`/popular?page=${page}`).then((r) => r);
  };

  return (
    <>
      <Head>
        <title>Popular animes</title>
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
              Popular
            </p>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-2 md+:grid-cols-3 lgc:grid-cols-2 xlc:grid-cols-4 2xlc:grid-cols-5 3xlc:grid-cols-6 custom_col">
              {popularAnimes.length !== 0 &&
                popularAnimes.map((anime) => {
                  return <CardAnimePopular key={anime.animeId} anime={anime} />;
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

export async function getServerSideProps({ query }: { query: QueryPopular }) {
  let page = query.page ?? 1;
  const result = await fetch(
    `https://gogoanime.herokuapp.com/popular?page=${page}`
  );

  return {
    props: {
      popularAnimes: await result.json(),
      page: parseInt(page),
    },
  };
}

export default Popular;
