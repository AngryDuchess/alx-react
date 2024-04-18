import React from "react";
import "./Notifications.css";
import PropTypes from "prop-types";

NotificationItem.propTypes = {
    html: PropTypes.shape({__html: PropTypes.string}),
    value: PropTypes.string,
    type: PropTypes.string.isRequired,
};

NotificationItem.defaultProps = {
    type: "default",
};

export default function NotificationItem ({type,html,value}) {
    return (
        <>
        {type && value ? <li data-notification-type={type}>{value}</li> : null}
        {html ? <li data-urgent dangerouslySetInnerHTML={{__html: html}}></li> : null}
        </>
    )
}
