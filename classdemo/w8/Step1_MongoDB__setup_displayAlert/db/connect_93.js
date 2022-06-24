import mongoose from "mongoose";

const connectDB_93 = (url) => {
    return mongoose.connect(url);
}

export default connectDB_93;