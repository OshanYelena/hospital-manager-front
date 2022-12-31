import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button, Card, TextField, Typography } from "@mui/material";
import { Link, NavLink, useNavigate, Navigate } from "react-router-dom";
import Gender from "../../Shared/Gender/Gender";
// import useAuth from "../../../hooks/useAuth";

import api from "../../../api/api";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const PatientReg = () => {
  const [loginData, setLoginData] = useState({});
  const [login, setLogin] = useState(false);


  // const { error, registerUser } = useAuth();
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const feild = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[feild] = value;
    setLoginData(newLoginData);
    console.log(loginData);
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, address, phone, gender } = loginData;
    console.log(loginData);
    if (loginData.password !== loginData.password2) {
      alert("Your Password did not matched");
    } else {
      try {
        let data = await api
          .post("/patient/register", {
            loginData,
          })
          .then(({ data }) => data);
       const re = window.confirm("Successfully Registered in! Please login");
       if (re) { 
        setLogin(true)
       }
       
      } catch (err) {
        console.log(err)
        alert(err.response.data.msg);
      }
    }
  };

if(login) {
  return  <Navigate replace to="/login" />
}

  return (
    <div>
     
      <Container fixed>
        <Typography variant="h5" gutterBottom component="div">
          Register As Patient
        </Typography>
        <Box>
          <form className="text-center" onSubmit={handleSignUpSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} sm={12}>
                <TextField
                  sx={{ width: "70%", m: 1 }}
                  id="standard-basic"
                  label="First Name"
                  name="name"
                  onChange={handleOnChange}
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  sx={{ width: "70%", m: 1 }}
                  id="standard-basic"
                  label="Address"
                  name="address"
                  onChange={handleOnChange}
                  variant="standard"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} sm={12}>
                <TextField
                  sx={{ width: "70%", m: 1 }}
                  id="standard-basic"
                  label="Your mail"
                  name="email"
                  onChange={handleOnChange}
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  sx={{ width: "70%", m: 1 }}
                  id="standard-basic-1"
                  label="Your phone"
                  name="phone"
                  onChange={handleOnChange}
                  variant="standard"
                />
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} md={6} sm={12}>
                <TextField
                  sx={{ width: "70%", m: 1 }}
                  id="standard-basic"
                  label="Your password"
                  name="password"
                  onChange={handleOnChange}
                  variant="standard"
                  type="password"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  sx={{ width: "70%", m: 1 }}
                  id="standard-basic"
                  label="Confirm password"
                  name="password2"
                  onChange={handleOnChange}
                  variant="standard"
                  type="password"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} sm={12}>
                <FormControl>
                  <FormLabel
                    id="demo-radio-buttons-group-label"
                    style={{ color: "black", padding: "10px" }}
                  >
                    Gender
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    sx={{ display: "flex", alignItems: "flex-end" }}
                    style={{ display: "initial" }}
                  >
                    <FormControlLabel
                      name="gender"
                      onChange={handleOnChange}
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      name="gender"
                      onChange={handleOnChange}
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    {/* <FormControlLabel value="other" control={<Radio />} label="Other"  /> */}
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                {/* <div>{ error }</div> */}
              </Grid>
            </Grid>
            <Button
              sx={{ width: "30%", m: 3 }}
              varient="contained"
              type="submit"
              style={{
                backgroundColor: "green",
                color: "#fff",
              }}
            >
              Register
            </Button>
          </form>
        </Box>
        {/* Go to login Page */}
        <Link to="/login">
          <Button sx={{ width: "50%", m: 1 }} color="inherit">
            Already have an account
          </Button>
        </Link>
      </Container>
    </div>
  );
};

export default PatientReg;
