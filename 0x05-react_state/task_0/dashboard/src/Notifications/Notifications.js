import React, { Fragment } from "react";
import icon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from "aphrodite";


const bounce = {
  '0%': { transform: 'translateY(0px)' },
  '50%': { transform: 'translateY(-5px)' },
  '100%': { transform: 'translateY(5px)' },
};

const fadeIn = {
  '0%': { opacity: 0.5 },
  '100%': { opacity: 1 },
};

const styles = StyleSheet.create({
  fadeIn: {
    animationName: fadeIn,
    animationDuration: '1s',
    animationIterationCount: '3',
  },
  bounce: {
    animationName: bounce,
    animationDuration: '0.5s',
    animationIterationCount: '3',
  },
  Notifications: {
    border: "1px dashed rgb(250, 11, 11)",
    fontSize: "20px",
    width: "100%",
    height: "100%",
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 9999,
    backgroundColor: "#fff8f8",

    "@media (min-width: 600px)": {
      width: "auto",
      // height: "auto",
      // width: "100%",
      position: "relative",
      padding: "20px",
    },
  },
  ul: {
    listStyleType: "none",
    width: "100%",
    padding: "0",
  },
  "Notification-container": {
    "@media (min-width: 600px)": {
      display: "flex",
      flexDirection: "column",
      position: "relative",
    },
  },
  button: {
    color: "#3a3a3a",
    fontWeight: "bold",
    background: "none",
    border: "none",
    fontSize: "15px",
    position: "absolute",
    right: "8px",
    top: "10px",
    cursor: "pointer",

    "@media (min-width: 600px)": {
      right: "8px",
      top: "10px",
    },
  },
  menuItem: {
    textAlign: "right",
    // marginRight: "20px",
    cursor: "pointer",
    ":hover" : {
      animationName: [bounce, fadeIn],
      animationDuration: '0.5s',
      animationIterationCount: 'infinite',
    },
  },
});


export default class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }
  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }
  shouldComponentUpdate(nextProps) {
		return (
			nextProps.length > this.props.listNotifications.length ||
			nextProps.displayDrawer !== this.props.displayDrawer
		);
	}
  render() {
    const { displayDrawer, listNotifications, handleDisplayDrawer, handleHideDrawer } = this.props;
    return (
      <>
        {displayDrawer ? (
          <div className={css(styles["Notification-container"])}>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                paddingBottom: "10px",
              }}
            >
              <p>Your notifications</p>
            </div>
            <div className={css(styles.Notifications)}>
              <button
                className={css(styles.button)}
                // style={{
                //   color: "#3a3a3a",
                //   fontWeight: "bold",
                //   background: "none",
                //   border: "none",
                //   fontSize: "15px",
                //   position: "absolute",
                //   right: "8px",
                //   top: "10px",
                //   cursor: "pointer",
                // }}
                aria-label="Close"
                // onClick={() => console.log("Close button has been clicked")}
                onClick={handleHideDrawer}
              >
                <img src={icon} alt="close icon" width="10px" />
              </button>
              <p>Here is the list of notifications</p>
              <ul className={css(styles.ul)}>
                {listNotifications.length === 0 ? (
                  <NotificationItem value="No new notification for now" />
                ) : (
                  listNotifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      type={notification.type}
                      value={notification.value}
                      html={notification.html}
                      markAsRead={this.markAsRead}
                    />
                  ))
                )}
              </ul>
            </div>
          </div>
        ) : (
          <div className={css(styles.menuItem)} onClick={handleDisplayDrawer}>Your notifications</div>
        )}
      </>
    );
  }
}
Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleHideDrawer: PropTypes.func,
  handleDisplayDrawer: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};
