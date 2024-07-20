import { useContext } from "react";
import Post from "./post";
import { Postlist } from "../store/post-list-store";

const Pglist = () => {
  const { postlist } = useContext(Postlist);
  console.log(postlist);

  return (
    <>
      <div className="posts-container">
        {postlist.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};
export default Pglist;
