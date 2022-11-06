import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Details from "./Details";
import "./index.css";
import { store } from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="movie-details/:id" element={<Details />} />
        </Routes>
      </Provider>
    </React.StrictMode>
  </Router>
);
