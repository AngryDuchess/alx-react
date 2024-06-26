import React from "react";
import "./App.css";
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CourseList from "../CourseList/CourseList";
import PropTypes from "prop-types";


App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: true,
};

export default function App({ isLoggedIn }) {
  return (
    <>
      <div className="App">
        <div className="Top">

      <Notifications />
        <Header />
        </div>
        <hr />
        {
          isLoggedIn ? <CourseList /> : <Login />
        }
        <hr />
          <Footer />
      </div>
    </>
  );
}
