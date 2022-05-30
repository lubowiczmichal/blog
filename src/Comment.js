import "./Comment.css";

function Comment(props) {
  return (
    <div className="Comment">
      <div className="Comment-Header">
        <h1 id="title">{props.comment.title}</h1>
        {
          //<p id="date">{props.comment.date.toLocaleString()}</p>
        }
      </div>
      <p id="content">{props.comment.content}</p>
      <p id="author">{props.comment.author}</p>
    </div>
  );
}

export default Comment;
