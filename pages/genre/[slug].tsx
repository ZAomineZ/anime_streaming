import Head from "next/head";
import { useRouter } from "next/router";
import { CardAnimePopular } from "../../components/Anime/CardAnimePopular";
import { ChevronLeft } from "../../components/Icon/ChevronLeft";
import { ChevronRight } from "../../components/Icon/ChevronRight";
import { Header } from "../../components/Layout/Header";
import { AnimeGenre } from "../../types/animes/genre";
import { GenreAnimes } from "../../utils/api/Genre";

interface AnimeProps {
  animesGenre: AnimeGenre[];
  slug: string;
  page: number;
}

interface QueryGenreAnime {
  page: number;
}

function Genre({ animesGenre, slug, page }: AnimeProps) {
  const router = useRouter();

  const handleChangePage = (page: number) => {
    router.push(`/genre/${slug}?page=${page}`).then((r) => r);
  };

  console.log(animesGenre);

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
          <div className="z-50 space-y-8 rounded-3xl bg-white p-8">
            <p className="text-3xl font-bold text-gray-700 antialiased">
              Genre: {slug}
            </p>
            <div className="custom_col grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-2 md+:grid-cols-3 lgc:grid-cols-2 xlc:grid-cols-4 2xlc:grid-cols-5 3xlc:grid-cols-6">
              {animesGenre.length !== 0 &&
                animesGenre.map((anime) => {
                  return <CardAnimePopular anime={anime} key={anime.animeId} />;
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
}

export async function getServerSideProps(context: {
  params: { slug: string };
  query: QueryGenreAnime;
}) {
  const { query, params } = context;
  const { slug } = params;
  let page = query.page ?? 1;

  return {
    props: {
      animesGenre: await GenreAnimes(slug, page),
      slug,
      page,
    },
  };
}

export default Genre;
