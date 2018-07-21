import React from "react";
import PostHeader from "./PostHeader";

const Post = ({ data }) => (
  <div className="post">
    <PostHeader data={data} />
    <p className="postContent">{data.text}</p>
  </div>
);
export default Post;
