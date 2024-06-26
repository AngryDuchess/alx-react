import React, { Fragment } from "react";
import "./Notifications.css";
import icon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default function Notifications({ displayDrawer }) {
  return (
    <>
      {displayDrawer ? (
        <div className="Notification-container" style={{position:"relative"}}>
          <div className="menuItem" style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingBottom: "10px",
          }}><p>Your notifications</p></div>
          <div className="Notifications">
            <button
              style={{
                color: "#3a3a3a",
                fontWeight: "bold",
                background: "none",
                border: "none",
                fontSize: "15px",
                position: "absolute",
                right: "8px",
                top: "70px",
                cursor: "pointer",
              }}
              aria-label="Close"
              onClick={() => console.log("Close button has been clicked")}
            >
              <img src={icon} alt="close icon" width="10px" />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
              <NotificationItem type="default" value="New course available" />
              <NotificationItem type="urgent" value="New resume available" />
              <NotificationItem type="urgent" html={getLatestNotification()} />
            </ul>
          </div>
        </div>
      ) : (
        <div className="menuItem">Your notifications</div>
      )}
    </>
  );
}
