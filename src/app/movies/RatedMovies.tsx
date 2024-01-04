/* eslint-disable @next/next/no-img-element */
"use client";

import { PreviewScroller } from "@/components";
import { ShowPreviewProps } from "@/components/ShowPreview/ShowPreview";
import { useTopRatedMovies } from "@/hooks";
import { map } from "lodash";
import { FC } from "react";

const RatedMovies: FC = () => {
  const { data } = useTopRatedMovies();

  return (
    <PreviewScroller
      title="categories.top-rated"
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

export default RatedMovies;
