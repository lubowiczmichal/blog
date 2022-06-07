import "./PostDetails.css";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import Access from "./AccessScript";
import { useEffect, useState } from "react";

function PostDetails() {
  const { id } = useParams();
  const access = new Access();
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function get() {
      const post = await access.getPostById(id);
      setPost(post);
    }
    get();
  }, []);

  if (post) {
    return (
      <div className="PostDetails">
        <div className="Header">
          <h1 id="title">{post.title}</h1>
          <p id="date">{post.dateTime.toLocaleString()}</p>
        </div>
        <p id="content">{post.content}</p>
        <p id="author">{post.author}</p>
      </div>
    );
  } else {
    return <p>Please wait</p>;
  }
}

export default PostDetails;
