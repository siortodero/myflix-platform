import { getApi } from "@/infrastructure";
import { Genre } from ".";
import { PagedResponse } from "..";
import { CountryParams, PaginationParams } from "../request";

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

export type MovieDetails = Omit<Movie, "genre_ids"> & {
  genres: Array<Genre>;
  homepage: string;
  imdb_id: string;
  status: string;
  tagline: string;
  runtime: number;
};

export type MoviesRequestParams = CountryParams & PaginationParams & {};

export const popularMovies = async (params: MoviesRequestParams) =>
  await getApi<PagedResponse<Movie>>("movie/popular", {
    ...params,
  });

export const topRatedMovies = async (params: MoviesRequestParams) =>
  await getApi<PagedResponse<Movie>>("movie/top_rated", {
    ...params,
  });

export const discoverMovies = async (params: MoviesRequestParams) =>
  await getApi<PagedResponse<Movie>>("discover/movie", {
    include_adult: true,
    include_video: false,
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
    ...params,
  });

export type MovieRequestParams = CountryParams & {};

export const movieDetails = async (id: string, params: MovieRequestParams) =>
  await getApi<MovieDetails>(`movie/${id}`, {
    ...params,
  });
