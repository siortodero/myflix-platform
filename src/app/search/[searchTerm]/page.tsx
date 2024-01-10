"use client";

import { PreviewScroller, Translation } from "@/components";
import { ShowPreviewProps } from "@/components/ShowPreview/ShowPreview";
import { useSearchMoviesPaged, useSearchSeriesPaged } from "@/hooks";
import { map } from "lodash";
import { FC } from "react";

export interface SearchPageProps {
  params: {
    searchTerm: string;
  };
}

const SearchPage: FC<SearchPageProps> = ({ params: { searchTerm } }) => {
  const decodedSearchTerm = decodeURIComponent(searchTerm);
  const { data: movies, fetchNextPage: fetchNextMoviesPage } =
    useSearchMoviesPaged(decodedSearchTerm);
  const { data: series, fetchNextPage: fetchNextSeriesPage } =
    useSearchSeriesPaged(decodedSearchTerm);

  return (
    <div className="p-8">
      <h3 className="mb-4 text-3xl font-semibold text-white">
        <Translation label="common.searched-for" /> &ldquo;{decodedSearchTerm}
        &ldquo;
      </h3>
      <div className="flex flex-col gap-x-4 p-8">
        <PreviewScroller
          title="Movies"
          showType="movies"
          onLoadNextPage={fetchNextMoviesPage}
          showPreviews={map(
            movies,
            (r) =>
              ({
                title: r.title,
                imagePath: r.backdrop_path,
                id: r.id,
              }) as ShowPreviewProps
          )}
        />
        <PreviewScroller
          title="TV series"
          showType="tv-series"
          onLoadNextPage={fetchNextSeriesPage}
          showPreviews={map(
            series,
            (r) =>
              ({
                title: r.name,
                imagePath: r.backdrop_path,
                id: r.id,
              }) as ShowPreviewProps
          )}
        />
      </div>
    </div>
  );
};

export default SearchPage;
