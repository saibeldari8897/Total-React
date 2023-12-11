import { useContext, useRef } from "react";
import { PostList } from "../store/postlist-store";

const Post = () => {
  const { addItems } = useContext(PostList);
  const userIdElement = useRef();
  const titleElement = useRef();
  const contentElement = useRef();
  const reactionsElement = useRef();
  const hashtagElement = useRef();
  const handlePostButton = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const title = titleElement.current.value;
    const content = contentElement.current.value;
    const reactions = reactionsElement.current.value;
    const hashtags = hashtagElement.current.value.split(" ");
    addItems(userId, title, content, reactions, hashtags);
    userIdElement.current.value = "";
    titleElement.current.value = "";
    contentElement.current.value = "";
    reactionsElement.current.value = "";
    hashtagElement.current.value = "";
  };

  return (
    <>
      <form className="postform" onSubmit={handlePostButton}>
        <div className="mb-3">
          <label htmlFor="UserId" className="form-label">
            Enter User Id
          </label>
          <input
            type="text"
            className="form-control"
            id="UserId"
            placeholder="Enter Your UserId"
            ref={userIdElement}
          />
          <label
            htmlFor="UserId"
            className="form-label"
            style={{ marginTop: "5px" }}
          >
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            id="postTtile"
            placeholder="Enter Your Post Title"
            ref={titleElement}
          />
          <label
            htmlFor="postContent"
            className="form-label"
            style={{ marginTop: "5px" }}
          >
            Post Content
          </label>
          <textarea
            rows={4}
            type="text"
            className="form-control"
            id="postContent"
            placeholder="Enter Your Post Content"
            ref={contentElement}
          />
          <label
            htmlFor="postReactions"
            className="form-label"
            style={{ marginTop: "5px" }}
          >
            Number of Reactions
          </label>
          <input
            type="text"
            className="form-control"
            id="postReactions"
            placeholder="Enter how many reactions do you want"
            ref={reactionsElement}
          />
          <label
            htmlFor="hashTags"
            className="form-label"
            style={{ marginTop: "5px" }}
          >
            Enter your Hashtags here
          </label>
          <input
            type="text"
            className="form-control"
            id="hashTags"
            placeholder="Enter your Hashtags by giving spaces between them"
            ref={hashtagElement}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
};
export default Post;
