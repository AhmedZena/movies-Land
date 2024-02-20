import React from "react";

import { useSelector } from "react-redux";
import Favorite from "../../components/Favorite";
function Home() {
  const lang = useSelector(
    (state: { lang: { lang: string } }) => state.lang.lang
  );
  return (
    <>
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100">
        Home
      </h1>

      <p className="text-center text-gray-600 dark:text-gray-300">
        {lang === "en"
          ? "This is a multi-language website"
          : "هذا موقع متعدد اللغات"}
      </p>
    </>
  );
}

export default Home;
