import React from "react";
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CourseList from "../CourseList/CourseList";
import PropTypes from "prop-types";
import { getLatestNotification } from "../utils/utils";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  App: {
    height: "100vh",
    maxWidth: "100vw",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
  Top: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
  hr: {
    height: "3px",
    backgroundColor: "#e0354b",
  },
  'App-footer': {
    textAlign: 'center',
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
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
    { id: 4, type: "default", value: "Foo" },
  ];
  handleKeyPress(e) {
    if (e.ctrlKey && e.key === "h") {
      alert("Logging you out");
      this.props.logOut();
    }
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyPress);
  }

  render() {
    const { isLoggedIn } = this.props;
    return (
      <>
        <div className={css(styles.App)}>
          <div className={css(styles.Top)}>
            <Notifications listNotifications={this.listNotifications} />
            <Header />
          </div>
          <hr className={css(styles.hr)} />
          {isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={this.listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
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
          <Footer className={css(styles['App-footer'])} />
        </div>
      </>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {
    return;
  },
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};
export default App;
