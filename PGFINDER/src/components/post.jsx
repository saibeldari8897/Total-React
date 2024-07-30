const Post = ({ post }) => {
  const button = () => {
    console.log("clicked");
  };
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src="./assets/1.hotel.webp" className="card-img-top" alt="image" />
        <div className="card-body">
          <h4 className="card-title">{post.company}</h4>
          <p className="card-text">
            <p>{post.item_name}</p>
          </p>
          <a href="#" className="btn btn-primary" onClick={button}>
            See more details
          </a>
        </div>
      </div>
    </>
  );
};
export default Post;
