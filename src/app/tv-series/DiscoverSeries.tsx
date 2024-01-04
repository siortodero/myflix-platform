/* eslint-disable @next/next/no-img-element */
"use client";

import { PreviewScroller } from "@/components";
import { ShowPreviewProps } from "@/components/ShowPreview/ShowPreview";
import { useDiscoverSeries } from "@/hooks";
import { map } from "lodash";
import { FC } from "react";

const DiscoverSeries: FC = () => {
  const { data } = useDiscoverSeries();

  return (
    <PreviewScroller
      title="categories.discover"
      showType="tv-series"
      showPreviews={map(
        data?.data.results,
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
