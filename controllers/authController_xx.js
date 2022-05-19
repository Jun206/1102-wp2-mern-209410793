import User_xx from '../models/User_xx.js';

const register_xx = async (req, res, next) => {
  try {
    console.log('body', req.body);
    const user = await User_xx.create(req.body);
    const token = user.createJWT();
    res.status(201).json({ user, token });
  } catch (err) {
    // res.status(500).json({ msg: 'Error on registering user' });
    next(err);
  }

  // res.send('register user -- Hsingtai, 123456789');
};

const login_xx = async (req, res) => {
  res.send('login user -- Hsingtai, 123456789');
};

const updateUser_xx = async (req, res) => {
  res.send('Update user -- Hsingtai, 123456789');
};

export { register_xx, login_xx, updateUser_xx };
