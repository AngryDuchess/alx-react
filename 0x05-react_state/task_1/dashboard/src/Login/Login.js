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
  input: {
    height: "2rem",
    marginBottom: "16px",
  },
  label: {
    marginBottom: "8px",
  },
  button: {
    height: "2rem",
  },
});

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      enableSubmit: false,
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
  }
  handleLoginSubmit(event) {
    event.preventDefault();
    this.setState({ isLoggedIn: true });
  }

  handleChangeEmail(event) {
    this.setState({
      email: event.target.value,
      enableSubmit: event.target.value != '' && this.state.password !== '',
    });
  }
  handleChangePassword(event) {
    this.setState({ password: event.target.value,
    enableSubmit: event.target.value !== '' && this.state.email !== ''});
  }
  render() {
    return (
      <>
        <div className={css(styles["App-body"])}>
          <p>Login to access the full dashboard</p>
          <form onSubmit={this.handleLoginSubmit}>
            <label className={css(styles.label)} htmlFor="email">
              Email:
            </label>
            <input
              className={css(styles.input)}
              value={this.state.email}
              type="email"
              id="email"
              onChange={this.handleChangeEmail}
            />

            <label className={css(styles.label)} htmlFor="password">
              Password:
            </label>
            <input
              className={css(styles.input)}
              type="password"
              id="password"
              value={this.state.password}
              onChange={this.handleChangePassword}
            />
            <input
                className={css(styles.button)}
                type="submit"
                value="OK"
                style={{ marginLeft: 5 }}
                disabled={!this.state.enableSubmit}
              />
          </form>
        </div>
      </>
    );
  }
}
