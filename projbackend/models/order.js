const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const ProdctCartSchema = new mongoose.Schema({
    product: {
        type: ObjectId,
        ref: "Product"
    },
    name;String,
    count: Number,
    prince: Number
});

const ProdctCart = mongoose.model("ProdctCart", ProdctCartSchema);


const OrderSchema = new mongoose.Schema({
    products: [ProdctCartSchema],
    transaction_id: {},
    amount: { type: Number },
    address: String,
    updated: Date,
    user: {
        type: ObjectId,
        ref: "User"
    }
}, { timestamps: true });

const Order = mongoose.model("Order", OrderSchema);

module.exports = { Order, ProdctCart };