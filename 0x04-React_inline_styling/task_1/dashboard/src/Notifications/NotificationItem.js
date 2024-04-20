import React from "react";
import "./Notifications.css";
import PropTypes from "prop-types";


export default class NotificationItem extends React.PureComponent {
  render() {
    const {type,html,value, markAsRead, id} = this.props
    return (
      <>
        {type && value ? <li onClick={()=>markAsRead(id)} data-notification-type={type} >{value}</li> : null}
        {html ? (
          <li onClick={()=>markAsRead(id)} data-urgent dangerouslySetInnerHTML={{ __html: html }}></li>
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
