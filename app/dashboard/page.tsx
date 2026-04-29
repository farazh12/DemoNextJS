"use client";

import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();

  if (!session) {
    return <p style={{ padding: "50px" }}>Please login first</p>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Dashboard</h2>

        <img
          src={session.user?.image || ""}
          style={styles.img}
        />

        <p><b>Name:</b> {session.user?.name}</p>
        <p><b>Email:</b> {session.user?.email}</p>
      </div>
    </div>
  );
}

const styles: any = {
  container: {
    display: "flex",
    justifyContent: "center",
    padding: "80px",
  },
  card: {
    width: "300px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    textAlign: "center",
  },
  img: {
    width: "80px",
    borderRadius: "50%",
  },
};