import { getApi } from "@/infrastructure";
import { PagedResponse } from "..";
import { CountryParams } from "../request";

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type MoviesRequestParams = CountryParams & {};

export const popularMovies = async (params: MoviesRequestParams) =>
  await getApi<PagedResponse<Movie>>("movie/popular", {
    page: 1,
    ...params,
  });

export const topRatedMovies = async (params: MoviesRequestParams) =>
  await getApi<PagedResponse<Movie>>("movie/top_rated", {
    page: 1,
    ...params,
  });

export const discoverMovies = async (params: MoviesRequestParams) =>
  await getApi<PagedResponse<Movie>>("discover/movie", {
    include_adult: true,
    include_video: false,
    page: 1,
    sort_by: "popularity.desc",
    ...params,
  });

export const searchMovies = async (
  searchTerm: string,
  params: MoviesRequestParams
) =>
  await getApi<PagedResponse<Movie>>("search/movie", {
    query: searchTerm,
    include_adult: true,
    page: 1,
    ...params,
  });
