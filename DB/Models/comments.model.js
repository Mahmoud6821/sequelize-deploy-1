import { sequelizeInstance } from "../connection.js";
import { DataTypes } from "sequelize";
import User from "./user.model.js";
import Post from "./posts.model.js";

const Comment = sequelizeInstance.define('comments', {
    id:{
        type:DataTypes.INTEGER(11),
        primaryKey:true,
        autoIncrement:true,
    },
    content:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    timestamps:false
});
User.hasMany(Comment);
Comment.belongsTo(User);
Post.hasMany(Comment);
Comment.belongsTo(Post);

export default Comment;