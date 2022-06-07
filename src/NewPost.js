import "./NewPost.css";
import { useState, useEffect } from "react";
import { TextField, Button, Stack } from "@mui/material";
import Access from "./AccessScript.js";

function NewPost(props) {
  const [error, setError] = useState({
    title: false,
    content: false,
    author: false,
  });
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [id, setId] = useState("");
  const [edit, setEdit] = useState(false);
  const [cssClass, setCssClass] = useState("NewPost");

  useEffect(() => {
    if (props.entryPoint === "edit") {
      setEdit(true);
      setCssClass("Edit");
      setTitle(props.postToEdit.title);
      setContent(props.postToEdit.content);
      setAuthor(props.postToEdit.author);
      setId(props.postToEdit.id);
    }
  }, []);

  return (
    <div className={cssClass}>
      <TextField
        className="Title"
        fullWidth
        error={error.title}
        label="Title"
        value={title}
        onChange={(text) => setTitle(text.target.value)}
        variant="outlined"
        margin="dense"
      />
      <span></span>
      <TextField
        className="Content"
        multiline
        minRows={5}
        maxRows={5}
        fullWidth
        error={error.content}
        value={content}
        onChange={(text) => setContent(text.target.value)}
        label="Post content"
        variant="outlined"
        margin="dense"
      />
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-around"
        alignItems="center"
      >
        {!edit ? (
          <TextField
            className="Author"
            label="Author"
            error={error.author}
            value={author}
            onChange={(text) => setAuthor(text.target.value)}
            variant="outlined"
            margin="dense"
          />
        ) : (
          <p>{author}</p>
        )}
        <Button
          className="ButtonSubmit"
          onClick={() => submit()}
          margin="normal"
          style={{
            color: "#2F5061",
          }}
        >
          Submit
        </Button>
      </Stack>
    </div>
  );

  function submit() {
    setError({
      title: title.length === 0,
      content: content.length === 0,
      author: author.length === 0,
    });
    console.log(error.title, error.content, error.author);
    if (!error.title && !error.content && !error.author) {
      const access = new Access();
      const post = {
        title: title,
        content: content,
        author: author,
      };
      if (!edit) {
        access.addNewPost(post);
      } else {
        access.update(id, post);
        props.isEditActive(false);
      }
    }
  }
}

export default NewPost;
