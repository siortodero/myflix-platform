"use client";

import { PreviewScroller } from "@/components";
import { ShowPreviewProps } from "@/components/ShowPreview/ShowPreview";
import { useTopRatedSeriesPaged } from "@/hooks";
import { map } from "lodash";
import { FC } from "react";

const RatedSeries: FC = () => {
  const { data, fetchNextPage } = useTopRatedSeriesPaged();

  return (
    <PreviewScroller
      title="categories.top-rated"
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

export default RatedSeries;
