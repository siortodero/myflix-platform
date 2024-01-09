import axios from "axios";

const axiosClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_TMDB_BASE_API_URI}/${process.env.NEXT_PUBLIC_TMDB_CURRENT_API_VERSION}`,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN_AUTH}`,
  },
});

export const getApi = <TResponse = any, TParams = any>(
  relativeUri: string,
  params?: TParams
) =>
  axiosClient.get<TResponse>(`/${relativeUri}`, {
    params,
  });

export const postApi = <TResponse = void>(relativeUri: string, data: any) =>
  axiosClient.post<TResponse>(`/${relativeUri}`, data);

export const putApi = <TResponse = void>(relativeUri: string, data: any) =>
  axiosClient.put<TResponse>(`/${relativeUri}`, data);

export const deleteApi = <TResponse = void>(relativeUri: string) =>
  axiosClient.delete<TResponse>(`/${relativeUri}`);
