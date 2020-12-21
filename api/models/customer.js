const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: [true, ""],
  },
  first_name: {
    type: String,
    required: [true, ""],
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
    required: [true, ""],
  },
  gender: String,
  company: String,
  city: String,
  title: String,
  latitude: String,
  longitude: String,
});

const Customer = mongoose.model("Customer", CustomerSchema);

module.exports = {
  CustomerSchema,
  Customer,
};
