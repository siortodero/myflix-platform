import { getApi } from "@/infrastructure";

export type Genre = {
  id: number;
  name: string;
};

export type GetGenreResponse = {
  genres: Array<Genre>;
};

export const getTVSerieGenres = async () =>
  await getApi<GetGenreResponse>("genre/tv/list", {
    language: "it",
  });

export const getMovieGenres = async () =>
  await getApi<GetGenreResponse>("genre/movie/list", {
    language: "it",
  });
