import { getMovieGenres, getTVSerieGenres } from "@/apis/queries";
import { ManagedLanguages } from "@/infrastructure";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

export const useTVSerieGenres = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language as ManagedLanguages;

  return useQuery({
    queryKey: [lang, "genres", "tv-series"],
    queryFn: () => getTVSerieGenres({ language: lang }),
  });
};

export const useMovieGenres = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language as ManagedLanguages;

  return useQuery({
    queryKey: [lang, "genres", "movies"],
    queryFn: () => getMovieGenres({ language: lang }),
  });
};
