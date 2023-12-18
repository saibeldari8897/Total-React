import CreatePost from "./createPost";
import { PostList } from "../store/postlist-store";
import { useLoaderData } from "react-router-dom";
const PostListItemsContainer = () => {
  const postList = useLoaderData();
  return (
    <>
      {postList.map((post) => (
        <CreatePost key={post.id} post={post} />
      ))}
    </>
  );
};
export const PostLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};
export default PostListItemsContainer;
