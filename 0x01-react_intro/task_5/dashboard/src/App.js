import React from "react"
import "./App.css"
import logo from "./Holberton-Logo.jpg"
import getFullYear, { getFooterCopy } from "./utils";

export default function App() {
  return (
    < div className="App">
    <header className="App-header">
      <img src={logo} alt="holberton logo"/>
      <h1>School dashboard</h1>
    </header>
    <hr />
    <div className="App-body">
      <p>Login to access the full dashboard</p>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" />
      <button type="submit" style={{marginLeft:5}}>OK</button>
    </div>
    <hr />
    <footer className="App-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
    </footer>
    </div>
  )
}