"use client";

import { signIn, useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <div className="relative min-h-screen text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-purple-900" />
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600 opacity-30 blur-[200px]" />

      {/* NAVBAR */}
      <div className="relative flex justify-between items-center px-8 md:px-16 py-6 backdrop-blur-md bg-white/5 border-b border-white/10">

        <h1 className="text-2xl font-bold tracking-wide">
          🔥 MyApp
        </h1>

        <div className="space-x-6 text-sm md:text-base flex items-center">

          {/* LOADING STATE */}
          {status === "loading" && (
            <span className="text-gray-400 text-sm">Loading...</span>
          )}

          {/* NOT LOGGED IN */}
          {!session && status !== "loading" && (
            <>
              <a href="/login" className="hover:text-purple-400 transition">
                Login
              </a>
              <a href="/register" className="hover:text-purple-400 transition">
                Register
              </a>
            </>
          )}

          {/* LOGGED IN */}
          {session && (
            <>
              <span className="text-green-400 text-sm hidden md:block">
                👋 {session.user?.name}
              </span>

              <a
                href="/dashboard"
                className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700 transition"
              >
                Dashboard
              </a>
            </>
          )}

        </div>
      </div>

      {/* HERO */}
      <div className="relative flex flex-col items-center justify-center text-center px-6 mt-24">

        <div className="mb-6 px-4 py-1 rounded-full bg-white/10 border border-white/20 text-sm text-gray-300">
          🚀 Next.js + Auth + Database System
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Build SaaS Apps <br />
          <span className="text-purple-400">Faster Than Ever</span>
        </h1>

        <p className="mt-6 text-gray-300 max-w-2xl text-lg">
          Modern authentication system with Google login, secure database users,
          and production-ready architecture built with Next.js & Prisma.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col md:flex-row gap-4">

          {!session ? (
            <>
              <a
                href="/login"
                className="px-8 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition font-semibold"
              >
                Get Started
              </a>

              <button
                onClick={() => signIn("google")}
                className="px-8 py-3 rounded-xl border border-white/30 hover:bg-white hover:text-black transition font-semibold"
              >
                Continue with Google
              </button>
            </>
          ) : (
            <a
              href="/dashboard"
              className="px-8 py-3 rounded-xl bg-green-500 hover:bg-green-600 transition font-semibold"
            >
              Go to Dashboard
            </a>
          )}

        </div>

        {/* FEATURES */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-2xl font-bold">⚡ Fast</h3>
            <p className="text-gray-400 text-sm mt-2">
              Optimized Next.js performance
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-2xl font-bold">🔐 Secure</h3>
            <p className="text-gray-400 text-sm mt-2">
              Auth + database integration
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-2xl font-bold">🚀 Scalable</h3>
            <p className="text-gray-400 text-sm mt-2">
              Production-ready architecture
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}