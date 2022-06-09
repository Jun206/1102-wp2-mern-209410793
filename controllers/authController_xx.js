import User_xx from '../models/User_xx.js';
import { StatusCodes } from 'http-status-codes';

const register_xx = async (req, res, next) => {
  console.log('body', req.body);
  const user = await User_xx.create(req.body);
  const token = user.createJWT();
  res
    .status(StatusCodes.CREATED)
    .json({ user, token, location: user.location });

  // add express-async-errors, remove try catch block
  // try {
  //   console.log('body', req.body);
  //   const user = await User_xx.create(req.body);
  //   const token = user.createJWT();
  //   res.status(201).json({ user, token });
  // } catch (err) {
  //   next(err);
  // }

  // res.send('register user -- Hsingtai, 123456789');
};

const login_xx = async (req, res) => {
  res.send('login user -- Hsingtai, 123456789');
};

const updateUser_xx = async (req, res) => {
  res.send('Update user -- Hsingtai, 123456789');
};

export { register_xx, login_xx, updateUser_xx };
