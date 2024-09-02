import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './SocialMediaLinks.css'; // Import the CSS file

const SocialMediaLinks = () => {
  return (
    <Box className="social-media-container">
      <Typography variant="h6">Follow Us</Typography>
      <Box className="social-media-icons">
        <IconButton 
          color="primary" 
          component="a" 
          href="https://facebook.com" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FacebookIcon />
        </IconButton>
        <IconButton 
          color="primary" 
          component="a" 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <TwitterIcon />
        </IconButton>
        <IconButton 
          color="primary" 
          component="a" 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </IconButton>
        <IconButton 
          color="primary" 
          component="a" 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default SocialMediaLinks;
