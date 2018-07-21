import React from "react";

const PostHeader = ({ data }) => (
  <div className="postHeader">
    <img className="avatar" src={data.avatar} />
    <div className="headerContent">
      <p className="author">{data.author}</p>
      <p className="time">{data.time}</p>
    </div>
  </div>
);
export default PostHeader;
