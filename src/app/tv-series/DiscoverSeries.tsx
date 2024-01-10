"use client";

import { PreviewScroller } from "@/components";
import { ShowPreviewProps } from "@/components/ShowPreview/ShowPreview";
import { useDiscoverSeriesPaged } from "@/hooks";
import { map } from "lodash";
import { FC } from "react";

const DiscoverSeries: FC = () => {
  const { data, fetchNextPage } = useDiscoverSeriesPaged();

  return (
    <PreviewScroller
      title="categories.discover"
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

export default DiscoverSeries;
