import { createContext, useReducer, useEffect } from "react";

export const Postlist = createContext({
  postlist: [],
  addpost: () => {},
  delpost: () => {},
});

const postListReducer = (state, action) => {
  switch (action.type) {
    case "SET_POSTLIST":
      return action.payload;
    case "ADD_POST":
      return [...state, action.payload];
    case "DELETE_POST":
      return state.filter((post) => post.id !== action.payload);
    default:
      return state;
  }
};

const PostlistProvider = ({ children }) => {
  const [postlist, dispatchPostList] = useReducer(postListReducer, []);

  useEffect(() => {
    fetch("http://localhost:8080/items")
      .then((res) => res.json())
      .then((data) => {
        // Ensure correct extraction of data, if necessary
        const items = data.items && data.items[0] ? data.items[0] : [];
        dispatchPostList({ type: "SET_POSTLIST", payload: items });
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, []); // Empty dependency array ensures this effect runs only once

  const addpost = (post) => {
    dispatchPostList({ type: "ADD_POST", payload: post });
  };

  const delpost = (postId) => {
    dispatchPostList({ type: "DELETE_POST", payload: postId });
  };

  return (
    <Postlist.Provider value={{ postlist, addpost, delpost }}>
      {children}
    </Postlist.Provider>
  );
};

export default PostlistProvider;
