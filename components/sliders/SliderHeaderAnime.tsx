import { ChevronRight } from "../Icon/ChevronRight";
import { WatchIcon } from "../Icon/WatchIcon";
import { ChevronLeft } from "../Icon/ChevronLeft";
import styles from "../../styles/Home.module.css";
import { useState, useEffect, useCallback } from "react";
import internal from "stream";
import { useRouter } from "next/router";

type SliderAnime = {
  url: string;
  name: string;
  id: string;
  active: boolean;
};

export function SliderHeaderAnime() {
  const [sliderAnimes, setSliderAnimes] = useState<SliderAnime[]>([
    {
      url: "https://img.animeworld.tv/slider/91.jpg",
      name: "One Piece",
      id: "one-piece",
      active: true,
    },
    {
      url: "https://img.animeworld.tv/slider/110.png",
      name: "Kaguya-sama: Love Is War",
      id: "kaguya-sama-wa-kokurasetai-tensai-tachi-no-renai-zunousen",
      active: false,
    },
    {
      url: "https://img.animeworld.tv/slider/104.png",
      name: "Shingeki no Kyojin",
      id: "shingeki-no-kyojin",
      active: false,
    },
  ]);
  const [currentSliderAnime, setCurrentSliderAnime] =
    useState<SliderAnime | null>(
      sliderAnimes.find((item) => item.active) ?? null
    );

  const router = useRouter();

  const changeSliderAnime = useCallback(
    (direction = "next") => {
      const keyActiveSliderAnime = sliderAnimes.findIndex(
        (item) => item.active
      );
      const sliderAnimesCopy = sliderAnimes;
      let currentAnimeSlider = null as SliderAnime | null;
      if (direction === "next") {
        let key =
          keyActiveSliderAnime === sliderAnimes.length - 1
            ? 0
            : keyActiveSliderAnime + 1;
        currentAnimeSlider = sliderAnimesCopy[key];
        sliderAnimesCopy[key].active = true;
      }
      if (direction === "prev") {
        let key =
          keyActiveSliderAnime === 0
            ? sliderAnimes.length - 1
            : keyActiveSliderAnime - +1;
        currentAnimeSlider = sliderAnimesCopy[key];
        sliderAnimesCopy[key].active = true;
      }
      sliderAnimesCopy[keyActiveSliderAnime].active = false;

      setSliderAnimes(sliderAnimesCopy);
      setCurrentSliderAnime(currentAnimeSlider);
    },
    [setSliderAnimes]
  );

  useEffect(() => {
    let interval = null as any;
    if (sliderAnimes.length !== 0) {
      interval = setInterval(changeSliderAnime, 5000);
    }
    return () => clearInterval(interval);
  }, [sliderAnimes]);

  return (
    <div
      className={`flex h-80 w-full flex-row items-end rounded-3xl bg-cover bg-center transition-all duration-500 ease-in-out md:h-72 lg:h-80 ${styles["header-carousel-anime"]}`}
      style={{
        backgroundImage: `url(${currentSliderAnime?.url})`,
      }}
    >
      <div className="space-y-6 p-12">
        <p className="text-3xl font-bold text-white antialiased drop-shadow-2xl lg:text-4xl">
          {currentSliderAnime?.name}
        </p>
        <div
          className="flex w-min cursor-pointer flex-row items-center space-x-2 rounded-full bg-teal-400 px-6 py-2 text-lg font-semibold text-white shadow-lg shadow-teal-500 transition hover:scale-105 hover:bg-teal-500 hover:shadow-teal-600"
          onClick={() =>
            router.push(`/anime/${currentSliderAnime?.id}-episode-1`)
          }
        >
          <span>Watch</span>
          <WatchIcon />
        </div>
      </div>
      <div className="ml-auto inline-flex space-x-4 py-12 pr-6 xl:hidden">
        <div
          className="cursor-pointer rounded-full bg-white p-2 shadow-xl shadow-indigo-200 transition hover:bg-gray-200"
          onClick={() => changeSliderAnime("prev")}
        >
          <ChevronLeft className="text-indigo-800" />
        </div>
        <div
          className="cursor-pointer rounded-full bg-white p-2 shadow-xl shadow-indigo-200 transition hover:bg-gray-200"
          onClick={() => changeSliderAnime()}
        >
          <ChevronRight className="text-indigo-800" />
        </div>
      </div>
      <div className="ml-auto hidden py-12 xl:inline-flex">
        <div className="flex flex-row items-center space-x-6 rounded-l-3xl bg-white/30 p-5 backdrop-blur-xl back-drop-brightness-150 transition-all">
          {sliderAnimes.length !== 0 &&
            sliderAnimes.map((sliderAnime, index) => (
              <img
                className={`aspect-[16/9] w-32 cursor-pointer rounded-xl object-cover transition hover:scale-105 ${
                  sliderAnime.active ? "animate-pulse" : ""
                }`}
                src={sliderAnime.url}
                alt=""
              />
            ))}
          <div
            className="cursor-pointer rounded-full bg-white p-2 shadow-xl shadow-xl shadow-indigo-200 transition hover:bg-gray-200"
            onClick={() => changeSliderAnime()}
          >
            <ChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
}
