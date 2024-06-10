import { Router } from 'express';
const router = Router()
import * as postController from './posts.controller.js';

router.post('/newPost',postController.createPost);
router.get('/allPosts',postController.readPost);
router.put('/updatePost/:id',postController.updatePost);
router.delete('/deletePost/:id',postController.deletePost);
router.get('/post/:id/:UserId',postController.userPost)
export default router;