import "./Post.css";
import { Link } from "react-router-dom";
import Access from "./AccessScript";
import { Button } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import NewPost from "./NewPost";
import { useState } from "react";

function Post(props) {
  const access = new Access();
  const [edit, setEdit] = useState(false);
  if (!edit) {
    return (
      <div className="Post">
        <div className="Post-Header">
          <div className="Header-Left">
            <Link class="link" to={`post/${props.post.id}`}>
              <p id="title">{props.post.title}</p>
            </Link>
          </div>
          <div className="Header-Right">
            <Button className="Edit" onClick={() => setEdit(true)}>
              <EditIcon />
            </Button>
            <Button
              color="error"
              className="Remove"
              onClick={() => access.removePost(props.post.id)}
            >
              <DeleteForeverIcon />
            </Button>
            <p id="date">{props.post.dateTime.toLocaleString()}</p>
          </div>
        </div>
        <div id="content">
          {props.post.content.length > 303 ? (
            <p>
              {props.post.content.slice(0, 300) + "... "}
              <Link className="link" to={`post/${props.post.id}`}>
                see whole
              </Link>
            </p>
          ) : (
            props.post.content
          )}
        </div>
        <p id="author">{props.post.author}</p>
      </div>
    );
  } else {
    return (
      <NewPost
        entryPoint={"edit"}
        isEditActive={setEdit}
        postToEdit={props.post}
      ></NewPost>
    );
  }
}

export default Post;
