import Post from "../../../DB/Models/posts.model.js";
import User from "../../../DB/Models/user.model.js";

export const createPost = async (req, res) => {
  const { title, content, UserId } = req.body;
  const newPost = await Post.create({ title, content, UserId });

  return res.json({ message: "post created successfully", newPost });
};

export const readPost = async (req, res) => {
  const allPosts = await Post.findAll();
  return res.json({ message: "All posts found", allPosts });
};

export const updatePost = async (req, res) => {
  const { title, content } = req.body;
  const { id } = req.params;
  if (!(await Post.findByPk(id))) {
    return res.json({ message: "Post not found" });
  }
  console.log(Post.findByPk(id));
  const updatePost = await Post.update({ title, content }, { where: { id } });

  return res.json({ message: "post updated successfully", updatePost });
};


export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!(await Post.findByPk(id))) {
    return res.json({ message: "Post not found" });
  }
  const removePost = await Post.destroy({ where: { id } });
  return res.json({ message: "post deleted successfully", removePost });
};

export const userPost = async (req, res) => {
  const { id, UserId } = req.params;
  const post = await Post.findAll({
    where: {
      id,
      UserId,
    },
    include: {
      model: User,
        attributes:['username']

    },
  });
  if (!post) return res.json({ message: "post not found" });

  return res.json({ message: "post found", post });
};
