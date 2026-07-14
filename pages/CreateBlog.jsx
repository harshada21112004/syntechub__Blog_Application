import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function CreateBlog() {
  const navigate = useNavigate();
  

  const [form, setForm] = useState({
    title: "",
    content: "",
    category: "",
    image: "",
  });

  const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });
};
  
  const handleSubmit = async (e) => {
  e.preventDefault();

  console.log(form); // <-- Add this line

  try {
    const token = localStorage.getItem("token");

    await API.post("/blogs", form, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    alert("Blog Created Successfully");
    navigate("/");
  } catch (error) {
    alert(error.response?.data?.message || "Error creating blog");
  }
};

  return (
    <div className="container mt-5" style={{ maxWidth: "700px" }}>
      <h2>Create Blog</h2>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          type="text"
          name="category"
          placeholder="Category"
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          type="text"
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
        />

        <textarea
          className="form-control mb-3"
          rows="6"
          name="content"
          placeholder="Write your blog..."
          onChange={handleChange}
        ></textarea>

        <button className="btn btn-success w-100">
          Publish Blog
        </button>
      </form>
    </div>
  );
}

export default CreateBlog;