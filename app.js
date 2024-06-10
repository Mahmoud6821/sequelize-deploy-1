import express from "express";
import { dbConnection } from "./DB/connection.js";
import User from "./DB/Models/user.model.js";
import Comment from './DB/Models/comments.model.js'
import userRouter from "./src/Modules/User/user.routes.js";
import postRouter from './src/Modules/Posts/posts.routes.js';
import commentRouter from './src/Modules/Comments/comments.routes.js';
const app = express();
const port = 8080;
dbConnection();
app.use(express.json());
app.use(userRouter);
app.use(postRouter);
app.use(commentRouter);

app.listen(port, console.log("listening on port 8080"));
