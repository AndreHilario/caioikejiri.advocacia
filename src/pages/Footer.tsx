import React from "react";
import { Box, Button, Typography } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import footerImage from "../assets/footerImage.jpg"; // Importa a imagem

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000",
        color: "white",
        textAlign: "center",
        position: "relative",
        display: "flex",
        flexDirection: { xs: "column-reverse", sm: "row-reverse" }, // Inverte a ordem: imagem à direita
        alignItems: "center",
        justifyContent: "space-between",
        height: { xs: "60vh", sm: "65vh" }, // Altura responsiva
      }}
    >
      {/* Imagem à direita */}
      <Box
        sx={{
          width: { xs: "100%", sm: "30%" }, // 100% no mobile, 50% no desktop
          height: { xs: "60vh", sm: "65vh" }, // Define a altura da imagem
          backgroundImage: `url(${footerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "10px"
        }}
      />

      {/* Conteúdo à esquerda (botão e texto) */}
      <Box sx={{ width: { xs: "100%", sm: "70%" }, textAlign: "center" }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            mb: 4,
            px: 4,
            mt: { xs: 4, sm: 8 },
          }}
        >
          Pronto para defender seus direitos?
        </Typography>

        <Button
          variant="contained"
          href="https://wa.me/5512997402160"
          rel="noopener noreferrer"
          startIcon={<ChatBubbleOutlineIcon style={{ fontSize: 15, marginRight: 2 }} />}
          sx={{
            transition: "transform 0.2s ease-in-out",
            padding: "10px 32px",
            mb: 3,
          }}
        >
          Falar agora no WhatsApp
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;
