import React from "react";
import { Stack, Button, Box } from "@mui/material";
import { generateWhatsappLink } from "../../utils/sendWhatsAppMessage";
import logo from "../../assets/logo2.png";

const Header: React.FC = () => {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundColor: "#1A304D",
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          width: "100%",
          maxWidth: "1800px", // equivalente ao max-w-screen-2xl
          margin: "0 auto",
          paddingY: 1,
          paddingX: {
            xs: 2, // padding horizontal menor em mobile
            sm: 3, // um pouco maior em tablets
            md: 4, // ainda maior em notebooks
          },
          color: "#FFFFFF",
        }}
      >
        {/* Logo Responsiva */}
        <Box
          component="img"
          src={logo}
          alt="Logo Caio Ikejiri"
          sx={{
            p: 0.5,
            height: "auto",
            width: {
              xs: 140, // largura para telas pequenas (ex: celulares)
              sm: 180, // telas pequenas a médias
              md: 220, // telas médias para cima
            },
            objectFit: "contain",
          }}
        />

        <Button
          variant="contained"
          href={generateWhatsappLink(
            "5512997402160",
            "Olá! Preciso do auxílio de um Advogado."
          )}
          rel="noopener noreferrer"
          sx={{
            padding: "12px 16px",
          }}
        >
          Entre em contato
        </Button>
      </Stack>
    </div>
  );
};

export default Header;
