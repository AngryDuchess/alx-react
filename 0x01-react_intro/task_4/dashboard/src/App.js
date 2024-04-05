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
    <body className="App-body">
      <p>Login to access the full dashboard</p>
      <label for="email">Email:</label>
      <input type="email" id="email" />
      <label for="password">Password:</label>
      <input type="password" id="password" />
      <button type="submit" style={{marginLeft:5}}>OK</button>
    </body>
    <hr />
    <footer className="App-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
    </footer>
    </div>
  )
}