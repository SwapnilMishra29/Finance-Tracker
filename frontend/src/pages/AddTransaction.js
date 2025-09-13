import { useState } from "react";
import "./AddTransaction.css"
import { useNavigate } from "react-router-dom";
import api from "../api";

const sampleTransactions = [
  { id: 1, title: "Salary", amount: 5000, type: "income", date: "2025-09-01" },
  { id: 2, title: "Groceries", amount: 1200, type: "expense", date: "2025-09-03" },
  { id: 3, title: "Freelance Project", amount: 2000, type: "income", date: "2025-09-05" },
  { id: 4, title: "Netflix Subscription", amount: 500, type: "expense", date: "2025-09-07" }
];

function AddTransaction() {
  const [form, setForm] = useState({ title: "", amount: "", category: "", date: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/transactions", form);
    navigate("/");
  };

  return (
  <div className="add-container">
    <h2>Add Transaction</h2>
    <form className="add-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Title"
        onChange={(e) => setForm({ ...form, title: e.target.value })} />
      <input type="number" placeholder="Amount"
        onChange={(e) => setForm({ ...form, amount: e.target.value })} />
      <input type="text" placeholder="Category"
        onChange={(e) => setForm({ ...form, category: e.target.value })} />
      <input type="date"
        onChange={(e) => setForm({ ...form, date: e.target.value })} />
      <button type="submit">Add</button>
    </form>
  </div>
);
}

export default AddTransaction;
