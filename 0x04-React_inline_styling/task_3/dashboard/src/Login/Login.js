import React from "react";
// import "./Login.css";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  "App-body": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    height: "40%",
    fontSize: "1rem",
    padding: "1em",

    "@media (min-width: 600px)": {
      width: "30%",
    },
  },
  "input": {
    height: "2rem",
    marginBottom: "16px",
  },
  "label": {
    marginBottom: "8px",
  },
  "button": {
    height: "2rem",
  }
  });
export default function Login() {
  return (
    <>
      <div className={css(styles["App-body"])}>
        <p>Login to access the full dashboard</p>
        {/* <div className={css(styles["form-input"])}> */}
          <label className={css(styles.label)} htmlFor="email">Email:</label>
          <input className={css(styles.input)} type="email" id="email" />
        {/* </div> */}
        {/* <div className={css(styles["form-input"])}> */}
          <label className={css(styles.label)} htmlFor="password">Password:</label>
          <input className={css(styles.input)} type="password" id="password" />
        {/* </div> */}
        <button className={css(styles.button)} type="submit" style={{ marginLeft: 5 }}>
          OK
        </button>
      </div>
    </>
  );
}
