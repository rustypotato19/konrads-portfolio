import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import "./main.css";
import Home from "./routes/home/Home";
import CustomError from "./components/error/CustomError";
import DisplayContextProvider from "./contexts/display/DisplayContextProvider";
import About from "./routes/about/About";
import CV from "./routes/cv/CV";
import Contact from "./routes/contact/Contact";
import ProjectDashboard from "./routes/projects/ProjectDashboard";
import ProjectsList from "./routes/projects/ProjectsList";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DisplayContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<ProjectDashboard />} />
          <Route path="projects/all" element={<ProjectsList />} />
          <Route path="cv" element={<CV />} />
          <Route path="contact" element={<Contact />} />

          <Route
            path="*"
            element={<CustomError errCode={404} errTitle="Page Not Found" />}
          />
        </Routes>
      </BrowserRouter>
    </DisplayContextProvider>
  </StrictMode>,
);
