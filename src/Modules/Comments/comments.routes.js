import { Router } from 'express';
const router = Router()
import * as commentController from './comments.controller.js';

router.post('/newComment',commentController.createComment);
router.get('/allComments',commentController.readComment);
router.put('/updateComment/:id',commentController.updateComment);
router.delete('/deleteComment/:id',commentController.deleteComment);
export default router;