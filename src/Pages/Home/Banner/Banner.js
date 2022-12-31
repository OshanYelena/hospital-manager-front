import { Box, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { FaAccessibleIcon, FaAmbulance, FaUserTie } from "react-icons/fa";
import { GiCherish } from "react-icons/gi";
import { FiUsers } from "react-icons/fi";
import { TbClock } from "react-icons/tb";
import { MdPersonPin } from "react-icons/md";

import Moment from 'react-moment';
import moment from 'moment';


import { connect, useSelector } from "react-redux";
import PropTypes from "prop-types";

import {
  getAllPatients,
  getPatients,
} from "../../../redux/posts/posts.actions";

const Banner = ({ getAllPatients, getPatients }) => {
  useEffect(() => {
    getAllPatients();
    getPatients();
  }, []);
  const details = useSelector((state) => state.post);

  const dateNow = () => {
 
    return {
      date: moment().format("MMM Do YY"),
      time: moment().calendar()
    };
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: {
            xs: "center",
            sm: "center",
            md: "space-around",
            lg: "space-around",
            xl: "center",
          },
          alignItems: "center",
          gap: "1rem 2.6rem",
          flexWrap: "wrap",
          width: "100%",
          fontFamily: "monospace",
        }}
      >
        <Paper elevation={2} sx={{ padding: "1rem", width: "14rem" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <div>
              <GiCherish
                style={{
                  fontSize: "3rem",
                  color: "#22577E",
                  border: "2px solid #22577E",
                  borderRadius: "20%",
                  padding: "5px",
                }}
              />
            </div>
            <div>
              <Typography sx={{ fontWeight: "800" }}>
                {details.posts.length &&  details.posts.length}
              </Typography>
              <p>Doctors</p>
            </div>
          </Box>
          <Typography>
            {details.posts.length && details.posts.length - 1} doctors joined today
          </Typography>
        </Paper>
        <Paper elevation={2} sx={{ padding: "1rem", width: "14rem" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <div>
              <FaAccessibleIcon
                style={{
                  fontSize: "3rem",
                  color: "#125B50",
                  border: "2px solid #125B50",
                  borderRadius: "20%",
                  padding: "5px",
                }}
              />
            </div>
            <div>
              <Typography sx={{ fontWeight: "800" }}>
                {details.patients.length && details.patients.length}
              </Typography>
              <p>Patients</p>
            </div>
          </Box>
          <Typography>
            
            {details.allPatients.length && details.allPatients.length - 2} new patients admitted
          </Typography>
        </Paper>
        <Paper elevation={2} sx={{ padding: "1rem", width: "14rem" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <div>
              <FiUsers
                style={{
                  fontSize: "3rem",
                  color: "#1572A1",
                  border: "2px solid #1572A1",
                  borderRadius: "20%",
                  padding: "5px",
                }}
              />
            </div>
            <div>
              <Typography sx={{ fontWeight: "800" }}>
                {details.patients.length && details.patients.length}
              </Typography>
              <p>Stuffs</p>
            </div>
          </Box>
          <Typography>
            {details.patients.length && details.patients.length - 2} appointments are on vacation
          </Typography>
        </Paper>

        <Paper elevation={2} sx={{ padding: "1rem", width: "14rem" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <div>
              <TbClock
                style={{
                  fontSize: "3rem",
                  color: "#0E3EDA",
                  border: "2px solid #0E3EDA",
                  borderRadius: "20%",
                  padding: "5px",
                }}
              />
            </div>
            <div>
              <Typography sx={{ fontWeight: "800" }}>Time</Typography>
              <p>
           {moment().format("MMM Do YY")}
              </p>
            </div>
          </Box>
          
          <Typography>{moment().calendar()}</Typography>
        </Paper>
        {/* <Paper elevation={2} sx={{ padding: '1rem', width:'14rem' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
            <div>
              <FaAmbulance style={{
                fontSize: '3rem',
                color: '#B33030',
                border: '2px solid #B33030',
                borderRadius: '20%',
                padding: '5px'
              }} />
            </div>
            <div>
              <Typography sx={{ fontWeight: '800' }}>120</Typography>
              <p>Ambulence</p>
            </div>
          </Box>
          <Typography>
            19 Ambulence In service
          </Typography>
        </Paper>
        <Paper elevation={2} sx={{ padding: '1rem', width:'14rem' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
            <div>
              <MdPersonPin style={{
                fontSize: '3rem',
                color: '#7B1EA2',
                border: '2px solid #7B1EA2',
                borderRadius: '20%',
                padding: '5px'
              }} />
            </div>
            <div>
              <Typography sx={{ fontWeight: '800' }}>12</Typography>
              <p>Representative</p>
            </div>
          </Box>
          <Typography>
            6 Representative is active
          </Typography>
        </Paper> */}
      </Box>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  details: state.post,
  g: console.log(state),
});

export default connect(mapStateToProps, { getAllPatients, getPatients })(
  Banner
);
