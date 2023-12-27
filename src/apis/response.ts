export type PagedResponse<TReponse> = {
  page: number;
  results: Array<TReponse>;
  total_pages: number;
  total_results: number;
};

export type DateRangedPagedResponse<TReponse> = PagedResponse<TReponse> & {
  dates: {
    minimum: string;
    maximum: string;
  };
};
