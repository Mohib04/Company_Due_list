const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    description: {
        type: String,
        trim: true,
        required: true,
        maclength: 32
    },
    price: {
        type: Number,
        required: true,
        maclength: 32,
        trim: true,
    },
    category: {
        type: ObjectId,
        ref: "Categroy",
        required: true
    },
    stock: {
        type: Number,

    },
    sold: {
        type: Number,
        default: 0
    },
    photo: {
        data: Buffer,
        contentType: String,

    }
}, { timestamps: true });

module.exports = mongoose.model("product", productSchema);