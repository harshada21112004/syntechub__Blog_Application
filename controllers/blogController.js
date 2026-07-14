const Blog = require("../models/Blog");

// Create Blog
const createBlog = async (req, res) => {
  try {
    const { title, content, category, image } = req.body;

    const blog = await Blog.create({
      title,
      content,
      category,
      image,
      author: req.user._id,
    });

    res.status(201).json(blog);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Blogs
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate("author", "name email");

    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Single Blog
const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate(
      "author",
      "name email"
    );

    if (!blog) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }

    res.json(blog);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Blog
const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }

    // Only owner can update
    if (blog.author.toString() !== req.user._id.toString()) {
      return res.status(401).json({
        message: "Not Authorized",
      });
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedBlog);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Blog
const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }

    // Only owner can delete
    if (blog.author.toString() !== req.user._id.toString()) {
      return res.status(401).json({
        message: "Not Authorized",
      });
    }

    await blog.deleteOne();

    res.json({
      message: "Blog deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getMyBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({
      author: req.user._id,
    });

    res.json(blogs);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
  getMyBlogs,
};