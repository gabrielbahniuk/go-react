import React from "react";

import Post from "./Post";

const Content = ({ data }) => (
  <section className="content">
    {data.map(post => <Post key={post.id} data={post} />)}
  </section>
);
export default Content;
