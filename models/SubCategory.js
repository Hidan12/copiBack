import { Schema, model, Types } from "mongoose";

const collection = "SubCategories";

const schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  categoryId: {
    type: Types.ObjectId,
    ref: "Categories",
    required: true
  },
  sizes: {
    type: [String],
    required: true
  }
}, {
  timestamps: true
});

const SubCategory = model(collection, schema);

export default SubCategory;