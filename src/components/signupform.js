import { useState } from "react";
import axios from "axios";

function SignupForm() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", formData);
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.error || "Signup failed");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Sign Up</h2>
      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
        <div className="mb-3">
          <input name="name" className="form-control" placeholder="Name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <input name="email" className="form-control" placeholder="Email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <input name="password" type="password" className="form-control" placeholder="Password" value={formData.password} onChange={handleChange} />
        </div>
        <button className="btn btn-primary w-100" type="submit">Register</button>
        <p className="mt-3 text-center text-success">{message}</p>
      </form>
    </div>
  );
}

export default SignupForm;
