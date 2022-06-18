import Image from "next/image";
import React from "react";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/modalAtom";
import { Movie } from "../typing";

export interface Props {
  movie: Movie;
}

function Thumbnail({ movie }: Props) {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

  return (
    <div
      className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
      onClick={() => {
        setShowModal(true), setCurrentMovie(movie);
      }}
    >
      <div className="relative h-full px-10 rounded-sm object-cover md:rounded transition duration-200 ease-out opacity-0 hover:opacity-100 z-50 justify-center items-center flex bg-black/80">
        <span>{movie.original_title || movie.original_name}</span>
      </div>
      <div></div>
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        alt={'Backdrop'}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
      />
      <div className="absolute top-2 right-2 bg-red object-cover w-8 h-8 bg-red-900/80 shadow-2xl shadow-gray-500 rounded-full justify-center items-center flex">
        {movie.vote_average}
      </div>
    </div>
  );
}

export default Thumbnail;
