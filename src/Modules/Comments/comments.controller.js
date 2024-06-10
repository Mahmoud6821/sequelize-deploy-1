import Comment from "../../../DB/Models/comments.model.js";

export const createComment = async (req, res) => {
  const {content, UserId ,postId} = req.body;
  const newComment = await Comment.create({content,UserId,postId });

  return res.json({ message: "Comment created successfully", newComment });
};

export const readComment = async (req, res) => {
  const allComments = await Comment.findAll();
  return res.json({ message: "All Comments found", allComments });
};

export const updateComment = async (req, res) => {
  const { content} = req.body;
  const { id } = req.params;
  if(!await Comment.findByPk(id)){
    return res.json({message:"Comment not found"})
  }
  console.log(Comment.findByPk(id));
  const updateComment = await Comment.update(
    { content },
    { where: { id } }
  );

  return res.json({ message: "Comment updated successfully", updateComment });

};
export const deleteComment= async (req,res)=>{
  const { id } = req.params;

  if(!await Comment.findByPk(id)){
    return res.json({message:"Comment not found"})
  }
const removeComment = await Comment.destroy({where:{id}})
return res.json({ message: "Comment deleted successfully", removeComment });


}
