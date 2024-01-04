import { getApi } from "@/infrastructure";
import { LanguageParams } from "../request";

export type Genre = {
  id: number;
  name: string;
};

export type GetGenreResponse = {
  genres: Array<Genre>;
};

export type GetGenreRequestParams = LanguageParams & {};

export const getTVSerieGenres = async (params: GetGenreRequestParams) =>
  await getApi<GetGenreResponse>("genre/tv/list", {
    ...params,
  });

export const getMovieGenres = async (params: GetGenreRequestParams) =>
  await getApi<GetGenreResponse>("genre/movie/list", {
    ...params,
  });
