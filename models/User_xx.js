import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const UserSchema_xx = new mongoose.Schema({
  name: {
    type: String,
    requires: [true, 'please provide name'],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  email: {
    type: String,
    requires: [true, 'please provide email'],
    validate: {
      validator: validator.isEmail,
      message: 'please provide valid email',
    },
    unique: true,
  },
  password: {
    type: String,
    requires: [true, 'please provide password'],
    minlength: 6,
    select: false,
  },
  lastName: {
    type: String,
    trim: true,
    maxlength: 30,
    default: 'lastName',
  },
  location: {
    type: String,
    trim: true,
    maxlength: 30,
    default: 'my city',
  },
});

UserSchema_xx.pre('save', async function () {
  console.log('password', this.password);
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema_xx.methods.createJWT = function () {
  //   console.log('this', this);
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME });
};

export default mongoose.model('User_xx', UserSchema_xx);
