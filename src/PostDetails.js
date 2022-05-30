import "./PostDetails.css";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import Access from "./AccessScript";
import Comment from "./Comment";
import { useEffect, useState } from "react";

function PostDetails() {
  const { id } = useParams();
  const access = new Access();
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function get() {
      const post = await access.getPostById(id);
      console.log(post);
      setPost(post);
    }
    get();
  }, []);

  return (
    <div className="PostDetails">
      <div className="Header">
        <h1 id="title">{post.title}</h1>
        <p id="date">{post.dateTime}</p>
      </div>
      <p id="content">{post.content}</p>
      <p id="author">{post.author}</p>
      {comments.map((comment) => {
        return <Comment comment={comment} />;
      })}
    </div>
  );
}

export default PostDetails;
