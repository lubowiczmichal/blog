import "./Post.css";
import { Link } from "react-router-dom";
import Access from "./AccessScript";
import { Button } from "@mui/material";

function Post(props) {
  const access = new Access();
  const comments = []; //access.getCommentsByPostId(props.post.id);
  return (
    <div className="Post">
      <div className="Post-Header">
        <h1 id="title">{props.post.title}</h1>
        <p id="date">{props.post.dateTime.toLocaleString()}</p>
      </div>
      <p id="content">{props.post.content}</p>
      <p id="author">{props.post.author}</p>
      <p>
        {comments.length} comments &nbsp;&nbsp;
        <Link to={`post/${props.post.id}`}>Go to comments</Link>
      </p>
      <Button onClick={() => access.removePost(props.post.id)}>Remove</Button>
    </div>
  );
}

export default Post;
