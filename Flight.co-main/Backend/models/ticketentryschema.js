import mongoose from "mongoose";

const ticketEntrySchema = new mongoose.Schema({
  ticketId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Ticket",
    required: false,
  },

  from_city: {
    type: String,
    required: true,
  },
  to_city: {
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

  date: {
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

  purpose_of_travel: {
    type: String,
    required: true,
    enum: [
      "Visa Validation",
      "Proof of Return",
      "Extention of Visa",
      "Proof of Travel",
      "Other",
    ],
  },
});

const TicketEntry = mongoose.model("TicketEntry", ticketEntrySchema);
export default TicketEntry;
