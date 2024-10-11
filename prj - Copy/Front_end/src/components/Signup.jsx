import React, { useState } from 'react';
import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phno: "",
    password: "",
  });

  const handleChange = (event) => {
    setInput({
      ...input,  // Spread the existing input object
      [event.target.name]: event.target.value  // Update the changed field dynamically
    });
  };

  const heading = { fontSize: "2rem", fontWeight: "600" };
  const paperStyle = { 
    padding: "2rem", 
    margin: "50px auto", 
    borderRadius: "1rem", 
    boxShadow: "10px 10px"  // Correct CSS property
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Grid align="center">
        <Paper 
          style={paperStyle} 
          sx={{
            width: {
              xs: "30vw",
              sm: "25vw",
              md: "35vw",
              lg: "25.5vw",
              xl: "20.5vw"
            },
            height: "78vh"
          }}
        >
          <Typography style={heading}>Sign Up</Typography>
          <br />
          <form>
            <TextField 
              type="text" 
              label="Email" 
              name="email"  // Add name attribute
              value={input.email} 
              onChange={handleChange} 
              variant="filled" 
              sx={{ width: "300px" }} 
            /> 
            <br /><br />
            <TextField 
              type="text" 
              label="Phone Number" 
              name="phno"  // Add name attribute
              value={input.phno} 
              onChange={handleChange} 
              variant="filled" 
              sx={{ width: "300px" }} 
            /> 
            <br /><br />
            <TextField 
              type="text" 
              label="First Name" 
              name="firstname"  // Add name attribute
              value={input.firstname} 
              onChange={handleChange} 
              variant="filled" 
              sx={{ width: "300px" }} 
            /> 
            <br /><br />
            <TextField 
              type="text" 
              label="Last Name" 
              name="lastname"  // Add name attribute
              value={input.lastname} 
              onChange={handleChange} 
              variant="filled" 
              sx={{ width: "300px" }} 
            /> 
            <br /><br />
            <TextField 
              type="password" 
              label="Password" 
              name="password"  // Add name attribute
              value={input.password} 
              onChange={handleChange} 
              variant="filled" 
              sx={{ width: "300px" }} 
            /> 
            <br /><br />
            <Link to='/Login'>
              <Button variant='contained' type="submit" sx={{ width: "300px" }}>Sign Up</Button>
            </Link>
            <br /><br />
            <Link to='/Login'>
              Already have an account? Login
            </Link>
            <br /><br />
            <Link to="/Home">
              <Button variant='contained' sx={{ width: "150px" }}>Back to Home</Button>
            </Link>
          </form>
        </Paper>
      </Grid>
    </div>
  );
};

export default Signup;
