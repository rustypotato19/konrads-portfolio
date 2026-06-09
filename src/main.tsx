import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import "./main.css";
import Home from "./routes/home/Home";
import CustomError from "./components/error/CustomError";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="*"
          element={<CustomError errCode={404} errTitle="Page Not Found" />}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
