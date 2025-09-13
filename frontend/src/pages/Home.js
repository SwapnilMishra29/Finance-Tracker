import { useEffect, useState } from "react";
import "./Home.css"
import { Link } from "react-router-dom";
import api from "../api";

function Home() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    api.get("/transactions").then(res => setTransactions(res.data));
  }, []);

  const deleteTransaction = async (id) => {
    await api.delete(`/transactions/${id}`);
    setTransactions(transactions.filter(t => t._id !== id));
  };
return (
  <div className="home-container">
    <h2>Transactions</h2>
    <Link to="/add">➕ Add Transaction</Link>
    <ul className="transaction-list">
      {transactions.map((t) => (
        <li className="transaction-item" key={t._id}>
          <span>{t.title} - ₹{t.amount} ({t.category})</span>
          <div className="transaction-actions">
            <Link to={`/${t._id}/edit`}>Edit</Link>
            <button onClick={() => deleteTransaction(t._id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  </div>
);
}

export default Home;
