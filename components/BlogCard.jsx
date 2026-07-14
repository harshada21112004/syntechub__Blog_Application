import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

function BlogCard({ blog }) {
  const navigate = useNavigate();

  const deleteBlog = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?"
    );

    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");

      await API.delete(`/blogs/${blog._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      
      alert("Blog deleted successfully!");

      window.location.reload();

    } catch (error) {
      alert(error.response?.data?.message || "Delete Failed");
    }
  };
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">

        <img
          src={blog.image || "https://via.placeholder.com/400x200"}
          className="card-img-top"
          alt={blog.title}
        />

        <div className="card-body">

          <h5 className="fw-bold">{blog.title}</h5>

          <p className="text-secondary">
            {blog.content.substring(0, 100)}...
          </p>

          <p>
            <strong>Category:</strong> {blog.category}
          </p>

          <Link
            className="btn btn-primary"
            to={`/blog/${blog._id}`}
          >
            Read More
          </Link>
          <div className="mt-3">

            <Link
              to={`/edit/${blog._id}`}
              className="btn btn-warning me-2"
            >
              Edit
            </Link>

            <button
             className="btn btn-primary rounded-pill"
              onClick={deleteBlog}
            >
              Delete
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}

export default BlogCard;