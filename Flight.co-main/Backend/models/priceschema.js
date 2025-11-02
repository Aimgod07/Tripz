import mongoose from "mongoose";


const priceSchema = new mongoose.Schema({
    Id:{
        type: String,
        required: false,
        unique: false
    },

    basePrice: {
        type: Number,
        required: true,
        unique: false
    },

    discount: {
        type: Number,
        required: false,
        unique: false
    },
    finalPrice: {
        type: Number,
        required: false,
        unique: false
    }})
const Price = mongoose.model("Price", priceSchema);
export default Price;