import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import CSS for Navbar

const Navbar = () => {
  return (
    <AppBar position="static" className="navbar">
      <Toolbar className="navbar-toolbar">
        <IconButton edge="start" color="inherit" aria-label="menu" className="menu-button">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Srinivasa_Ramanujan_-_OPC_-_1.jpg" 
            alt="Ramanujan Logo" 
            className="logo" 
          />
        </IconButton>
        <Button color="inherit" component={Link} to="/" className="title-button">
          <Typography variant="h6" className="title">
            Ramanujan Society
          </Typography>
        </Button>
        <Container className="navbar-links">
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
          <Button color="inherit" component={Link} to="/register">
            Register
          </Button>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
