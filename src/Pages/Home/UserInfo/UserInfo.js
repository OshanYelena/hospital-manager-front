import { Box } from '@mui/material'
import React from 'react'

import { connect, useSelector } from "react-redux";
import PropTypes from "prop-types";


const UserInfo = () => {

    const details = useSelector((state) => state)

    return (
        <Box sx={{
            background: '#fff',
            padding: '1rem',
            marginTop: '1.3rem',
            borderRadius: '5px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.05)',
        }}>
            You have logged in as 
                {details.auth.role === "1" && <strong> Patient</strong>}
                {details.auth.role === "2" && <strong> Doctor</strong>}
                {details.auth.role === "3" && <strong> Admin</strong>}

                
                
            
        </Box>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    details: state.post,
    g: console.log(state),
  });
  
  export default connect(mapStateToProps, {})(
    UserInfo
  );
