import { discoverMovies, popularMovies, topRatedMovies } from "@/apis/queries";
import { useQuery } from "@tanstack/react-query";

export const usePopularMovies = () =>
  useQuery({
    queryKey: ["movies", "popular"],
    queryFn: () => popularMovies(),
  });

export const useTopRatedMovies = () =>
  useQuery({
    queryKey: ["movies", "top-rated"],
    queryFn: () => topRatedMovies(),
  });

export const useDiscoverMovies = () =>
  useQuery({
    queryKey: ["movies", "discover"],
    queryFn: () => discoverMovies(),
  });
