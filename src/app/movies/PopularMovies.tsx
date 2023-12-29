/* eslint-disable @next/next/no-img-element */
"use client";

import { PreviewScroller } from "@/components";
import { ShowPreviewProps } from "@/components/ShowPreview/ShowPreview";
import { usePopularMovies } from "@/hooks";
import { map } from "lodash";
import { FC } from "react";

const PopularMovies: FC = () => {
  const { data } = usePopularMovies();

  return (
    <PreviewScroller
      title="Popular"
      showPreviews={map(
        data?.data.results,
        (r) =>
          ({
            title: r.title,
            imagePath: r.backdrop_path,
            id: r.id,
          }) as ShowPreviewProps
      )}
    />
  );
};

export default PopularMovies;
