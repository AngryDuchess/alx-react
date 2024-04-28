import React from "react"
// import "./Header.css"
import logo from "../assets/Holberton-Logo.jpg"
import { StyleSheet, css } from "aphrodite"
import { AppContext } from "../App/AppContext"

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

export default class Header extends React.Component {
  constructor(props){
    super(props);
  }
  // static contextType = AppContext;
  render() {
    return (
      <div className={css(styles['App-header'])}>
			<img className={css(styles['header-img'])} src={logo} alt='Holberton' />
			<h1>School dashboard</h1>
      {this.context.user.isLoggedIn ? (
        <p id='logoutSection'>
          Welcome {this.context.user.email} 
        <a onClick={this.context.logOut}>(logout)</a></p>
      ) : null}
		</div>
  )
}
}

Header.contextType = AppContext;

