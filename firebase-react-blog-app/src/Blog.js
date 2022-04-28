const Blog = ({ title, content, author }) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{content}</p>
      <span>---{author}---</span>
      <hr />
    </>
  );
};

export default Blog;
<></>;
