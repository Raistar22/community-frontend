import React from 'react';
import { Container, Typography, Button, Box, TextField, Grid } from '@mui/material';
import './Login.css'; // Import CSS for login page

const Login = () => {
  return (
    <Container maxWidth="xs" className="login-container">
      <Box className="login-form">
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Login
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Sign in to access your account
        </Typography>
        
        <Grid container spacing={2} direction="column">
          <Grid item>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              type="email"
              required
            />
          </Grid>
          <Grid item>
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              type="password"
              required
            />
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" fullWidth>
              Login
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              href="/auth/google"
              fullWidth
            >
              Login with Google
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              href="/auth/github"
              fullWidth
            >
              Login with GitHub
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Login;
