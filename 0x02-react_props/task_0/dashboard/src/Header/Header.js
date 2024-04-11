import React from "react"
import "./Header.css"
import logo from "../assets/Holberton-Logo.jpg"


export default function App() {
  return (
    <div className='App-header'>
			<img src={logo} alt='Holberton' />
			<h1>School dashboard</h1>
		</div>
  )
}