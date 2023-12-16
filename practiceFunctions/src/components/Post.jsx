import { Form, redirect } from "react-router-dom";

const Post = () => {
  //const { addItems } = useContext(PostList);

  return (
    <>
      <Form method="POST" className="postform">
        <div className="mb-3">
          <label htmlFor="UserId" className="form-label">
            Enter User Id
          </label>
          <input
            type="text"
            className="form-control"
            id="UserId"
            placeholder="Enter Your UserId"
            name="userId"
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
            name="title"
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
            name="body"
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
            name="reactions"
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
            name="tags"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </Form>
    </>
  );
};
export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      addItems(post);
    });
  return redirect("/");
}
export default Post;
