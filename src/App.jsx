import React from "react";
import { Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Languages from "./pages/Languages";
import ContactMe from "./pages/ContactMe";
import Home from "./pages/Home";
import Layout from "./pages/Layout";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route path={"/"} element={<Home />} />
        <Route path={"/projects"} element={<Projects />} />
        <Route path={"/experience"} element={<Experience />} />
        <Route path={"/Languages"} element={<Languages />} />
        <Route path={"/Contactme"} element={<ContactMe />} />
      </Route>
    </Routes>
  );
}

export default App;
