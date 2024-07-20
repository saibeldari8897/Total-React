const Post = ({ post }) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src="./assets/1.hotel.webp" className="card-img-top" alt="image" />
        <div className="card-body">
          <h4 className="card-title">{post.pgname}</h4>
          <p className="card-text">
            <p>{post.pgadress}</p>
          </p>
          <a href="#" className="btn btn-primary">
            See more details
          </a>
        </div>
      </div>
    </>
  );
};
export default Post;
