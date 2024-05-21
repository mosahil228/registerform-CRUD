import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    photo: {
      data: Buffer,
      contentType: String,
    },
    first_name: {
      type: String,
      required: true,
      trim: true,
    },
    last_name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    zipcode: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
   
    
    address: {
      type: {},
      required: true,
    },
    area: {
      type: {},
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    
    answer: {
      type: String,
      required: true,
    },
    user_type: {
      type: Number,
      default: 0,   // 0 for buyer, 1 for seller
    },
   
  },
  { timestamps: true }
);

export default mongoose.model("users", userSchema);