const Transaction = require('../models/Transaction.js');

// Create
exports.createTransaction = async (req, res) => {
  try {
    const { title, amount, date, category } = req.body;
    if (!title || amount === undefined || !date || !category) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const tx = new Transaction({ title, amount, date, category });
    const saved = await tx.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Read all (with optional query: ?limit=, ?sort=-date)
exports.getTransactions = async (req, res) => {
  try {
    const { limit = 0, sort = '-date' } = req.query;
    const txs = await Transaction.find().sort(sort).limit(parseInt(limit));
    res.json(txs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Read one
exports.getTransaction = async (req, res) => {
  try {
    const tx = await Transaction.findById(req.params.id);
    if (!tx) return res.status(404).json({ message: 'Transaction not found' });
    res.json(tx);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update
exports.updateTransaction = async (req, res) => {
  try {
    const { title, amount, date, category } = req.body;
    const updated = await Transaction.findByIdAndUpdate(
      req.params.id,
      { title, amount, date, category },
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ message: 'Transaction not found' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete
exports.deleteTransaction = async (req, res) => {
  try {
    const removed = await Transaction.findByIdAndDelete(req.params.id);
    if (!removed) return res.status(404).json({ message: 'Transaction not found' });
    res.json({ message: 'Transaction deleted', id: req.params.id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
