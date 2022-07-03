import Image from "next/image";
import LogoHeader from "../../public/logo.webp";
import { HomeIcon } from "../Icon/HomeIcon";
import { PopularIcon } from "../Icon/PopularIcon";
import { GenreIcon } from "../Icon/GenreIcon";
import { useRouter } from "next/router";
import { RecentAnimesIcon } from "../Icon/RecentAnimesIcon";
import { MoviesAnimeIcon } from "../Icon/MoviesAnimeIcon";

export function Sidebar() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col py-6 md:pl-6">
      <div className="hidden flex-1 md:inline-flex md:w-48 lg:w-64"></div>
      <div className="fixed h-full pb-16">
        <div className="hidden h-full flex-1 flex-col space-y-12 rounded-3xl bg-white p-8 scrollbar-hide md:inline-flex md:w-48 lg:w-64">
          <Image src={LogoHeader} />
          <div className="flex h-full flex-1 flex-col space-y-12">
            <ul className="space-y-1">
              <li
                className="flex cursor-pointer flex-row items-center space-x-3 rounded-lg p-2 text-lg font-medium text-gray-600 transition ease-in-out hover:-translate-y-1 hover:bg-indigo-400 hover:text-white"
                onClick={() => router.push("/").then((r) => r)}
              >
                <HomeIcon />
                <span>Home</span>
              </li>
              <li
                className="flex cursor-pointer flex-row items-center space-x-3 rounded-lg p-2 text-lg font-medium text-gray-600 transition ease-in-out hover:-translate-y-1 hover:bg-indigo-400 hover:text-white"
                onClick={() => router.push("/popular").then((r) => r)}
              >
                <PopularIcon />
                <span>Popular</span>
              </li>
              <li
                className="flex cursor-pointer flex-row items-center space-x-3 rounded-lg p-2 text-lg font-medium text-gray-600 transition ease-in-out hover:-translate-y-1 hover:bg-indigo-400 hover:text-white"
                onClick={() => router.push("/genre").then((r) => r)}
              >
                <GenreIcon />
                <span>Genre</span>
              </li>
              <li
                className="flex cursor-pointer flex-row items-center space-x-3 rounded-lg p-2 text-lg font-medium text-gray-600 transition ease-in-out hover:-translate-y-1 hover:bg-indigo-400 hover:text-white"
                onClick={() => router.push("/latest-episodes").then((r) => r)}
              >
                <RecentAnimesIcon />
                <span>Latest Episodes</span>
              </li>
              <li
                className="flex cursor-pointer flex-row items-center space-x-3 rounded-lg p-2 text-lg font-medium text-gray-600 transition ease-in-out hover:-translate-y-1 hover:bg-indigo-400 hover:text-white"
                onClick={() => router.push("/movies-anime").then((r) => r)}
              >
                <MoviesAnimeIcon />
                <span>Movies anime</span>
              </li>
            </ul>
            <div className="flex flex-col space-y-5">
              <span className="text-sm font-medium uppercase tracking-widest text-gray-400">
                Favourites
              </span>
              <span className="duration-400 flex cursor-pointer flex-row items-center space-x-4 rounded-lg bg-gradient-to-r from-teal-500 to-indigo-400 text-white shadow-lg shadow-teal-100 transition ease-in-out hover:-translate-y-1 hover:shadow-teal-200">
                <img
                  className="h-12 rounded-l-lg object-contain"
                  src="https://media.kitsu.io/anime/poster_images/10089/medium.jpg?1597697270"
                  alt="naruto"
                />
                <span className="text-lg font-medium antialiased">Naruto</span>
              </span>
              <span className="duration-400 flex cursor-pointer flex-row items-center space-x-4 rounded-lg bg-gradient-to-r from-teal-500 to-indigo-400 text-white shadow-lg shadow-teal-100 transition ease-in-out hover:-translate-y-1 hover:shadow-teal-200">
                <img
                  className="h-12 rounded-l-lg object-contain"
                  src="https://media.kitsu.io/anime/poster_images/10089/medium.jpg?1597697270"
                  alt="naruto"
                />
                <span className="text-lg font-medium antialiased">Naruto</span>
              </span>
              <span className="duration-400 flex cursor-pointer flex-row items-center space-x-4 rounded-lg bg-gradient-to-r from-teal-500 to-indigo-400 text-white shadow-lg shadow-teal-100 transition ease-in-out hover:-translate-y-1 hover:shadow-teal-200">
                <img
                  className="h-12 rounded-l-lg object-contain"
                  src="https://media.kitsu.io/anime/poster_images/10089/medium.jpg?1597697270"
                  alt="naruto"
                />
                <span className="text-lg font-medium antialiased">Naruto</span>
              </span>
            </div>
            <div className="flex h-full items-end">
              <p className="text-sm font-medium text-gray-500">
                Kami Watch Copyright © 2022
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
