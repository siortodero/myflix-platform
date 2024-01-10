import {
  discoverTVSeries,
  popularTVSeries,
  searchTVSeries,
  topRatedTVSeries,
  tvSerieDetails,
} from "@/apis/queries";
import { ManagedCountries } from "@/infrastructure";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { flatMap } from "lodash";
import { useTranslation } from "react-i18next";

export const usePopularSeriesPaged = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language as ManagedCountries;

  const query = useInfiniteQuery({
    queryKey: [lang, "tv-series", "popular"],
    queryFn: async ({ pageParam }) => {
      const result = await popularTVSeries({
        language: lang,
        page: pageParam,
      });
      return result.data.results;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => allPages.length + 1,
    getPreviousPageParam: (lastPage, allPages) => allPages.length - 1,
  });

  const { data, fetchNextPage, hasNextPage } = query;

  const handleFetchNexPage = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  return {
    ...query,
    data: flatMap(data?.pages),
    fetchNextPage: handleFetchNexPage,
  };
};

export const useTopRatedSeriesPaged = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language as ManagedCountries;

  const query = useInfiniteQuery({
    queryKey: [lang, "tv-series", "top-rated"],
    queryFn: async ({ pageParam }) => {
      const result = await topRatedTVSeries({
        language: lang,
        page: pageParam,
      });
      return result.data.results;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => allPages.length + 1,
    getPreviousPageParam: (lastPage, allPages) => allPages.length - 1,
  });

  const { data, fetchNextPage, hasNextPage } = query;

  const handleFetchNexPage = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  return {
    ...query,
    data: flatMap(data?.pages),
    fetchNextPage: handleFetchNexPage,
  };
};

export const useDiscoverSeriesPaged = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language as ManagedCountries;

  const query = useInfiniteQuery({
    queryKey: [lang, "tv-series", "discover"],
    queryFn: async ({ pageParam }) => {
      const result = await discoverTVSeries({
        language: lang,
        page: pageParam,
      });
      return result.data.results;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => allPages.length + 1,
    getPreviousPageParam: (lastPage, allPages) => allPages.length - 1,
  });

  const { data, fetchNextPage, hasNextPage } = query;

  const handleFetchNexPage = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  return {
    ...query,
    data: flatMap(data?.pages),
    fetchNextPage: handleFetchNexPage,
  };
};

export const useSearchSeriesPaged = (searchTerm: string) => {
  const { i18n } = useTranslation();
  const lang = i18n.language as ManagedCountries;

  const query = useInfiniteQuery({
    queryKey: [lang, "tv-series", "search"],
    queryFn: async ({ pageParam }) => {
      const result = await searchTVSeries(searchTerm, {
        language: lang,
        page: pageParam,
      });
      return result.data.results;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => allPages.length + 1,
    getPreviousPageParam: (lastPage, allPages) => allPages.length - 1,
  });

  const { data, fetchNextPage, hasNextPage } = query;

  const handleFetchNexPage = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  return {
    ...query,
    data: flatMap(data?.pages),
    fetchNextPage: handleFetchNexPage,
  };
};

export const useSerieDetails = (id: string) => {
  const { i18n } = useTranslation();
  const lang = i18n.language as ManagedCountries;

  return useQuery({
    queryKey: [lang, "tv-series", id, "details"],
    queryFn: () => tvSerieDetails(id, { language: lang }),
  });
};
