"use client";

import React, { useState } from "react";
import { Student } from "../lib/Students";

export default function LoginPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const student = new Student(name, password);
    const message = student.login();
    alert(message);
  };

  return (
    <div style={styles.container}>
      <h2>🎓 Student Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "100px auto",
    padding: "20px",
    background: "linear-gradient(270deg ,yellow,orange,red)",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    borderRadius: "10px",
    justifycontent:"center",
    Alignitems: "center",
    animation:"gradientshift 6s ease infinite"
  },
  form: {
    display: "flex",
    alignitems:"center",
    flexDirection: "column",
    padding:"20px",
    borderRadius:"12px",
    animation:"floaty 3s ease-in-out infinite",
    gap: "13px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius:"5px"
  },
  button: {
    maxWidth:"350gpx",
    padding: "10px 20px",
    background: "linear-gradient(to right ,blue,red,purple)",
    color: "white",
    border: "none",
    cursor:"pointer",
    transition:"0.3",
    borderRadius: "5px",
    fontWeight: "bold",
    animation:"floaty 2s ease-in-out infinite, ",
  },
};

