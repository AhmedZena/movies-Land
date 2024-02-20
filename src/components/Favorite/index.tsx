import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { FaRegTrashAlt } from "react-icons/fa";

function Favorite() {
  const dispatch = useDispatch();

  // State to manage the visibility of the drawer
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const favorites = useSelector(
    (state: { favorite: { favorite: string[] } }) =>
      state.favorite.favorite || []
  );
  console.log(favorites);
  const removeFavorite = (movie: any) => {
    dispatch({
      type: "favorite/removeFavorite",
      payload: [movie],
    });
    console.log(movie);
  };
  return (
    <>
      <>
        {/* drawer init and show */}
        <div className="text-center">
          <button
            className=" block  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`"
            type="button"
            onClick={toggleDrawer}
          >
            Favorites
          </button>
        </div>
        {/* drawer component */}
        <div
          id="drawer-navigation"
          className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform bg-white dark:bg-gray-800 ${
            isDrawerOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          tabIndex={-1}
          aria-labelledby="drawer-navigation-label"
        >
          <h5
            id="drawer-navigation-label"
            className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
          >
            Favorites
          </h5>
          <button
            type="button"
            data-drawer-hide="drawer-navigation"
            aria-controls="drawer-navigation"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={toggleDrawer}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
          {favorites.length === 0 && (
            <h1
              className="text-center h-96
            flex justify-center items-center text-2xl font-bold text-gray-500 dark:text-gray-400"
            >
              No favorites
            </h1>
          )}
          {/* favorites */}
          <div className="grid grid-cols-1 gap-4">
            {favorites.map((movie: any) => (
              <div
                key={movie.id}
                className="bg-gray-100 dark:text-white py-2 text-center shadow-inner  md:dark:text-gray-900
                        rounded-lg h-48"
              >
                {/* <p className="text-center text-lg ">{movie.title}</p> */}

                <div className="flex justify-around items-center w-full mb-2">
                  <p className="text-lg font-bold  dark:text-gray-700 text-center">
                    {movie.title}
                  </p>

                  {/* delete */}
                  <button
                    className="text-red-500  hover:text-red-700 "
                    onClick={() => removeFavorite(movie)}
                  >
                    <FaRegTrashAlt />
                  </button>
                </div>

                <div className="flex justify-center items-center h-3/4">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                    className="h-full rounded-lg"
                  />
                </div>

                {/* remove button  */}
                {/* <button
                  className="text-red-500 bg-transparent hover:text-red-700 hover:font-bold rounded-lg text-sm p-1.5"
                  onClick={() => removeFavorite(movie)}
                >
                  <FaRegTrashAlt />
                </button> */}
              </div>
            ))}
          </div>
        </div>
      </>
    </>
  );
}

export default Favorite;
