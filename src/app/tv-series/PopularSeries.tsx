"use client";

import { PreviewScroller } from "@/components";
import { ShowPreviewProps } from "@/components/ShowPreview/ShowPreview";
import { usePopularSeriesPaged } from "@/hooks";
import { map } from "lodash";
import { FC } from "react";

const PopularSeries: FC = () => {
  const { data, fetchNextPage } = usePopularSeriesPaged();

  return (
    <PreviewScroller
      title="categories.popular"
      showType="tv-series"
      onLoadNextPage={fetchNextPage}
      showPreviews={map(
        data,
        (r) =>
          ({
            title: r.name,
            imagePath: r.backdrop_path,
            id: r.id,
          }) as ShowPreviewProps
      )}
    />
  );
};

export default PopularSeries;
