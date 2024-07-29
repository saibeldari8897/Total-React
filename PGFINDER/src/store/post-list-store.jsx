import { createContext, useReducer } from "react";

export const Postlist = createContext({
  postlist: [],
  addpost: () => {},
  delpost: () => {},
});

const pgArray = [
  {
    id: "1",
    pgname: "lakshmi",
    pgadress: "6th Street,2nd main road,Aswath Nagar,Marathahalli,Bengaluru",
  },
  {
    id: "1",
    pgname: "veereBramhendra",
    pgadress: "9th Street,2nd main road,Aswath Nagar,Marathahalli,Bengaluru",
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