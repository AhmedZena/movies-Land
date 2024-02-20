import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

function AboutUs() {
  let navigate = useNavigate();

  let outlets = [
    { name: "Visions", path: "visions" },
    { name: "Values", path: "values" },
  ];
  return (
    <>
      <div className="bg-gray-100 p-4 text-center">
        <h1 className="text-2xl font-bold mb-3">About Us</h1>

        <ul className=" flex space-x-4 text-center justify-center">
          {outlets.map((outlet) => (
            <li key={outlet.path}>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => navigate(outlet.path)}
              >
                {outlet.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default AboutUs;
