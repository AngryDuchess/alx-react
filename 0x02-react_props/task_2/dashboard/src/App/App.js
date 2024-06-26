import React from "react";
import "./App.css";
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function App() {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        <hr />
          <Login />
        <hr />
          <Footer />
      </div>
    </>
  );
}
