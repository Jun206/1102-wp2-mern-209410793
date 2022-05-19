import User_xx from '../models/User_xx.js';

const register_xx = async (req, res) => {
  console.log('body', req.body);
  const user = await User_xx.create(req.body);
  res.status(201).json({ user });

  // res.send('register user -- Hsingtai, 123456789');
};

const login_xx = async (req, res) => {
  res.send('login user -- Hsingtai, 123456789');
};

const updateUser_xx = async (req, res) => {
  res.send('Update user -- Hsingtai, 123456789');
};

export { register_xx, login_xx, updateUser_xx };
