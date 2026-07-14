import { useEffect, useState } from "react";
import API from "../services/api";
import BlogCard from "../components/BlogCard";

function MyBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchMyBlogs = async () => {
      try {
        const token = localStorage.getItem("token");

        const { data } = await API.get("/blogs/myblogs", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setBlogs(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMyBlogs();
  }, []);

  return (
    <div className="container mt-5">
      <h2>My Blogs</h2>

      <div className="row">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default MyBlogs;