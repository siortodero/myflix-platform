import { FC } from "react";
import PopularMovies from "./PopularMovies";
import RatedMovies from "./RatedMovies";

const Movies: FC = () => {
  return (
    <div className="flex flex-col gap-x-4 p-8">
      <PopularMovies />
      <RatedMovies />
    </div>
  );
};

export default Movies;
