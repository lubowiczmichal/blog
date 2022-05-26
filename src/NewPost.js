import "./NewPost.css";
import * as React from "react";
import TextField from "@mui/material/TextField";

function NewPost() {
  return (
    <div className="NewPost">
      <TextField
        id="content"
        label="Multiline"
        multiline
        maxRows={10}
        fullWidth
        variant="filled"
      />
    </div>
  );
}

export default NewPost;
