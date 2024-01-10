"use client";

import { PreviewScroller } from "@/components";
import { ShowPreviewProps } from "@/components/ShowPreview/ShowPreview";
import { useTopRatedMoviesPaged } from "@/hooks";
import { map } from "lodash";
import { FC } from "react";

const RatedMovies: FC = () => {
  const { data, fetchNextPage } = useTopRatedMoviesPaged();

  return (
    <PreviewScroller
      title="categories.top-rated"
      showType="movies"
      onLoadNextPage={fetchNextPage}
      showPreviews={map(
        data,
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
