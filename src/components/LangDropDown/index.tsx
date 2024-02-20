import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
function LangDropDown() {
  const languages = [
    {
      code: "en",
      name: "English",
      img: "https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png",
    },
    {
      code: "ar",
      name: "Arabic",
      img: "https://www.countryflags.com/wp-content/uploads/egypt-flag-png-large.png",
    },
  ];

  const lang = useSelector(
    (state: { lang: { lang: string } }) => state.lang.lang
  );
  const dispatch = useDispatch();

  const [selectedLang, setSelectedLang] = useState(lang);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = () => setIsOpen(!isOpen);

  const handleLangChange = (code: string) => {
    dispatch({ type: "lang/setLang", payload: code });
    setSelectedLang(code);
    setIsOpen(false);
  };
  return (
    <>
      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            onClick={toggleDropDown}
            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
          >
            <img
              src={languages.find((lang) => lang.code === selectedLang)?.img}
              alt="flag"
              className="w-5 h-5"
            />
            <span className="ml-2">
              {languages.find((lang) => lang.code === selectedLang)?.name}
            </span>
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M7.293 7.293a1 1 0 011.414 0L10 9.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        {isOpen && (
          <div
            className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="py-1" role="none">
              {languages.map((lang) => (
                <a
                  key={lang.code}
                  href="#"
                  onClick={() => handleLangChange(lang.code)}
                  className="flex justify-between px-5 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  <img src={lang.img} alt="flag" className="w-5 h-5" />
                  <span className="ml-2">{lang.name}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default LangDropDown;
