import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./Alert.styles.css";

const Alert = ({ alerts }) => {
  console.log(alerts);
  return (
    alerts.length > 0 &&
    alerts.map((alert, index) => {
      if (alert.alertType === "success") {
        return (
          <aside
            key={index}
            className="success-msg s-notice s-notice__danger s-notice__important"
            role="alert"
          >
            <i class="fa fa-check"></i>
            {alert.msg}
          </aside>
        );
      } else {
        return (
          <aside
            key={index}
            className="error-msg s-notice s-notice__danger s-notice__important"
            role="alert"
          >
            <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>{" "}
            {alert.msg}
          </aside>
        );
      }
    })
  );
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps, {})(Alert);
