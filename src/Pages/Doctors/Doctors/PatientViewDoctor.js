import Reac, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { NavLink, Navigate } from "react-router-dom";
import { Typography } from "@mui/material";

import { getPosts } from "../../../redux/posts/posts.actions";

import { connect, useSelector } from "react-redux";
import PropTypes from "prop-types";

const token = localStorage.getItem("token");
const PatientViewDoctor = ({ isAuthenticated, post, getPosts }) => {
 
  const details = useSelector((state) => state.post)

  useEffect(() => {
    getPosts();

  }, []);

  // const getDoctors = async () => {
  //   try {
  //     let data = await api
  //       .get("/doctor/allinstructor_info")
  //       .then(({ data }) =>  setData(data));

  //   } catch (err) {
  //     alert(err.response.data.msg);
  //   }
  // };

  if (!isAuthenticated) {
    return <Navigate replace to="/login" />;
  }
  return (
    <>
      {post ? (
        <>
          {" "}
          <TableContainer component={Paper}>
            {
              <Typography variant="h6" sx={{ my: 3 }}>
                Total available doctors: { details.posts.length}
              </Typography>
            }
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell align="center" style={{ padding: "20px 0" }}>
                    Name
                  </TableCell>
                  <TableCell align="center">Specialist</TableCell>
                  <TableCell align="center">
                    Available
                    <br />
                    Hours
                  </TableCell>
                  {/* <TableCell align="center">
                    Available
                    <br />
                    Appointments
                  </TableCell> */}
                  <TableCell align="center">
                    Fee
                    <br />
                    Rs.
                  </TableCell>
                  <TableCell align="center">Phone</TableCell>
                  <TableCell align="center">Gender</TableCell>
                  
                </TableRow>
              </TableHead>
              <TableBody>
                {post.map((doctorData) => (
                  <TableRow
                    key={doctorData._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      style={{ borderRight: "1px solid #ccc" }}
                    >
                      {doctorData.name}
                    </TableCell>
                    <TableCell align="center">
                      {doctorData.specialist}
                    </TableCell>
                    <TableCell align="center">{doctorData.time}</TableCell>
                    {/* <TableCell align="center">
                      {doctorData.appointments}
                    </TableCell> */}
                    <TableCell align="center">{doctorData.fee}</TableCell>
                    <TableCell align="center">{doctorData.phone}</TableCell>
                    <TableCell align="center">{doctorData.gender}</TableCell>
                    {doctorData.appointments !== 0 && (
                      <TableCell align="center">
                        <form name="button">
                          <NavLink to={`/appointment/${doctorData._id}`}>
                            <input
                              style={{
                                color: "#fff",
                                background: "#000",
                                padding: "5px 10px",
                                cursor: "pointer",
                                border: "none",
                                borderRadius: "5px",
                                backgroundColor: "#224B0C",
                              }}
                              id="submit"
                              type="submit"
                              name="appointment"
                              value="Appointment"
                            />
                          </NavLink>
                        </form>
                      </TableCell>
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : (
        <>
          {" "}
          <div class="spinner-box">
            <div class="circle-border">
              <div class="circle-core"></div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

PatientViewDoctor.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  post: state.post.posts,
  g: console.log(state.post.posts)
});

export default connect(mapStateToProps, { getPosts })(PatientViewDoctor);
