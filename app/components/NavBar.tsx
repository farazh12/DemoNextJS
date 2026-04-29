"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <div style={styles.nav}>
      <div style={styles.logo}>MyApp</div>

      <div style={styles.right}>
        {session ? (
          <>
            <span style={styles.user}>
              👤 {session.user?.name}
            </span>

            <Link href="/dashboard" style={styles.link}>
              Dashboard
            </Link>

            <button onClick={() => signOut()} style={styles.logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login" style={styles.link}>Login</Link>
            <Link href="/register" style={styles.link}>Register</Link>
          </>
        )}
      </div>
    </div>
  );
}

const styles: any = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    background: "#111",
    color: "#fff",
    alignItems: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: "20px",
  },
  right: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
  user: {
    color: "#00ffcc",
  },
  logout: {
    background: "red",
    color: "white",
    border: "none",
    padding: "6px 12px",
    cursor: "pointer",
    borderRadius: "5px",
  },
};