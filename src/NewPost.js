import "./NewPost.css";
import { useState } from "react";
import { TextField, Button, Stack } from "@mui/material";
import Access from "./AccessScript.js";

function NewPost() {
  const [error, setError] = useState({
    title: false,
    content: false,
    author: false,
  });
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  return (
    <div className="NewPost">
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
        <TextField
          className="Author"
          label="Author"
          error={error.author}
          value={author}
          onChange={(text) => setAuthor(text.target.value)}
          variant="outlined"
          margin="dense"
        />
        <Button
          className="ButtonSubmit"
          onClick={() => submit()}
          margin="normal"
        >
          Submit
        </Button>
      </Stack>
    </div>
  );

  function submit() {
    setError({
      title: title.length == 0,
      content: content.length == 0,
      author: author.length == 0,
    });
    if (!error.title && !error.content && !error.author) {
      const access = new Access();
      const post = {
        title: title,
        content: content,
        author: author,
      };
      access.addNewPost(post);
    }
  }
}

export default NewPost;
