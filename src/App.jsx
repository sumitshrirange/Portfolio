import React from "react";
import { Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Education from "./pages/Education";
import Skills from "./pages/Skills";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route path={"/"} element={<Home />} />
        <Route path={"/projects"} element={<Projects />} />
        <Route path={"/experience"} element={<Experience />} />
        <Route path={"/education"} element={<Education />} />
        <Route path={"/skills"} element={<Skills />} />
      </Route>
    </Routes>
  );
}

export default App;
