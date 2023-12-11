import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/postlist-store";
const CreatePost = ({ post }) => {
  const { deleteItems } = useContext(PostList);
  return (
    <>
      <div className="card postCard" style={{ width: "30rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            {post.title}
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              onClick={() => {
                deleteItems(post.id);
              }}
            >
              <MdDelete />
              <span className="visually-hidden">unread messages</span>
            </span>
          </h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span className="badge text-bg-primary button" key={tag}>
              {tag}
            </span>
          ))}
          <div
            className="alert alert-success"
            style={{ margin: "10px 0 0 0" }}
            role="alert"
          >
            This post has been reacted by {post.reactions} people
          </div>
        </div>
      </div>
    </>
  );
};
export default CreatePost;
