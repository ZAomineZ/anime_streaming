import { Sidebar } from "./Sidebar";
import { MenuButtonIcon } from "../Icon/MenuButtonIcon";
import { SearchIcon } from "../Icon/SearchIcon";
import { SearchAnime } from "../Anime/SearchAnime";
import React, { useState } from "react";
import { Anime } from "../../utils/api/Anime";
import { AnimeSearch } from "../../types/animes/anime";

type HeaderProps = {
  children: JSX.Element | JSX.Element[];
};

export function Header({ children }: HeaderProps) {
  const animeAPI = new Anime();
  // STATE
  const [searchAnimes, setSearchAnimes] = useState<AnimeSearch[]>([]);
  const [searchAnimeEnable, setSearchAnimeEnable] = useState<boolean>(false);

  const handleChangeSearchAnime = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    setSearchAnimeEnable(true);
    // fetch search anime request
    let searchValue = e.currentTarget.value ?? "";
    if (searchValue !== "") setSearchAnimes(await animeAPI.search(searchValue));
    else setSearchAnimeEnable(false);
  };

  return (
    <div className="min-h-screen bg-gray-200 selection:bg-sky-400 selection:text-white">
      <div className="flex flex-row scroll-smooth">
        {/* SIDEBAR */}
        <Sidebar />
        {/* HEADER */}
        <div className="w-full p-6 md:p-10">
          <div className="flex flex-row items-center md:pr-6" id="navbar">
            <div className="mr-6 self-center text-left">
              <div className="relative inline-block text-left">
                <div>
                  <button
                    className="inline-flex justify-center rounded-full bg-indigo-500 px-4 py-2 shadow-xl shadow-indigo-100 transition hover:scale-105 hover:bg-indigo-600 hover:shadow-indigo-200 focus:outline-none md:hidden"
                    id="menu-button"
                    type="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <MenuButtonIcon />
                  </button>
                </div>
              </div>
            </div>
            <div className="mr-10 hidden w-min rounded-l-3xl rounded-tr-3xl bg-teal-400 px-3 py-2 text-xl font-bold text-white shadow-lg shadow-teal-200 lg:inline-flex">
              Welcome!
            </div>
            <div className="relative z-50 mt-1 w-full md:w-2/5">
              <div className="relative w-full cursor-default overflow-hidden rounded-full bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                <input
                  type="text"
                  autoComplete="off"
                  className="w-full border-none bg-gray-300 py-3 pl-3 pr-10 text-sm leading-5 text-gray-800 outline-none focus:ring-0"
                  placeholder="Search..."
                  role="search"
                  onChange={handleChangeSearchAnime}
                />
                <button
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                  id="button-search-header"
                  tabIndex={-1}
                >
                  <SearchIcon />
                </button>
              </div>
              {searchAnimeEnable && <SearchAnime animes={searchAnimes} />}
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
