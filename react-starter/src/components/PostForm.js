import React, { useState } from "react";
import axios from "axios";

const PostForm = () => {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState({
    title: "",
    body: ""
  });

  const onChange = event => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    setLoading(true);

    axios
      .post("/post", post)
      .then(res => {
        console.log(res.data);
        setPost({ title: "", body: "" });
        setLoading(false);
      })
      .catch(err => console.error(err));
  };

  return (
    <>
      {!loading ? (
        <form className="push-in" onSubmit={onSubmit}>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value={post.title}
              onChange={onChange}
              className="validate"
            />
          </div>
          <div className="input-field">
            <label htmlFor="body">Body</label>
            <input
              type="text"
              name="body"
              value={post.body}
              onChange={onChange}
              className="validate"
            />
          </div>
          <button className="waves-effect waves-light btn">Add</button>
        </form>
      ) : (
        <div className="progress">
          <div className="indeterminate" />
        </div>
      )}
    </>
  );
};

export default PostForm;
