import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addItems: () => {},
  deleteItems: () => {},
});
const postListReducer = (currPostItems, action) => {
  return postListReducer(currPostItems);
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    allPostItems
  );
  const addItems = () => {};
  const deleteItems = () => {};
  return (
    <PostList.Provider value={{ postList, addItems, deleteItems }}>
      {children}
    </PostList.Provider>
  );
};
const allPostItems = [
  {
    id: "01",
    title: "OFF TO CLZ",
    body: "So happy to be back in clz",
    reactions: 100,
    tags: ["like", "share", "Comment"],
  },
  {
    id: "02",
    title: "OFF TO Bengaluru",
    body: "Back in bengaluru",
    reactions: 100,
    tags: ["like", "share", "Comment"],
  },
];
export default PostListProvider;
