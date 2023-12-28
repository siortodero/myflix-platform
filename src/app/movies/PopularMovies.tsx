/* eslint-disable @next/next/no-img-element */
"use client";

import { MoviePreview } from "@/components";
import { usePopularMovies } from "@/hooks";
import { map } from "lodash";
import { FC } from "react";

const PopularMovies: FC = () => {
  const { data } = usePopularMovies();

  return (
    <div>
      <h2 className="mb-2 text-xl font-semibold text-white">Popular</h2>
      <ul className="">
        {map(data?.data?.results, (m) => (
          <li key={m.id}>
            <MoviePreview movie={m} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularMovies;
