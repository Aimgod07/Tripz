import mongoose from "mongoose";

const hotelEntrySchema = new mongoose.Schema({
  hotelId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hotel",
    required: false,
  },

  check_in_date: {
    type: Date,
    required: true,
  },

  check_out_date: {
    type: Date,
    required: true,
  },

  city: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
    enum: ["Mr", "Mrs", "Miss", "Ms", "Dr"],
  },

  first_name: {
    type: String,
    required: true,
  },

  last_name: {
    type: String,
    required: true,
  },

  dob: {
    type: Date,
    required: true,
  },

  nationality: {
    type: String,
    required: true,
  },

  country_code: {
    type: String,
    required: true,
  },

  phone: {
    type: Number,
    required: true,
    match: [/^\+?[\d\s-]{10,}$/, "Please use a valid phone number"],
  },

  email: {
    type: String,
    required: true,
    match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
  },

  purpose: {
    type: String,
    required: true,
  },
});

const HotelEntry = mongoose.model("HotelEntry", hotelEntrySchema);

export default HotelEntry;
