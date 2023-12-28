/* eslint-disable @next/next/no-img-element */
"use client";

import { MoviePreview } from "@/components";
import { useTopRatedMovies } from "@/hooks";
import { map } from "lodash";
import { FC } from "react";

const RatedMovies: FC = () => {
  const { data } = useTopRatedMovies();

  return (
    <div>
      <h2 className="mb-2 text-xl font-semibold text-white">Top rated</h2>
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

export default RatedMovies;
