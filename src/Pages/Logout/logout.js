import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import { logout } from "../../redux/auth/auth.actions";
import '../../loading.css'
const Logout = ({ isAuthenticated, logout }) => {
  useEffect(() => {
    logout();
  }, []);
  return (
    <div>
      {!isAuthenticated ? (
        <>
          <Navigate replace to="/login" />;
        </>
      ) : (
        <>
          <div class="spinner-box">
            <div class="circle-border">
              <div class="circle-core"></div>
            </div>
          </div>{" "}
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Logout);
