import "./NewPostSection.css";
import NewPost from "./NewPost";
import { Button } from "@mui/material";
import { useState, useRef } from "react";

function NewPostSection() {
  const newPost = useRef(null);
  const NEWPOST = "NEW POST";
  const CANCEL = "CANCEL";
  const [buttonText, setButtonText] = useState(NEWPOST);

  let content;

  content = (
    <div>
      <div ref={newPost} className="NewPost">
        {buttonText == CANCEL ? <NewPost /> : ""}
      </div>
      <Button
        className="Button"
        style={{
          color: "#2F5061",
        }}
        onClick={() => {
          if (buttonText == NEWPOST) {
            newPost.current.classList.add("show");
            setButtonText(CANCEL);
          } else {
            newPost.current.classList.remove("show");
            setButtonText(NEWPOST);
          }
        }}
      >
        {buttonText}
      </Button>
    </div>
  );
  return <div className="NewPostSection">{content}</div>;
}

export default NewPostSection;
