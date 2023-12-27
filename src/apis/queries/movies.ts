import { getApi } from "@/infrastructure";
import { PagedResponse } from "..";

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

export const popularMovies = async () =>
  await getApi<PagedResponse<Movie>>("movie/popular", {
    language: "it-IT",
    page: 1,
  });

export const topRatedMovies = async () =>
  await getApi<PagedResponse<Movie>>("movie/top_rated", {
    language: "it-IT",
    page: 1,
  });
