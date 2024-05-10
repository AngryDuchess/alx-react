import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  urgent: {
    color: "red",
  },
  default: {
    color: "blue",
  },
  li: {
    width: "100%",
    borderBottom: "1px solid black",
    padding: "10px 8px",

    "@media (min-width: 600px)": {
      borderBottom: "0px",
      padding: "10px 8px",
    },
  }
});

export default class NotificationItem extends React.PureComponent {
  render() {
    const { type, html, value, id,  markNotificationAsRead } = this.props;
    return (
      <>
        {type && value ? (
          <li
            className={
              css(styles.li, type === "default" ? styles.default : styles.urgent)
            }
            // onClick={() => markAsRead(id)}
            onClick={() => markNotificationAsRead(id)}
            data-notification-type={type}
          >
            {value}
          </li>
        ) : null}
        {html ? (
          <li
            className={css(styles.li, styles.urgent)}
            // onClick={() => markAsRead(id)}
            onClick={() => markNotificationAsRead(id)}
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
