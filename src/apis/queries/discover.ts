import { getApi } from "@/infrastructure";
import { PagedResponse } from "..";
import { Movie } from "./movies";
import { TVSerie } from "./tvseries";

export const discoverTVSeries = async () =>
  await getApi<PagedResponse<TVSerie>>("discover/tv", {
    include_adult: true,
    include_null_first_air_dates: false,
    language: "it-IT",
    page: 1,
    sort_by: "popularity.desc",
  });

export const discoverMovies = async () =>
  await getApi<PagedResponse<Movie>>("discover/movie", {
    include_adult: true,
    include_video: false,
    language: "it-IT",
    page: 1,
    sort_by: "popularity.desc",
  });
