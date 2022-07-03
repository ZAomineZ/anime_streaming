import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Header } from "../../components/Layout/Header";
import { genreList } from "../../utils/api/Genre";

const Genre: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Genre animes</title>
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
              Genres
            </p>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-2 md+:grid-cols-3 lgc:grid-cols-2 xlc:grid-cols-4 2xlc:grid-cols-5 3xlc:grid-cols-6">
              {genreList.map((genre) => {
                return (
                  <p
                    className="rounded-md bg-indigo-100 py-1 px-4 text-lg font-semibold text-indigo-500 shadow-lg shadow-indigo-200/20 transition duration-200 hover:-translate-y-1 hover:cursor-pointer hover:shadow-indigo-200/30"
                    onClick={() => router.push(`/genre/${genre.index}`)}
                  >
                    {genre.name}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </Header>
    </>
  );
};

export default Genre;
