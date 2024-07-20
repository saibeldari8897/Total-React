import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import PostlistProvider from "./store/post-list-store";

ReactDOM.render(
  <React.StrictMode>
    <PostlistProvider>
      <App />
    </PostlistProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
