import "./Post.css";

function Post(props) {
  return (
    <div className="Post">
      <div className="Header">
        <h1 id="title">{props.post.title}</h1>
        <p id="date">{props.post.date.toLocaleString()}</p>
      </div>
      <p id="content">{props.post.content}</p>
      <p id="author">{props.post.author}</p>
    </div>
  );
}

export default Post;
