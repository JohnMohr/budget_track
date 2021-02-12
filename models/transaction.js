const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const transactionSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "what's good?"
    },
    value: {
      type: Number,
      required: "How much(T'ree 'Fiddy?)"
    },
    date: {
      type: Date,
      default: Date.now
    }
  }
);

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;