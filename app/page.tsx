"use client";

import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white">

      {/* Navbar */}
      <div className="flex justify-between items-center px-10 py-6">
        <h1 className="text-2xl font-bold">🔥 MyApp</h1>

        <div className="space-x-4">
          <a href="/login" className="hover:text-purple-400">Login</a>
          <a href="/register" className="hover:text-purple-400">Register</a>
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mt-24 px-4">

        <h2 className="text-5xl font-extrabold leading-tight">
          Build Modern Apps <br /> with Next.js 🚀
        </h2>

        <p className="mt-6 text-gray-300 max-w-xl">
          A powerful authentication system with Google login, database users,
          and modern UI built in Next.js.
        </p>

        <div className="mt-8 space-x-4">
          <a
            href="/login"
            className="bg-purple-600 px-6 py-3 rounded-xl hover:bg-purple-700"
          >
            Get Started
          </a>

          <button
            onClick={() => signIn("google")}
            className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black"
          >
            Continue with Google
          </button>
        </div>
      </div>

    </div>
  );
}