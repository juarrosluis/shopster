//Require Mongoose

const mongoose = require("mongoose");

//Define a schema
const Schema = mongoose.Schema;

//TODO Add sizes & colors

const createProductSchema = new Schema(
  {
    product_name: {
      type: String,
    },
    product_price: {
      type: Number,
    },
    product_url: {
      type: String,
    },
    product_img: {
      type: String,
    },
    product_details: {
      type: String,
    },
    product_short_details: {
      type: String,
    },
    available: {
      type: String,
    },
    product_category: {
      type: String,
    },
    product_id: {
      type: String,
    },
    product_sizes: {
      default: [],
      type: Object,
    },
    product_colors: {
      default: [],
      type: Array,
    },
  },
  { collection: "products" }
);

module.exports = mongoose.model("product", createProductSchema);
