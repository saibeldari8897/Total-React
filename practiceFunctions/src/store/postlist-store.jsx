import { createContext, useReducer, useCallback } from "react";

export const PostList = createContext({
  postList: [],
  addItems: () => {},
  deleteItems: () => {},
});
const postListReducer = (currPostItems, action) => {
  let newPostItems = currPostItems;
  if (action.type === "deletePost") {
    newPostItems = currPostItems.filter(
      (post) => post.id !== action.payLoad.postId
    );
  } else if (action.type === "addInitialPosts") {
    newPostItems = action.payLoad.posts;
  } else if (action.type === "addPost") {
    newPostItems = [action.payLoad, ...currPostItems];
  }
  return newPostItems;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const addItems = (post) => {
    dispatchPostList({
      type: "addPost",
      payLoad: post,
    });
  };
  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "addInitialPosts",
      payLoad: {
        posts,
      },
    });
  };
  const deleteItems = (postId) =>
    useCallback(
      (postId) => {
        dispatchPostList({
          type: "deletePost",
          payload: {
            postId,
          },
        });
      },
      [dispatchPostList]
    );
  return (
    <PostList.Provider value={{ postList, addItems, deleteItems }}>
      {children}
    </PostList.Provider>
  );
};
export default PostListProvider;
