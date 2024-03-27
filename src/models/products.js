const mongoose = require("mongoose");

const productsSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  options: [
    {
      color: {
        codHexadecimal: {
          type: String,
        },
        nameColor: {
          type: String,
        },
      },
      sizes: [
        {
          size: {
            type: Number,
            defaul: "U",
          },
          stock: {
            type: Number,
          },
        },
      ],
    },
    (required = true),
  ],
  price: {
    type: Number,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  measures: {
    type: String,
  },
  images: [
    {
      type: String,
      required: true,
    },
  ],
  offer: {
    offerActive: {
      type: Boolean,
      default: false,
    },
    offerPrice: {
      type: Number,
      default: 0,
    },
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  newProduct: {
    type: Boolean,
    defaul: false,
  },

});

module.exports = mongoose.model("Products", productsSchema);
