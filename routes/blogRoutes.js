const express = require("express");
const upload = require("../middleware/uploadMiddleware");

const {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
  getMyBlogs,
} = require("../controllers/blogController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", getBlogs);
router.get("/myblogs", protect, getMyBlogs);
router.get("/:id", getBlogById);

router.post("/", protect, createBlog);
router.put("/:id", protect, updateBlog);
router.delete("/:id", protect, deleteBlog);

module.exports = router;