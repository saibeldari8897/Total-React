import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import PostlistProvider from "./store/post-list-store";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <PostlistProvider>
      <App />
    </PostlistProvider>
  </React.StrictMode>
);
