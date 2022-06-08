import "./MainPage.css";
import Post from "./Post";
import NewPostSection from "./NewPostSection";
import Access from "./AccessScript";
import { useState, useEffect } from "react";
import { SpinnerDotted } from "spinners-react";

function MainPage() {
  const [posts, setPosts] = useState([]);
  const access = new Access();
  useEffect(() => {
    async function get() {
      const posts = await access.getAllPosts();
      setPosts(posts);
    }
    const interval = setInterval(() => {
      get();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="MainPage">
      <header className="MainPage-header">
        <h1>Blog</h1>
      </header>
      <div className="MainPage-content">
        <NewPostSection />
        <div className="Posts">
          {posts && posts.length > 0 ? (
            posts.map((post) => {
              return <Post post={post} key={post.id} />;
            })
          ) : (
            <SpinnerDotted
              id="loader"
              speed={75}
              color={"#868b8e"}
              thickness={75}
              size={250}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
