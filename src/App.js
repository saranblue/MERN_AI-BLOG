import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import SignupForm from "./components/signupform";
import LoginForm from "./components/loginform";
import BlogPage from "./components/blogpage";
import { ThemeContext } from "./components/themecontext";

function App() {
  const { dark } = useContext(ThemeContext);

  return (
    <div className={dark ? "bg-dark text-light min-vh-100" : "bg-light text-dark min-vh-100"}>
      <div className="container py-4">
        <ThemeToggle />
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </div>
    </div>
  );
}

const AuthPage = () => (
  <div className="container mt-5">
    <h1 className="text-center mb-4">MERN Auth App</h1>
    <div className="row">
      <div className="col-md-6">
        <SignupForm />
      </div>
      <div className="col-md-6">
        <LoginForm />
      </div>
    </div>
  </div>
);

function ThemeToggle() {
  const { dark, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="text-end mb-3">
      <button className="btn btn-outline-secondary" onClick={toggleTheme}>
        {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  );
}

export default App;
