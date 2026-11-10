import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { paths } from "./i18n/index.js";

// Las mismas páginas en los dos idiomas; cada página lee el idioma de la URL.
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {Object.entries(paths).map(([lang, p]) => [
          <Route key={`${lang}-home`} path={p.home} element={<Home />} />,
          <Route key={`${lang}-projects`} path={p.projects} element={<Projects />} />,
          <Route key={`${lang}-project`} path={`${p.projects}/:slug`} element={<ProjectDetail />} />,
          <Route key={`${lang}-about`} path={p.about} element={<About />} />,
          <Route key={`${lang}-contact`} path={p.contact} element={<Contact />} />,
        ])}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
