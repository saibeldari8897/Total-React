import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Post from "./components/Post.jsx";
import PostListItemsContainer from "./components/postListItemsContainer.jsx";
import { PostLoader } from "./components/postListItemsContainer.jsx";
import { createPostAction } from "./components/Post.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostListItemsContainer />, loader: PostLoader },
      { path: "createpost", element: <Post />, action: createPostAction },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
