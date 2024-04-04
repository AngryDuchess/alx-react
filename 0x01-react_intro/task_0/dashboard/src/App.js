import "./App.css"
import logo from "./Holberton-Logo.jpg"

export default function App() {
  return (
    < div className="App">
    <header className="App-header">
      <img src={logo} />
      <h1>School dashboard</h1>
    </header>
    <hr />
    <body className="App-body">
      <p>Login to access the full dashboard</p>
    </body>
    <hr />
    <footer className="App-footer">
      <p>Copyright 2020 - holberton School</p>
    </footer>
    </div>
  )
}