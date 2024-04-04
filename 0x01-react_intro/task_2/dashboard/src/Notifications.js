import React from "react";
import "./Notifications.css";
import icon from "./close-icon.png";
import { getLatestNotification } from "./utils";

export function Notifications() {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        <li data="default">New course available</li>
        <li data="urgent">New resume availablee</li>
        <li
          data="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
      <button
        style={{
          color: "#3a3a3a",
          fontWeight: "bold",
          background: "none",
          border: "none",
          fontSize: "15px",
          position: "absolute",
          right: "20px",
          top: "20px",
          cursor: "pointer",
        }}
        aria-label="Close"
        onClick={() => console.log("Close button has been clicked")}
      >
        <img src={icon} alt="close icon" width="10px"/>
      </button>
    </div>
  );
}
