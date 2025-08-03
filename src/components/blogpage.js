import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function BlogPage() {
  const [prompt, setPrompt] = useState("");
  const [blog, setBlog] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const generateBlog = async () => {
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/ollama", { prompt });
      setBlog(res.data.response);
      setPrompt(""); // Clear input after generating
    } catch (err) {
      setBlog("Error generating blog.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>AI Blog Generator (Ollama)</h2>
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <textarea
        className="form-control"
        rows={3}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Write a topic or idea..."
      />
      <button className="btn btn-primary mt-2" onClick={generateBlog} disabled={loading}>
        {loading ? "Generating..." : "Generate Blog"}
      </button>
      <div className="mt-4">
        <h5>Generated Blog:</h5>
        <pre className="p-3 bg-light rounded border">{blog}</pre>
      </div>
    </div>
  );
}

export default BlogPage;
