import React from "react";
import { Box, Button, Typography } from "@mui/material";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#4b40DE", 
        py: 6, 
        textAlign: "center",
        color: "white", 
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          mb: 4, 
        }}
      >
        Pronto para defender seus direitos?
      </Typography>

      <Button
        variant="contained"
        href="https://wa.me/5512997402160"
        rel="noopener noreferrer"
        startIcon={<ChatBubbleOutlineIcon style={{ fontSize: 15, textAlign: "center", marginRight: 2, marginTop: 2 }} />}
        sx={{
          backgroundColor: "#FFFFFF",
          color: "#4b40DE",
          transition: "transform 0.2s ease-in-out",
          padding: "10px 32px",
          "&:hover": {
            backgroundColor: "#f3f4f6",
          },
        }}
      >
        Falar agora no WhatsApp
      </Button>
    </Box>
  );
};

export default Footer;
