import React, { useEffect, useState } from "react";
import { axiosInstanceMovie } from "../../axiosConfig/instance";
//useparams
import { useLoaderData, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import IMovie from "../../Interfaces/IMovie";
function Movie() {
  const movie = useLoaderData() as IMovie;
  console.log(movie);

  return (
    <>
      {movie && (
        <div className="container mx-auto p-2">
          <h1 className="text-2xl font-bold text-center">
            {movie.title}
            <span className="text-sm text-gray-500 dark:text-gray-300 ml-2">
              ({movie.release_date})
            </span>
          </h1>

          <span className="text-sm text-gray-900 dark:text-gray-700">
            {movie.tagline}
          </span>
          <div className="grid grid-cols-1 gap-4">
            <div
              key={movie.id}
              className="bg-gray-100 dark:text-white p-4 shadow-inner  md:dark:text-gray-900
                    rounded-lg h-96"
            >
              <div className="flex justify-center items-center w-full h-full">
                <p
                  className="text-center p-8 text-4xl w-3/4

                "
                >
                  {movie.overview}
                </p>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  className="w-1/2 h-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export const movieLoader = async ({ params }: any) => {
  const response = await axiosInstanceMovie.get(`/movie/${params.id}`);
  return response.data;
};
export default Movie;
