import React from "react";
// import "./Notifications.css";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  urgent: {
    color: "red",
  },
  default: {
    color: "blue",
  },
});

export default class NotificationItem extends React.PureComponent {
  render() {
    const { type, html, value, markAsRead, id } = this.props;
    return (
      <>
        {type && value ? (
          <li
            className={
              type === "default" ? css(styles.default) : css(styles.urgent)
            }
            onClick={() => markAsRead(id)}
            data-notification-type={type}
          >
            {value}
          </li>
        ) : null}
        {html ? (
          <li
            className={css(styles.urgent)}
            onClick={() => markAsRead(id)}
            data-urgent
            dangerouslySetInnerHTML={{ __html: html }}
          ></li>
        ) : null}
      </>
    );
  }
}

NotificationItem.propTypes = {
  html: PropTypes.shape({ __html: PropTypes.string }),
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
};

NotificationItem.defaultProps = {
  type: "default",
};
