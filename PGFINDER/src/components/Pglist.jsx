import { useContext } from "react";
import Post from "./post";
import { Postlist } from "../store/post-list-store";

const Pglist = () => {
  const { postlist } = useContext(Postlist);

  if (!Array.isArray(postlist)) {
    return <p>Loading posts...</p>;
  }

  return (
    <div className="posts-container">
      {postlist.length > 0 ? (
        postlist.map((post) => <Post key={post.id} post={post} />)
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
};

export default Pglist;
