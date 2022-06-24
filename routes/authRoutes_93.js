import express from 'express';
const router = express.Router();

import {
  register_93,
  login_93,
  updateUser_93,
} from '../controllers/authController_93.js';

import authenticateUser_93 from '../middleware/auth_93.js';

router.route('/register_93').post(register_93);
router.route('/login_93').post(login_93);
router.route('/updateUser_93').patch(authenticateUser_93, updateUser_93);

export default router;
