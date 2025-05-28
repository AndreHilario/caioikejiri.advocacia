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
        backgroundColor: "#1A304D"
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        className="max-w-7xl mx-auto py-1 px-1"
        color="#FFFFFF"
      >
        {/* Logo Responsiva */}
        <Box
          component="img"
          src={logo}
          alt="Logo Caio Ikejiri"
          sx={{
            p: 0.5,
            height: "auto",
            width: 220,
            objectFit: "contain"
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
            padding: "8px 16px",
          }}
        >
          Entre em contato
        </Button>
      </Stack>
    </div>
  );
};

export default Header;
