import React from "react";
import { Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Languages from "./pages/Languages";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Education from "./pages/Education";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route path={"/"} element={<Home />} />
        <Route path={"/projects"} element={<Projects />} />
        <Route path={"/experience"} element={<Experience />} />
        <Route path={"/Languages"} element={<Languages />} />
        <Route path={"/education"} element={<Education />} />
      </Route>
    </Routes>
  );
}

export default App;
