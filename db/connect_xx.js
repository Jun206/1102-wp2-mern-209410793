import mongoose from 'mongoose';

const connectDB_xx = (url) => {
  return mongoose.connect(url);
}

export default connectDB_xx;