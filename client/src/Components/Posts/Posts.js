import React from "react";
import Post from "./Post/Post";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import posts from "../../reducers/posts";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  console.log(posts);
  return (
    <>
      <h2>POSTS</h2>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
