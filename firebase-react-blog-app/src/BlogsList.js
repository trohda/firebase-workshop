import { db } from "./db";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = () => {
  const [blogs, setBlogsList] = useState([]);

  const getBlogs = async () => {
    const blogsCollection = collection(db, "blogs");
    const blogsDocuments = await getDocs(blogsCollection);

    const blogsList = blogsDocuments.docs.map((doc) => ({
      id: doc.id,
      title: doc.data().title,
      content: doc.data().content,
      author: doc.data().author,
    }));

    setBlogsList(blogsList);
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div>
      <h1>All blogs</h1>
      {blogs.map((el) => (
        <Blog
          key={el.id}
          title={el.title}
          content={el.content}
          author={el.author}
        />
      ))}
    </div>
  );
};

export default Blogs;
