import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
// Icon
import { LatestEpisodes } from "../components/LatestEpisodes";
import { TopAnime } from "../components/TopAnime";
import { Header } from "../components/Layout/Header";
import { AnimeRecent, AnimeTop } from "../types/animes/anime";
import { MoviesAnime } from "../components/MoviesAnime";
import { Anime } from "../utils/api/Anime";
import { AnimeGenre } from "../types/animes/genre";
import { SliderHeaderAnime } from "../components/sliders/SliderHeaderAnime";

interface HomeProps {
  animes: AnimeRecent[];
  animesTop: AnimeTop[];
  moviesAnime: AnimeGenre[];
}

const Home: NextPage<HomeProps> = ({
  animes,
  animesTop,
  moviesAnime,
}: HomeProps) => {
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
          <SliderHeaderAnime />
        </div>
        <img
          className="h-16 translate-y-5 object-contain"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/61c717ae-3d90-4186-bbef-9a7191eb6146/ddmainq-d4eb464c-826f-45e2-aed3-65b216ec12c8.png/v1/fill/w_891,h_720,strp/zenitsu_agatsuma_render___kimersu_no_yaiba_by_guntersw_ddmainq-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvNjFjNzE3YWUtM2Q5MC00MTg2LWJiZWYtOWE3MTkxZWI2MTQ2XC9kZG1haW5xLWQ0ZWI0NjRjLTgyNmYtNDVlMi1hZWQzLTY1YjIxNmVjMTJjOC5wbmciLCJ3aWR0aCI6Ijw9ODkxIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.zDQ6eyN_1iGepS-buOb9y83KvMdxEPMk6HCCjl2AyQY"
          alt="Zenitsu"
        />
        <div className="space-y-6 md:px-6">
          <div className="flex-row space-x-4 2xl:flex">
            <LatestEpisodes animesRecent={animes} />
            <TopAnime animesTop={animesTop} />
          </div>
          <MoviesAnime animes={moviesAnime} />
        </div>
      </Header>
    </>
  );
};

export async function getServerSideProps() {
  const resultTopAnime = await fetch(
    "https://gogoanime.herokuapp.com/top-airing"
  );

  const anime = new Anime();

  return {
    props: {
      animes: await anime.recentEpisodes(),
      animesTop: await resultTopAnime.json(),
      moviesAnime: await anime.movies(),
    },
  };
}

export default Home;
