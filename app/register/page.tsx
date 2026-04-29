"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    const res = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();

    if (data.error) {
      alert(data.error);
    } else {
      alert("User created successfully!");
      window.location.href = "/login";
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">

      <div className="bg-gray-900 p-8 rounded-2xl w-96">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Register 🧾
        </h1>

        <input
          className="w-full p-3 mb-3 rounded bg-gray-800"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full p-3 mb-3 rounded bg-gray-800"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full p-3 mb-3 rounded bg-gray-800"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleRegister}
          className="w-full bg-green-600 p-3 rounded hover:bg-green-700"
        >
          Create Account
        </button>

      </div>
    </div>
  );
}