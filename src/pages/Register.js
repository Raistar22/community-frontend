import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import './Register.css'; // Import CSS for Register page

const Register = () => {
  return (
    <Container className="register-container">
      <Box className="register-form">
        <Typography variant="h2">
          Register
        </Typography>
        <form>
          <TextField label="Name" variant="outlined" fullWidth margin="normal" />
          <TextField label="Email" variant="outlined" fullWidth margin="normal" />
          <TextField label="Password" type="password" variant="outlined" fullWidth margin="normal" />
          <Button variant="contained" color="primary" fullWidth>
            Register
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Register;
