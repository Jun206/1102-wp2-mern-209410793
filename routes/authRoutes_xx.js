import express from 'express';
const router = express.Router();

import {
  register_xx,
  login_xx,
  updateUser_xx,
} from '../controllers/authController_xx.js';

router.route('/register_xx').post(register_xx);
router.route('/login_xx').post(login_xx);
router.route('/updateUser_xx').patch(updateUser_xx);

export default router;
