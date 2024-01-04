import {
  discoverTVSeries,
  popularTVSeries,
  searchTVSeries,
  topRatedTVSeries,
  tvSerieDetails,
} from "@/apis/queries";
import { ManagedCountries } from "@/infrastructure";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

export const usePopularSeries = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language as ManagedCountries;

  return useQuery({
    queryKey: [lang, "tv-series", "popular"],
    queryFn: () => popularTVSeries({ language: lang }),
  });
};

export const useTopRatedSeries = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language as ManagedCountries;

  return useQuery({
    queryKey: [lang, "tv-series", "top-rated"],
    queryFn: () => topRatedTVSeries({ language: lang }),
  });
};

export const useDiscoverSeries = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language as ManagedCountries;

  return useQuery({
    queryKey: [lang, "tv-series", "discover"],
    queryFn: () => discoverTVSeries({ language: lang }),
  });
};

export const useSearchSeries = (searchTerm: string) => {
  const { i18n } = useTranslation();
  const lang = i18n.language as ManagedCountries;

  return useQuery({
    queryKey: [lang, "tv-series", "search"],
    queryFn: () => searchTVSeries(searchTerm, { language: lang }),
  });
};

export const useSerieDetails = (id: string) => {
  const { i18n } = useTranslation();
  const lang = i18n.language as ManagedCountries;

  return useQuery({
    queryKey: [lang, "tv-series", id, "details"],
    queryFn: () => tvSerieDetails(id, { language: lang }),
  });
};
