"use client";

import { PreviewScroller } from "@/components";
import { ShowPreviewProps } from "@/components/ShowPreview/ShowPreview";
import { useDiscoverMovies } from "@/hooks";
import { map } from "lodash";
import { FC } from "react";

const DiscoverMovies: FC = () => {
  const { data } = useDiscoverMovies();

  return (
    <PreviewScroller
      title="categories.discover"
      showType="movies"
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

export default DiscoverMovies;
