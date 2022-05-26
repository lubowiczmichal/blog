import "./App.css";
import Post from "./Post";
import NewPost from "./NewPost";

function App() {
  const posts = [
    {
      title: "What is Lorem Ipsum?",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      author: "H. Rackham",
      date: new Date(),
    },
    {
      title: "Where can I get some?",
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      author: "de Finibus Bonorum et Malorum",
      date: new Date(),
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Blog</h1>
      </header>
      <div className="App-content">
        <NewPost />
        {posts.map((post) => {
          return <Post post={post} />;
        })}
      </div>
    </div>
  );
}

export default App;
