import { Router } from "express";
const router = Router();
import * as userController from './user.controller.js'

router.post('/register',userController.register);
router.get('/login',userController.login);
export default router;