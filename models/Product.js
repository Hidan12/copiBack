/* This code snippet is defining a Mongoose schema for a product in a MongoDB database. Here's a
breakdown of what each part is doing: */
import { Schema, model } from "mongoose";

const collection = "Products"

const schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
      },
    brandId: {
      type: Schema.Types.ObjectId,
      ref: 'Brands',
      required: true
    },
    description: {
      type: String,
      trim: true
    },
    price: {
      type: Number,
      required: true,
      min: 0
    },
    rating: {
      average: { type: Number, default: 0 },
      count: { type: Number, default: 0 }
    },
    views: { type: Number, default: 0 },
    stock: {
      type: Map,
      of: new Schema({
        image: [{type: String, trim: true}],
        stock: {
          type: Map,
          of: Number,
          default: undefined  // puede no tener tallas, solo stock por color
        }
      }),
      required: true
    },
    image: [{
      type: String,
      trim: true
    }],
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: 'Categories',
      required: true
    },
    subCategoryId: {
      type: Schema.Types.ObjectId,
      ref: 'SubCategories',
      required: true
    },
    tags: [{ type: String, trim: true }],
    discount: {
      percentage: {type: Number, default: 0},
      finalPrice: {type: Number}
    },
    recommendation: {type: Boolean, default: false},
    plu: {type: String},
    releaseDate: {type: Date}
},{
    timestamps:true
});

const Product = model(collection, schema)

export default Product