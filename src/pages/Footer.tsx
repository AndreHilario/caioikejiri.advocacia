import React from "react";
import { Box, Button, Typography, Stack, Divider } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000",
        color: "white",
        textAlign: "center",
        pt: 6,
        position: "relative",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          mb: 4,
          px: 4,
        }}
      >
        Pronto para defender seus direitos?
      </Typography>

      <Button
        variant="contained"
        href="https://wa.me/5512997402160"
        rel="noopener noreferrer"
        startIcon={<ChatBubbleOutlineIcon />}
        sx={{
          transition: "transform 0.2s ease-in-out",
          padding: "10px 32px",
          mb: 3,
        }}
      >
        Falar agora no WhatsApp
      </Button>

      <Divider
        sx={{
          backgroundColor: "#34D399",
          my: 2,
          width: "95%",
          mx: "auto",
        }}
      />

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          px: 5,
          pb: 2,
          flexWrap: "wrap",
        }}
      >
        <Typography variant="caption" sx={{ color: "#A0A0A0" }}>
          © 2025 AndreHilario | Todos os direitos reservados
        </Typography>

        <Typography variant="caption" sx={{ color: "#A0A0A0" }}>
          AndreHilario
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
