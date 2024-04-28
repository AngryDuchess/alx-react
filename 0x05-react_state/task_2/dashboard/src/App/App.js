import React from "react";
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/utils";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import { StyleSheet, css } from "aphrodite";
import { AppContext, defaultUser } from "./AppContext";

const styles = StyleSheet.create({
  App: {
    height: "100vh",
    maxWidth: "100vw",
    fontFamily: "Arial, Helvetica, sans-serif",
  },

  Top: {
    "@media (min-width: 600px)": {
      display: "flex",
      flexDirection: "row-reverse",
      justifyContent: "space-between",
    },
  },
  hr: {
    height: "3px",
    backgroundColor: "#e0354b",
  },
  "App-footer": {
    textAlign: "center",
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: defaultUser,
      logOut: () => {
        this.setState({ user: defaultUser });
      },
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
  }
  listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];
  listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
  ];
  handleKeyPress(e) {
    if (e.ctrlKey && e.key === "h") {
      alert("Logging you out");
      this.props.logOut();
    }
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  logIn(email, password) {
    this.setState({ user: { email:email, password:password, isLoggedIn: true } });
  }
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyPress);
  }

  render() {
    // const { isLoggedIn } = this.props;
    const { displayDrawer, user, logOut } = this.state;
    return (
      <AppContext.Provider value={{ user, logOut }}>
        <div className={css(styles.App)}>
          <div className={css(styles.Top)}>
            <Notifications
              displayDrawer={displayDrawer}
              listNotifications={this.listNotifications}
              handleDisplayDrawer={this.handleDisplayDrawer}
              handleHideDrawer={this.handleHideDrawer}
            />
            <Header />
          </div>
          <hr className={css(styles.hr)} />
          {user.isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={this.listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login logIn={this.logIn} />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              et neque ex. Praesent eleifend ultrices leo, non elementum ligula
              porta ac. Sed orci ex, venenatis at efficitur sit amet, gravida id
              nulla. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos.
            </p>
          </BodySection>
          <hr className={css(styles.hr)} />
          <Footer className={css(styles["App-footer"])} />
        </div>
      </AppContext.Provider>
    );
  }
}

// App.defaultProps = {
//   isLoggedIn: false,
//   logOut: () => {
//     return;
//   },
// };

// App.propTypes = {
//   isLoggedIn: PropTypes.bool,
//   logOut: PropTypes.func,
// };
export default App;
