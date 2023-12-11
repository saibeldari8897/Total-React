import { useContext } from "react";
import CreatePost from "./createPost";
import { PostList } from "../store/postlist-store";
const PostListItemsContainer = () => {
  const { postList } = useContext(PostList);
  return (
    <>
      {postList.map((post) => (
        <CreatePost key={post.id} post={post} />
      ))}
    </>
  );
};
export default PostListItemsContainer;
