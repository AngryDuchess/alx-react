import React from "react"
// import "./Header.css"
import logo from "../assets/Holberton-Logo.jpg"
import { StyleSheet, css } from "aphrodite"

const styles = StyleSheet.create({
'App-header': {
  color: '#e0354b',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
},
'header-img': {
  height: '200px',
},
})

export default function Header() {
  return (
    <div className={css(styles['App-header'])}>
			<img className={css(styles['header-img'])} src={logo} alt='Holberton' />
			<h1>School dashboard</h1>
		</div>
  )
}