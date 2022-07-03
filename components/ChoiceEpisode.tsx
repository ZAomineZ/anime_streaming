import { useEffect, useState } from "react";
import { chunk } from "../utils/Array/Array";
import { useRouter } from "next/router";

type ChoiceEpisodeProps = {
  episodeTotal: number | string;
  animeSlug: string;
  animeEpisode: string | number;
};

export function ChoiceEpisode({
  episodeTotal,
  animeSlug,
  animeEpisode,
}: ChoiceEpisodeProps) {
  const router = useRouter();
  const [paginationGroup, setPaginationGroup] = useState<number[][]>([]);
  const [paginationPages, setPaginationPages] = useState<number[]>([]);

  useEffect(() => {
    // Pagination episodes anime
    let animePages = [];
    for (let i = 1; i <= episodeTotal; i++) {
      animePages.push(i);
    }

    let groupPagination = chunk(animePages, 9);
    setPaginationGroup(groupPagination);
    setPaginationPages(groupPagination[0]);
  }, [episodeTotal]);

  const handleChunkPagination = (index: number) => {
    setPaginationPages(paginationGroup[index] ?? []);
  };

  const handlePage = (page: number) => {
    router.push(`/anime/${animeSlug}-episode-${page}`).then((r) => r);
  };

  return (
    <div className="space-y-8 rounded-xl bg-white p-5">
      <div className="my-4 bg-gradient-to-r from-indigo-300 via-indigo-600 bg-clip-text text-2xl font-semibold text-transparent">
        <span className="rounded-xl border-2 border-indigo-200 p-2">
          Episode {animeEpisode}
        </span>
      </div>
      <div id="tabs_episodes">
        <ul className="mb-8 grid grid-cols-3 items-end gap-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-4 3xlc:grid-cols-6 custom_col">
          {paginationPages &&
            paginationGroup.length !== 0 &&
            paginationGroup.map((paginationPage, index) => {
              return (
                <li
                  className="w-28 cursor-pointer rounded-full bg-indigo-500 py-1 px-3 text-center font-semibold text-white shadow-md shadow-indigo-200 transition-all hover:gb-indigo-600"
                  role="tab"
                  id="episodes-choice-tabs"
                  aria-selected="true"
                  aria-disabled="false"
                  aria-controls="episodes-choice-1"
                  tabIndex={0}
                  key={index + 1}
                  onClick={() => handleChunkPagination(index)}
                >
                  {paginationPage[0]} -{" "}
                  {paginationPage[paginationPage.length - 1]}
                </li>
              );
            })}
        </ul>
        <div
          className="grid grid-cols-6 items-end gap-y-4 sm:grid-col-10 md:grid-cols-7 lg:grid-cols-10 xl:grid-cols-12 2xl:grid-cols-10 3xlc:grid-cols-12 custom_col"
          role="tabpanel"
          id="episodes-choice-1"
          aria-labelledby="episodes-choice-0"
        >
          {paginationPages &&
            paginationPages.length !== 0 &&
            paginationPages.map((page, index) => {
              return (
                <div
                  className="w-12 cursor-pointer rounded-xl bg-teal-500 p-1 text-center font-semibold text-white transition hover:scale-105 hover:bg-teal-600"
                  key={index + 1}
                  onClick={() => handlePage(page)}
                >
                  {page}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
