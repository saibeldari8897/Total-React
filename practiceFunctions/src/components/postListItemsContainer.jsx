import { useContext, useState } from "react";
import CreatePost from "./createPost";
import { PostList } from "../store/postlist-store";
const PostListItemsContainer = () => {
  const { postList, addInitialPosts } = useContext(PostList);
  const [dataFetching, setDataFetching] = useState(false);
  if (!dataFetching) {
    console.log("button clicked");
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });
    setDataFetching(true);
  }

  return (
    <>
      {postList.map((post) => (
        <CreatePost key={post.id} post={post} />
      ))}
    </>
  );
};
export default PostListItemsContainer;
