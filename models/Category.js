import { Schema, model } from "mongoose";

const collection = "Categories"

const schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
      },
    image:{
        type: String,
        required: true,
        trim: true
      },
},{
    timestamps:true
});

const Category = model(collection, schema)

export default Category