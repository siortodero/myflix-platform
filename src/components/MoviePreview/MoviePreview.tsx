/* eslint-disable @next/next/no-img-element */
import { Movie } from "@/apis/queries";
import { FC } from "react";

export interface MoviePreviewProps {
  movie: Movie;
}

const ShowPreview: FC<MoviePreviewProps> = ({ movie }) => {
  return (
    <div className="relative mb-2 w-[342px]">
      <img
        src={
          process.env.NEXT_PUBLIC_BASE_IMAGE_URI + "w342/" + movie.backdrop_path
        }
        alt={movie.title}
      />
      <h4 className="absolute bottom-4 w-full bg-[rgb(20,20,20)] bg-opacity-60 px-2 py-2 font-semibold text-white">
        {movie.title}
      </h4>
    </div>
  );
};

export default ShowPreview;
