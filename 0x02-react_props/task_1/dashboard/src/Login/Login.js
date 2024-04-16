import React from "react";
import "./Login.css";

export default function App() {
  return (
    <>
    <div className='App-body'>

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
