//username, email, and password.
import { sequelizeInstance } from "../connection.js";
import { DataTypes } from "sequelize";
const User = sequelizeInstance.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
    },

    username: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      
    }, 

    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

export default User;
