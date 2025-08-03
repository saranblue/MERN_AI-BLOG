import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const navigate = useNavigate(); // ✅ Correct position

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);
      localStorage.setItem("token", res.data.token);
      setMessage("Login successful!");
      setTimeout(() => navigate("/blog"), 1000);
    } catch (err) {
      setMessage(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Login</h2>
      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
        <div className="mb-3">
          <input name="email" className="form-control" placeholder="Email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <input name="password" type="password" className="form-control" placeholder="Password" value={formData.password} onChange={handleChange} />
        </div>
        <button className="btn btn-success w-100" type="submit">Login</button>
        <p className="mt-3 text-center text-info">{message}</p>
      </form>
    </div>
  );
}

export default LoginForm;
