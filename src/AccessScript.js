class Access {
  async getAllPosts() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const response = await fetch(
      "https://pw-posts.herokuapp.com/posts",
      requestOptions
    );
    const posts = await response.json();
    const offset = new Date().getTimezoneOffset();

    posts.forEach((post) => {
      const utf = this.convertFromStringToDate(post.dateTime);
      post.dateTime = this.utfToTimeZonedTime(utf, offset);
    });
    return posts;
  }

  utfToTimeZonedTime(date, offset) {
    return new Date(date.getTime() - offset * 60000);
  }
  convertFromStringToDate(date) {
    let dateComponents = date.split("T");
    let datePieces = dateComponents[0].split("-");
    let timePieces = dateComponents[1].split(":");
    return new Date(
      datePieces[0],
      datePieces[1] - 1,
      datePieces[2],
      timePieces[0],
      timePieces[1],
      timePieces[2].split(".")[0]
    );
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
    const offset = new Date().getTimezoneOffset();
    const post = await response.json();
    const utf = this.convertFromStringToDate(post.dateTime);
    post.dateTime = this.utfToTimeZonedTime(utf, offset);
    return post;
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
      .catch((error) => console.log("error", error));
  }

  update(id, post) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(post);

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`https://pw-posts.herokuapp.com/post/${id}`, requestOptions)
      .then((response) => response.text())
      .catch((error) => console.log("error", error));
  }

  removePost(id) {
    var formData = new FormData();

    var requestOptions = {
      method: "DELETE",
      body: formData,
      redirect: "follow",
    };

    fetch(`https://pw-posts.herokuapp.com/post/${id}`, requestOptions)
      .then((response) => response.text())
      .catch((error) => console.log("error", error));
  }
}

export default Access;
