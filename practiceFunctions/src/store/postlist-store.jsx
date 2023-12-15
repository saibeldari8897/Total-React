import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addInitialPosts: () => {},
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
  const addItems = (userId, title, content, reactions, hashtags) => {
    dispatchPostList({
      type: "addPost",
      payLoad: {
        id: userId,
        title: title,
        body: content,
        reactions: reactions,
        tags: hashtags,
      },
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
  const deleteItems = (postId) => {
    dispatchPostList({
      type: "deletePost",
      payLoad: {
        postId,
      },
    });
  };
  return (
    <PostList.Provider
      value={{ postList, addItems, addInitialPosts, deleteItems }}
    >
      {children}
    </PostList.Provider>
  );
};
export default PostListProvider;
