import React, { useEffect, useState } from "react";
import "./Patients.css";
import { Navigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import api from "../../api/api";


import { getPatients } from "../../redux/posts/posts.actions";

import { connect } from "react-redux";
import PropTypes from "prop-types";


const token = localStorage.getItem("token");
const role = localStorage.getItem("role");

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

// no need to save
const Patients = ({isAuthenticated, getPatients, patients }) => {

  useEffect(() => {
  getPatients(localStorage.getItem('role'))
  }, []);

  if (!isAuthenticated) {
    return <Navigate replace to="/doctors" />;
  }
  return (
    <TableContainer sx={{ padding: "0 2rem" }}>
      <Table
        sx={{ minWidth: "700", margin: "0 auto" }}
        aria-label="customized table"
        className="patientTable"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Patients Name </StyledTableCell>
            <StyledTableCell align="center">Doctors Name</StyledTableCell>
            <StyledTableCell align="center">Doctors specialist</StyledTableCell>
            <StyledTableCell align="center">Date&nbsp;</StyledTableCell>
            {/* <StyledTableCell align="center">Time&nbsp;</StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          { patients? <>       {
            patients.map((row ,index) => (
              <StyledTableRow key={index}>
                <StyledTableCell align="center" component="th" scope="row">
                  {row.patientName}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.doctorName}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.specialist}
                </StyledTableCell>
                <StyledTableCell align="center">{row.date}</StyledTableCell>
                {/* <StyledTableCell align="center">{row.protein}</StyledTableCell> */}
              </StyledTableRow>
            ))}</> : <>
                      <div class="spinner-box">
            <div class="circle-border">
              <div class="circle-core"></div>
            </div>
          </div>
            </>}
   
        </TableBody>
      </Table>
    </TableContainer>
  );
}


const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  patients : state.post.patients
});

export default connect(mapStateToProps, {getPatients  })(Patients);
