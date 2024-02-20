import React, { useEffect, useState } from "react";
import { axiosInstanceMovie } from "../../axiosConfig/instance";
import IMovie from "../../Interfaces/IMovie";
import { useNavigate } from "react-router-dom";
import PaginationList from "./PaginationList";
import { useSelector, useDispatch } from "react-redux";

// icon star import
import { AiFillStar } from "react-icons/ai";
function Movies() {
  const laader = useSelector(
    (state: { loader: { loader: boolean } }) => state.loader.loader
  );
  console.log(laader);

  const [movies, setMovies] = useState<IMovie[]>([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const totalPages = [1, 2, 3, 4, 5];

  const navigate = useNavigate();
  // on mounting
  useEffect(() => {
    axiosInstanceMovie.get("/movie/popular").then((response) => {
      console.log(response.data);
      setMovies(response.data.results);
    });
  }, []);

  // on click of pagination
  const handlePageChange = (page: number) => {
    axiosInstanceMovie.get(`/movie/popular?page=${page}`).then((response) => {
      console.log(response.data);
      setMovies(response.data.results);
      setPage(page);
    });
  };

  // on next click
  const handleNext = () => {
    if (page >= 5) {
      axiosInstanceMovie.get(`/movie/popular?page=1`).then((response) => {
        console.log(response.data);
        setMovies(response.data.results);
        setPage(1);
      });
    } else {
      axiosInstanceMovie
        .get(`/movie/popular?page=${page + 1}`)
        .then((response) => {
          console.log(response.data);
          setMovies(response.data.results);
          setPage(page + 1);
        });
    }
  };

  // on previous click
  const handlePrevious = () => {
    if (page <= 1) {
      axiosInstanceMovie.get(`/movie/popular?page=5`).then((response) => {
        console.log(response.data);
        setMovies(response.data.results);
        setPage(5);
      });
    } else {
      axiosInstanceMovie
        .get(`/movie/popular?page=${page - 1}`)
        .then((response) => {
          console.log(response.data);
          setMovies(response.data.results);
          setPage(page - 1);
        });
    }
  };

  const handleSearch = (search: string) => {
    axiosInstanceMovie.get(`/search/movie?query=${search}`).then((response) => {
      console.log(response.data);
      setMovies(response.data.results);
      setPage(1);
    });
  };

  const dispatch = useDispatch();
  const favorite = useSelector(
    (state: { favorite: { favorite: IMovie[] } }) => state.favorite.favorite
  );

  console.log(
    useSelector((state: { favorite: { favorite: IMovie[] } }) => state.favorite)
  );

  const toggleFavorite = (movie: IMovie) => {
    if (favorite.find((fav: IMovie) => fav.id === movie.id)) {
      dispatch({
        type: "favorite/removeFavorite",
        payload: [movie],
      });
    } else {
      dispatch({
        type: "favorite/addFavorite",
        payload: [movie],
      });
    }
  };

  return (
    <>
      <div
        className={`${
          laader ? "block" : "hidden"
        } fixed top-0 left-0 w-full h-full bg-gray-200 bg-opacity-50 flex justify-center items-center z-50`}
      >
        {laader ? "true" : "false"}
      </div>
      {/* loader */}
      {laader && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-200 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h1>Loading...</h1>
          </div>
        </div>
      )}
      <div className="container mx-auto p-2">
        <h1
          className="text-2xl font-bold text-center
            dark:text-white"
        >
          Movies
        </h1>

        {/* searching  */}
        <div className="flex justify-center items-center my-2">
          <input
            type="text"
            placeholder="Search"
            className="border-2 border-gray-200 p-2 rounded-lg"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white p-2 rounded-lg ml-2"
            onClick={() => handleSearch(search)}
          >
            Search
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-gray-100 dark:bg-gray-700 dark:text-white p-4 shadow-inner  md:dark:text-gray-900
            rounded-lg h-96"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold mb-2 dark:text-gray-100 text-center">
                  {movie.title}
                </h3>
                <button
                  //   className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5"
                  className={
                    favorite.find((fav: IMovie) => fav.id === movie.id)
                      ? "text-blue-500 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5"
                      : "text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5"
                  }
                  onClick={() => toggleFavorite(movie)}
                >
                  {/* <AiFillStar /> */}
                  {/* {favorite.find((fav: any) => fav[0] === movie.id) ? (
                    <AiFillStar className="text-yellow-500 w-7 h-7" />
                  ) : (
                    <AiFillStar className="w-7 h-7" />
                  )} */}

                  <AiFillStar
                    className={
                      favorite.find((fav: IMovie) => fav.id === movie.id)
                        ? "text-yellow-500 w-7 h-7"
                        : "text-gray-400 w-7 h-7"
                    }
                  />
                </button>
              </div>

              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                className="w-full  object-cover rounded-lg hover:rounded-3xl transition-all hover:scale-105 hover:shadow-lg duration-100 cursor-pointer h-5/6 "
                onClick={() => navigate(`/movie/${movie.id}`)}
              />
            </div>
          ))}
        </div>

        {/* pagination */}
      </div>
      <ul className="flex items-center justify-center w-full mx-auto border-r-4 p-4 bg-white border-t border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <li key="prev">
          <a
            href="#"
            className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => handlePrevious()}
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-3 h-3 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </a>
        </li>

        {totalPages.map((pagex) => (
          <PaginationList
            handlePageChange={handlePageChange}
            page={pagex}
            currentPage={page}
            key={pagex}
          />
        ))}

        <li key="next">
          <a
            href="#"
            // className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            className={`${
              page === 5
                ? "flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                : "flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            }`}
            onClick={() => handleNext()}
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-3 h-3 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </a>
        </li>
      </ul>
    </>
  );
}

export default Movies;
