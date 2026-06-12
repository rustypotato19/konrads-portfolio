import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import "./main.css";
import Home from "./routes/home/Home";
import CustomError from "./components/error/CustomError";
import DisplayContextProvider from "./contexts/display/displayContextProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DisplayContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="*"
            element={<CustomError errCode={404} errTitle="Page Not Found" />}
          />
        </Routes>
      </BrowserRouter>
    </DisplayContextProvider>
  </StrictMode>,
);
