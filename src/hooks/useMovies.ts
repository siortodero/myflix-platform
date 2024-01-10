import {
  discoverMovies,
  movieDetails,
  popularMovies,
  searchMovies,
  topRatedMovies,
} from "@/apis/queries";
import { ManagedCountries } from "@/infrastructure";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { flatMap } from "lodash";
import { useTranslation } from "react-i18next";

export const usePopularMoviesPaged = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language as ManagedCountries;

  const query = useInfiniteQuery({
    queryKey: [lang, "movies", "popular"],
    queryFn: async ({ pageParam }) => {
      const result = await popularMovies({
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

export const useTopRatedMoviesPaged = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language as ManagedCountries;

  const query = useInfiniteQuery({
    queryKey: [lang, "movies", "top-rated"],
    queryFn: async ({ pageParam }) => {
      const result = await topRatedMovies({
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

export const useDiscoverMoviesPaged = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language as ManagedCountries;

  const query = useInfiniteQuery({
    queryKey: [lang, "movies", "discover"],
    queryFn: async ({ pageParam }) => {
      const result = await discoverMovies({
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

export const useSearchMovies = (searchTerm: string) => {
  const { i18n } = useTranslation();
  const lang = i18n.language as ManagedCountries;

  return useQuery({
    queryKey: [lang, "movies", "search"],
    queryFn: () => searchMovies(searchTerm, { language: lang, page: 1 }),
  });
};

export const useMovieDetails = (id: string) => {
  const { i18n } = useTranslation();
  const lang = i18n.language as ManagedCountries;

  return useQuery({
    queryKey: [lang, "movie", id, "details"],
    queryFn: () => movieDetails(id, { language: lang }),
  });
};
