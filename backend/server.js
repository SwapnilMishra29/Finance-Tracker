// mongodb+srv://mishraswapnil610:l2a9r1i0@cluster0.a26fksf.mongodb.net/?
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./config/db');
const transactionsRoute = require('./routes/transaction.js');

const PORT = process.env.PORT || 500;

connectDB(process.env.MONGO_URI || 'mongodb://localhost:27017/finance-tracker');

app.use(cors());
app.use(express.json());

// routes
app.use('/api/transactions', transactionsRoute);

app.get('/', (req, res) => res.send('Finance Tracker API'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
