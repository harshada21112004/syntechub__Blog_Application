import { useEffect, useState } from "react";
import API from "../services/api";
import BlogCard from "../components/BlogCard";

function Home() {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {

    const fetchBlogs = async () => {

      try {

        const { data } = await API.get("/blogs");

        setBlogs(data);

      } catch (error) {
        console.log(error);
      }

    };

    fetchBlogs();

  }, []);

 return (
  <div className="container mt-5">

    {/* Hero Section */}
    <div className="text-center mb-5">
      <h1>Welcome to BlogHub</h1>

      <p className="text-secondary">
        Read and share amazing blogs with the world.
      </p>
    </div>

    {/* Blog List */}
    <h2 className="mb-4">Latest Blogs</h2>

    <div className="row">
      {blogs.map((blog) => (
        <BlogCard
          key={blog._id}
          blog={blog}
        />
      ))}
    </div>

  </div>
);
}

export default Home;