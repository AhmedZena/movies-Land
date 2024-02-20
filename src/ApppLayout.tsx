import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";
function AppLayout() {
  const lang = useSelector(
    (state: { lang: { lang: string } }) => state.lang.lang
  );

  return (
    <div dir={lang === "en" ? "ltr" : "rtl"}>
      <Navbar />
      <div className="min-h-screen text-center bg-bgDarkSecondary">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
