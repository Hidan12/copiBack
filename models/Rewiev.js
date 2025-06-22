import { Schema, model } from "mongoose";

const collection = "Reviews";

const reviewSchema = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    ref: "Products",
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true
  },
  score: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  comment: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Review = model(collection, reviewSchema);

export default Review;