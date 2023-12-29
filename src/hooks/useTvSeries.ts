import {
  discoverTVSeries,
  popularTVSeries,
  searchTVSeries,
  topRatedTVSeries,
} from "@/apis/queries";
import { useQuery } from "@tanstack/react-query";

export const usePopularSeries = () =>
  useQuery({
    queryKey: ["tv-series", "popular"],
    queryFn: () => popularTVSeries(),
  });

export const useTopRatedSeries = () =>
  useQuery({
    queryKey: ["tv-series", "top-rated"],
    queryFn: () => topRatedTVSeries(),
  });

export const useDiscoverSeries = () =>
  useQuery({
    queryKey: ["tv-series", "discover"],
    queryFn: () => discoverTVSeries(),
  });

export const useSearchSeries = (searchTerm: string) =>
  useQuery({
    queryKey: ["tv-series", "search"],
    queryFn: () => searchTVSeries(searchTerm),
  });
