const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  images: [{ type: String }],
  price: { type: Number },
  condition: { type: String },
  stock: { type: Number },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
