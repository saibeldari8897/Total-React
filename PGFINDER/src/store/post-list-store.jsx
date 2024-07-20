import { createContext, useReducer } from "react";

export const Postlist = createContext({
  postlist: [],
  addpost: () => {},
  delpost: () => {},
});

const pgArray = [
  {
    id: "1",
    name: "lakshmi",
  },
  {
    id: "2",
    name: "lakshmi",
  },
];

const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PostlistProvider = ({ children }) => {
  const [postlist, dispatchPostList] = useReducer(postListReducer, pgArray);

  const addpost = () => {};
  const delpost = () => {};

  return (
    <Postlist.Provider
      value={{
        postlist,
        addpost,
        delpost,
      }}
    >
      {children}
    </Postlist.Provider>
  );
};

export default PostlistProvider;
