// Login.jsx
import { useState } from "react";
import AuthForm from "../components/AuthForm";
import { Link } from "react-router-dom";

export default function Login() {
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // Retrieve the user from local storage
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const user = JSON.parse(storedUser); // Convert the string back to an object

      // Basic credential check
      if (user.email === data.email && user.password === data.password) {
        setMessage("✅ Login successful!");
        // In a real app, you would redirect to a dashboard page
      } else {
        setMessage("❌ Invalid email or password.");
      }
    } else {
      setMessage("❌ No user found. Please sign up first.");
    }

    setTimeout(() => {
      setMessage("");
    }, 5000);
  };

  return (
    <AuthForm
      title="Login"
      onSubmit={handleLogin}
      fields={[
        { name: "email", label: "Email", type: "email", placeholder: "Enter your email" },
        { name: "password", label: "Password", type: "password", placeholder: "Enter your password" },
      ]}
      footer={
        <>
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </>
      }
      message={message}
    />
  );
}