import React from "react";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="w-full relative flex flex-col lg:flex-row items-center justify-between lg:py-30 xl:px-30 px-10">
      <Header />
      <InfoCard />

      <div className="lg:ml-[43%] xl:ml-[40%] lg:w-xl xl:w-3xl lg:mt-0 mt-17 mb-12 md:mb-0">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;

// https://sawad.framer.website/
