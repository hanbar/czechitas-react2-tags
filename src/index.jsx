import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

import { TagCloud } from "./components/TagCloud";

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>tag cloud</h1>
      </header>
      <main>
        <TagCloud />
      </main>
    </div>
  );
};

createRoot(document.querySelector("#app")).render(<App />);
