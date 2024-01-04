import { getApi } from "@/infrastructure";
import { Genre } from ".";
import { PagedResponse } from "..";
import { CountryParams } from "../request";

export type Season = {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
  vote_average: number;
};

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
  seasons: Array<Season>;
  vote_average: number;
  vote_count: number;
};

export type TVSerieDetails = Omit<TVSerie, "genre_ids"> & {
  adult: boolean;
  genres: Array<Genre>;
  homepage: string;
  in_production: boolean;
  number_of_episodes: number;
  number_of_seasons: number;
  status: string;
  tagline: string;
  type: string;
};

export type TVSeriesRequestParams = CountryParams & {};

export const popularTVSeries = async (params: TVSeriesRequestParams) =>
  await getApi<PagedResponse<TVSerie>>("tv/popular", {
    page: 1,
    ...params,
  });

export const topRatedTVSeries = async (params: TVSeriesRequestParams) =>
  await getApi<PagedResponse<TVSerie>>("tv/top_rated", {
    page: 1,
    ...params,
  });

export const discoverTVSeries = async (params: TVSeriesRequestParams) =>
  await getApi<PagedResponse<TVSerie>>("discover/tv", {
    include_adult: true,
    include_null_first_air_dates: false,
    page: 1,
    sort_by: "popularity.desc",
    ...params,
  });

export const searchTVSeries = async (
  searchTerm: string,
  params: TVSeriesRequestParams
) =>
  await getApi<PagedResponse<TVSerie>>("search/tv", {
    query: searchTerm,
    include_adult: true,
    page: 1,
    ...params,
  });

export const tvSerieDetails = async (
  id: string,
  params: TVSeriesRequestParams
) =>
  await getApi<TVSerieDetails>(`tv/${id}`, {
    ...params,
  });
