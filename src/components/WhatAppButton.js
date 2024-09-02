import React from 'react';
import Button from '@mui/material/Button';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './WhatsAppButton.css'; // Import the CSS file

const WhatsAppButton = () => {
  const sendMessage = () => {
    const phoneNumber = '1234567890'; // Replace with the community WhatsApp number
    const message = 'Hello! I would like to join the community.';

    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="whatsapp-button">
      <Button
        variant="contained"
        startIcon={<WhatsAppIcon />}
        onClick={sendMessage}
      >
        Join WhatsApp Community
      </Button>
    </div>
  );
};

export default WhatsAppButton;
