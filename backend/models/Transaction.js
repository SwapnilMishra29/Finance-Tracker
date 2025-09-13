const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  amount: { type: Number, required: true }, // positive for income, negative for expense
  date: { type: Date, required: true },
  category: { type: String, required: true, trim: true },
}, {
  timestamps: true
});

module.exports = mongoose.model('Transaction', TransactionSchema);
