import React from 'react';
import { Container, Typography, Paper, Box, Button } from '@mui/material';
import SocialMediaLinks from '../components/SocialMediaLinks'; // Import the new component
import { Parallax } from 'react-parallax';
import './Home.css'; // Import CSS for Home page

const Home = () => {
  return (
    <Container maxWidth="lg" className="home-container">
      {/* Parallax Section */}
      <Parallax 
        className="parallax-home" 
        bgImage="https://your-image-url.com/path-to-background-image.jpg" 
        strength={300}
      >
        <Box className="welcome-section">
          <Typography variant="h3" component="h1" gutterBottom>
            Welcome to the College Community
          </Typography>
          <Typography variant="h5" color="textSecondary">
            Your hub for knowledge sharing, job opportunities, and more!
          </Typography>
        </Box>
      </Parallax>

      {/* Animated Section */}
      <Box className="section-transition">
        {/* Know Your Seniors Section */}
        <Paper elevation={3} className="section-paper">
          <Typography variant="h4" gutterBottom>
            Know Your Seniors
          </Typography>
          <Typography variant="body1">
            Connect with seniors who can guide you in your academic and career journey. Click below to explore more.
          </Typography>
          <Button variant="contained" color="primary">
            Explore Seniors
          </Button>
        </Paper>

        {/* Job Postings Section */}
        <Paper elevation={3} className="section-paper">
          <Typography variant="h4" gutterBottom>
            Job Postings
          </Typography>
          <Typography variant="body1">
            Stay updated with the latest job opportunities shared by our community members.
          </Typography>
          <Button variant="contained" color="primary">
            View Jobs
          </Button>
        </Paper>

        {/* Important Notes Section */}
        <Paper elevation={3} className="section-paper">
          <Typography variant="h4" gutterBottom>
            Important Notes
          </Typography>
          <Typography variant="body1">
            Access important notes and resources shared by your peers and professors.
          </Typography>
          <Button variant="contained" color="primary">
            Access Notes
          </Button>
        </Paper>
      </Box>

      {/* Social Media Links Section */}
      <SocialMediaLinks /> {/* Add the social media links section */}
    </Container>
  );
};

export default Home;
