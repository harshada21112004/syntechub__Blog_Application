import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../services/api";

function EditBlog() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    content: "",
    category: "",
    image: "",
  });

  useEffect(() => {

    const fetchBlog = async () => {

      try {

        const { data } = await API.get(`/blogs/${id}`);

        setForm({
          title: data.title,
          content: data.content,
          category: data.category,
          image: data.image,
        });

      } catch (error) {
        console.log(error);
      }

    };

    fetchBlog();

  }, [id]);

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const token = localStorage.getItem("token");

      await API.put(`/blogs/${id}`, form, {

        headers: {
          Authorization: `Bearer ${token}`,
        },

      });

      alert("Blog Updated Successfully");

      navigate("/myblogs");

    } catch (error) {

      alert(error.response?.data?.message || "Update Failed");

    }

  };

  return (
    <div className="container mt-5" style={{ maxWidth: "700px" }}>

      <h2>Edit Blog</h2>

      <form onSubmit={handleSubmit}>

        <input
          className="form-control mb-3"
          name="title"
          value={form.title}
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          name="category"
          value={form.category}
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          name="image"
          value={form.image}
          onChange={handleChange}
        />

        <textarea
          rows="6"
          className="form-control mb-3"
          name="content"
          value={form.content}
          onChange={handleChange}
        />

        <button className="btn btn-primary w-100">
          Update Blog
        </button>

      </form>

    </div>
  );
}

export default EditBlog;