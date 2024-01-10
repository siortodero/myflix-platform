"use client";

import { PreviewScroller } from "@/components";
import { ShowPreviewProps } from "@/components/ShowPreview/ShowPreview";
import { useDiscoverMoviesPaged } from "@/hooks";
import { map } from "lodash";
import { FC } from "react";

const DiscoverMovies: FC = () => {
  const { data, fetchNextPage } = useDiscoverMoviesPaged();

  return (
    <PreviewScroller
      title="categories.discover"
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

export default DiscoverMovies;
