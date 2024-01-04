import {
  discoverMovies,
  popularMovies,
  searchMovies,
  topRatedMovies,
} from "@/apis/queries";
import { ManagedCountries } from "@/infrastructure";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

export const usePopularMovies = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language as ManagedCountries;

  return useQuery({
    queryKey: [lang, "movies", "popular"],
    queryFn: () => popularMovies({ language: lang }),
  });
};

export const useTopRatedMovies = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language as ManagedCountries;

  return useQuery({
    queryKey: [lang, "movies", "top-rated"],
    queryFn: () => topRatedMovies({ language: lang }),
  });
};

export const useDiscoverMovies = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language as ManagedCountries;

  return useQuery({
    queryKey: [lang, "movies", "discover"],
    queryFn: () => discoverMovies({ language: lang }),
  });
};

export const useSearchMovies = (searchTerm: string) => {
  const { i18n } = useTranslation();
  const lang = i18n.language as ManagedCountries;

  return useQuery({
    queryKey: [lang, "movies", "search"],
    queryFn: () => searchMovies(searchTerm, { language: lang }),
  });
};
