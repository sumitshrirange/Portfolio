import React from "react";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Message from "./Message";
import Footer from "../components/Footer";
import { motion, useScroll } from "motion/react";

function Layout() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="w-full relative flex flex-col lg:flex-row items-center justify-between lg:pt-30 lg:pb-15 xl:px-30 px-10">
      <Header />
      <InfoCard />

      {/* Progress bar */}

      <motion.div
        style={{
          scaleX: scrollYProgress,
        }}
        className="w-full lg:h-[3px] h-[2px] origin-left bg-[#07bea2] fixed top-0 left-0 z-10"
      ></motion.div>

      {/* Content */}

      <div className="lg:ml-[43%] xl:ml-[40%] lg:w-xl xl:w-3xl lg:mt-0 mt-17 mb-12 md:mb-0">
        <Outlet />
        <div className="mt-17">
          <Message />
        </div>
        <Footer />
      </div>
      <ToastContainer position="top-right" theme="dark" />
    </div>
  );
}

export default Layout;
