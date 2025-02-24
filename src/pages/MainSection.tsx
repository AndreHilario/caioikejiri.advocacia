import React from "react";
import { Stack, Button, Typography, Box } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const MainSection: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        textAlign: "center",
        py: 5,
        px: 2,
      }}
    >
      <Stack spacing={4} alignItems="center">
        <Typography
          variant="button"
          sx={{
            backgroundColor: "#EDE9FE",
            color: "#4b40DE",
            p: "4px 12px",
            borderRadius: "16px",
            textTransform: "none",
          }}
        >
          Assessoria Jurídica
        </Typography>

        <Typography
          sx={{
            typography: { xs: "h2", md: "h1" }, // Reduz o tamanho do título em telas menores
          }}
        >
          Defenda Seus Direitos no Trânsito
        </Typography>

        <Typography
          sx={{
            typography: { xs: "h6", md: "h3" }, // Reduz o tamanho do subtítulo em telas menores
            maxWidth: "700px",
            color: "#6B7280",
          }}
        >
          Recorra de Multas e de Processos de Suspensão ou Cassação de sua CNH
        </Typography>

        <Button
          variant="contained"
          href="https://wa.me/5512997402160"
          rel="noopener noreferrer"
          startIcon={<WhatsAppIcon />}
          sx={{
            transition: "transform 0.2s ease-in-out",
            padding: "8px 32px",
          }}
        >
          Falar agora no WhatsApp
        </Button>
      </Stack>
    </Box>
  );
};

export default MainSection;
