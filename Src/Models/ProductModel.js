const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    image: { type: String },
    title1: { type: String },
    title2: { type: String },
    title3: { type: String },
    title4: { type: String },
    offer: { type: String },
    price: { type: Number },
    rating: { type: String },
    quantity: { type: Number },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const productModel = mongoose.model("Product", productSchema);

module.exports = { productModel };

