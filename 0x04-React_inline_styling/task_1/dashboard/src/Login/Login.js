import React from "react";
// import "./Login.css";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  "App-body": {
    height: "40%",
    fontSize: "1rem",
    padding: "2em",
  },
});
export default function App() {
  return (
    <>
      <div className={css(styles["App-body"])}>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />
        <button type="submit" style={{ marginLeft: 5 }}>
          OK
        </button>
      </div>
    </>
  );
}
