import { getApi } from "@/infrastructure";
import { PagedResponse } from "..";

export type TVSerie = {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: Array<number>;
  id: number;
  name: string;
  origin_country: Array<string>;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
};

export const popularTVSeries = async () =>
  await getApi<PagedResponse<TVSerie>>("tv/popular", {
    language: "it-IT",
    page: 1,
  });

export const topRatedTVSeries = async () =>
  await getApi<PagedResponse<TVSerie>>("tv/top_rated", {
    language: "it-IT",
    page: 1,
  });
