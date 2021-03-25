import React from "react";
import { Alert } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";

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

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert1);
