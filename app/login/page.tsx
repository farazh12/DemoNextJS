"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">

      <div className="bg-gray-900 p-8 rounded-2xl w-96 shadow-xl">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Login 🔐
        </h1>

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
          onClick={() =>
            signIn("credentials", {
              email,
              password,
              callbackUrl: "/",
            })
          }
          className="w-full bg-purple-600 p-3 rounded hover:bg-purple-700"
        >
          Login
        </button>

        <div className="my-4 text-center text-gray-400">OR</div>

        <button
          onClick={() => signIn("google")}
          className="w-full bg-red-500 p-3 rounded hover:bg-red-600"
        >
          Continue with Google
        </button>

      </div>
    </div>
  );
}