import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

function BlogDetails() {
  const { id } = useParams();

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const { data } = await API.get(`/blogs/${id}`);
        setBlog(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <h3 className="text-center mt-5">Loading...</h3>;
  }

  return (
    <div className="container mt-5">
      <img
        src={blog.image || "https://via.placeholder.com/800x350"}
        className="img-fluid rounded mb-4"
        alt={blog.title}
      />

      <h1>{blog.title}</h1>

      <p className="text-muted">
        <strong>Category:</strong> {blog.category}
      </p>

      <p>
        <strong>Author:</strong> {blog.author.name}
      </p>

      <hr />

      <p>{blog.content}</p>
    </div>
  );
}

export default BlogDetails;