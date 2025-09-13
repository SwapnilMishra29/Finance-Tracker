import { useEffect, useState } from "react";
import "./EditTransaction.css"
import { useNavigate, useParams } from "react-router-dom";
import api from "../api";

function EditTransaction() {
  const { id } = useParams();
  const [form, setForm] = useState({ title: "", amount: "", category: "", date: "" });
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/transactions/${id}`).then(res => setForm(res.data));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.put(`/transactions/${id}`, form);
    navigate("/");
  };

  return (
  <div className="edit-container">
    <h2>Edit Transaction</h2>
    <form className="edit-form" onSubmit={handleSubmit}>
      <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
      <input value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} />
      <input value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} />
      <input type="date" value={form.date?.slice(0,10)} onChange={(e) => setForm({ ...form, date: e.target.value })} />
      <button type="submit">Update</button>
    </form>
  </div>
);
}

export default EditTransaction;
