/*
 * Proptypes are to catch bugs with typechecking. React has built in typechecking abilities. Since we are receiving an array from response of the json errors object,
 * we make sure that whats passed in is an array
 */

import React from "react";
import { Alert } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux"; //Calling actions or getting state with redux

const Alert1 = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <Alert key={alert.id} variant={alert.alertType}>
      {alert.msg}
    </Alert>
  ));

Alert1.propTypes = {
  alerts: PropTypes.array.isrequired,
};

// Mapping redux state to props in component, which for us is the array of alerts, get state inside of alert
const mapStateToProps = (state) => ({
  alerts: state.alert,
});

// Connect alert to redux store
export default connect(mapStateToProps)(Alert1);
