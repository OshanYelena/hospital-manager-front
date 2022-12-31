import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import Container from "@mui/material/Container";
import { Button, Card, TextField, Typography } from "@mui/material";
import { Link, useNavigate, Navigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import useAuth from "../../hooks/useAuth";
import { login } from "../../redux/auth/auth.actions";


import api from "../../api/api";



const Login = ({login, isAuthenticated}) => {


  // const [login, setLogin] = useState(false);

  const [loginData, setLoginData] = useState({});
  const handleOnChange = (e) => {
    const feild = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[feild] = value;
    setLoginData(newLoginData);
  };



  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = loginData;
    login(loginData)
    // try {
     
      // localStorage.setItem("token", data.token);
      // localStorage.setItem("role", data.role);
      // setLogin(true);
    // } catch (err) {
    //   console.log(err);
    //   alert(err.response.data.msg);
    // }
  };
  // if(authUser) {
  //   return <Navigate replace to="/doctors" />;
  // }

  if (isAuthenticated) {
    return <Navigate replace to="/doctors" />;
  }
  return (
    <Card
      sx={{
        minWidth: 200,
        maxWidth: "100vw",
        height: "865px",
      }}
      xs={12}
      md={12}
      sm={12}
    >
      <Container fixed>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={12}
              sm={12}
              sx={{
                backgroundColor: "white",
                borderRadius: "5px",
                marginTop: "15%",
                marginLeft: "14px",
              }}
            >
              <Typography variant="h5" gutterBottom component="div">
                Login
              </Typography>
              <form onSubmit={handleLoginSubmit}>
                <TextField
                  sx={{ width: "50%", m: 1 }}
                  id="standard-basic-1"
                  label="Your mail"
                  name="email"
                  onChange={handleOnChange}
                  variant="standard"
                />

                <TextField
                  sx={{ width: "50%", m: 1 }}
                  id="standard-basic-2"
                  label="Your password"
                  name="password"
                  onChange={handleOnChange}
                  variant="standard"
                  type="password"
                />
                <Button
                  sx={{ width: "50%", m: 1 }}
                  varient="contained"
                  type="submit"
                  style={{
                    backgroundColor: "green",
                    color: "white",
                  }}
                >
                  Login
                </Button>
                <Typography>-----------OR-----------</Typography>
                <br />
                {/* {user.email ? (
                  <button onClick={logOut}>Logout</button>
                ) : (
                  <span>Not logged in</span>
                )} */}
                <br />
                {/* {user.email && <span>Logged in as : {user.displayName}</span>} */}
                <br />
                {/* {error} */}
                <Link to="/doctorLog">
                  <Button sx={{ width: "50%", m: 1 }}>Login As Doctor</Button>
                </Link>
                <Link to="/registration">
                  <Button sx={{ width: "50%", m: 1 }}>Create Account</Button>
                </Link>

              </form>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Card>
  );
};


Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  dt : console.log(state)
});
export default connect(mapStateToProps, { login})(Login);

