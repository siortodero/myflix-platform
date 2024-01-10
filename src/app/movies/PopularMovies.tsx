"use client";

import { PreviewScroller } from "@/components";
import { ShowPreviewProps } from "@/components/ShowPreview/ShowPreview";
import { usePopularMoviesPaged } from "@/hooks";
import { map } from "lodash";
import { FC } from "react";

const PopularMovies: FC = () => {
  const { data, fetchNextPage } = usePopularMoviesPaged();

  return (
    <PreviewScroller
      title="categories.popular"
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

export default PopularMovies;
