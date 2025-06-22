import { Schema, model } from "mongoose";

const collection = "Brands"

const schema = new Schema({
    name: {type: String, required: true, trim: true},
    image: {type: String, required: true, trim: true}
},{
    timestamps:true
})

const Brand = model(collection, schema)

export default Brand