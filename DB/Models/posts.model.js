import { sequelizeInstance } from "../connection.js";
import { DataTypes } from "sequelize";
import User from "./user.model.js";

const Post = sequelizeInstance.define('posts', {
    id:{
        type:DataTypes.INTEGER(11),
        primaryKey:true,
        autoIncrement:true
    },

    title:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    content:{
        type:DataTypes.STRING,
        allowNull:false,
    }

},{
    timestamps:false
});

Post.belongsTo(User);
User.hasMany(Post);

export default Post;