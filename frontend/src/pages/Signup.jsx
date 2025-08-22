// Signup.jsx
import { useState } from "react";
import AuthForm from "../components/AuthForm";
import { Link } from "react-router-dom";

export default function Signup() {
  const [message, setMessage] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // Retrieve the user from local storage
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const user = JSON.parse(storedUser);
      // Check if a user with this email already exists
      if (user.email === data.email) {
        setMessage("❌ An account with this email already exists.");
        setTimeout(() => {
          setMessage("");
        }, 5000);
        return; // Stop the function here
      }
    }

    // If no user exists or the email is new, save the new user data
    localStorage.setItem("user", JSON.stringify(data));
    setMessage("✅ Signup successful! You can now log in.");

    setTimeout(() => {
      setMessage("");
    }, 5000);
  };

  return (
    <AuthForm
      title="Sign Up"
      onSubmit={handleSignup}
      fields={[
        { name: "name", label: "Name", type: "text", placeholder: "Enter your name" },
        { name: "email", label: "Email", type: "email", placeholder: "Enter your email" },
        { name: "password", label: "Password", type: "password", placeholder: "Create a password" },
      ]}
      footer={
        <>
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </>
      }
      message={message}
    />
  );
}