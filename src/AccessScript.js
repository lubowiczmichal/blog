class Access {
  async getAllPosts() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    console.log("START");

    const response = await fetch(
      "https://pw-posts.herokuapp.com/posts",
      requestOptions
    );
    const posts = await response.json();
    return posts;
  }

  async getPostById(id) {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const response = await fetch(
      `https://pw-posts.herokuapp.com/post/${id}`,
      requestOptions
    );
    const post = await response.json();
    return post;
  }

  getCommentsByPostId(id) {
    return null;
  }
  addNewPost(post) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(post);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://pw-posts.herokuapp.com/post", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  removePost(id) {
    var formdata = new FormData();

    var requestOptions = {
      method: "DELETE",
      body: formdata,
      redirect: "follow",
    };

    fetch(`https://pw-posts.herokuapp.com/post/${id}`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
}

export default Access;
