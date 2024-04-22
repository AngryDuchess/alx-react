import React, { Fragment } from "react";
// import "./Notifications.css";
import icon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  'Notifications':{
    border: '1px dashed rgb(250, 11, 11)',
    padding: '20px'
},
'Notification-container': {
  display: 'flex',
  flexDirection: 'column',
},
});


export default class Notifications extends React.Component {
  constructor(props) {
		super(props);
		this.markAsRead = this.markAsRead.bind(this);
	}
  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`)
  }
  shouldComponentUpdate(nextProps) {
    return nextProps.length > this.props.listNotifications.length;
  }
  render() {
    const {displayDrawer, listNotifications} = this.props
    return (
          <>
            {displayDrawer ? (
                <div className={css(styles['Notification-container'])} style={{position:"relative"}}>
            <div className="menuItem" style={{
                display: "flex",
                justifyContent: "flex-end",
                paddingBottom: "10px",
              }}><p>Your notifications</p></div>
            <div className={css(styles.Notifications)}>
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
                {
                    listNotifications.length === 0 ? (<NotificationItem value="No new notification for now" />) : (
                        listNotifications.map((notification) => (
                            <NotificationItem
                              key={notification.id}
                              type={notification.type}
                              value={notification.value}
                              html={notification.html}
                              markAsRead={this.markAsRead}
                            />
                          ))
                        )
                      }
                    </ul>
                  </div>
                </div>
              ) : (
          <div className="menuItem">Your notifications</div>
        )}
      </>
    );
  }
}
  Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
  };
  
  Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
  };