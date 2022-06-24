import User_93 from '../models/User_93.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, UnAuthenticatedError } from '../errors/index.js';

const register_93 = async (req, res, next) => {
  console.log('body', req.body);
  const user = await User_93.create(req.body);
  const token = user.createJWT();
  console.log('register user', user);
  res
    .status(StatusCodes.CREATED)
    .json({ user, token, location: user.location });
};

const login_93 = async (req, res) => {
  console.log('body', req.body);
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError('please provide all values');
  }

  const user = await User_93.findOne({ email }).select('+password');
  console.log('login user', user);

  if (!user) {
    throw new UnAuthenticatedError('Invalid Credentials');
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError('Invalid Credentials -- Password not match');
  }

  const token = user.createJWT();
  user.password = undefined;
  console.log('login json', { user, token });
  res.status(StatusCodes.OK).json({
    user,
    token,
    location: user.location,
  });
};

const updateUser_93 = async (req, res) => {
  const { email, name, lastName, location } = req.body;
  if (!email || !name || !lastName || !location) {
    throw new BadRequestError('Please provide all values');
  }

  console.log('body', req.body);
  console.log('_id', req.user.userId);
  await User_93.findOneAndUpdate({ _id: req.user.userId }, req.body);
  const user = await User_93.findOne({ _id: req.user.userId });

  // user.email = email;
  // user.name = name;
  // user.lastName = lastName;
  // user.location = location;
  // // user.password = password;

  // console.log('user', user);

  // const user2 = await User_93.findByIdAndUpdate(req.user.userId, user);

  const token = user.createJWT();

  res.status(StatusCodes.OK).json({ user, token, location: user.location });
  // res.send('Update user -- Hsingtai, 123456789');
};

export { register_93, login_93, updateUser_93 };
