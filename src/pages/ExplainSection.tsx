import React from "react";
import { Typography, Stack } from "@mui/material";

const ExplainSection: React.FC = () => {
  return (
    <Stack
      sx={{
        backgroundColor: "#F9FAFB", 
        py: 8, 
        textAlign: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          mb: 4, 
          color: "#111827",
        }}
      >
        Como Funciona
      </Typography>

      <Stack
        spacing={4}
        sx={{ maxWidth: "70%", mx: "auto", textAlign: "left" }}
      >
        <Typography variant="body1" sx={{ color: "#4B5563" }}>
          Se você foi surpreendido por uma multa de trânsito ou foi notificado
          sobre a suspensão ou cassação da sua CNH, saiba que muitas vezes é
          possível recorrer.
        </Typography>
        <Typography variant="body1" sx={{ color: "#4B5563" }}>
          Você envia o AIT (Auto de Infração de Trânsito) ou a Notificação de
          Penalidade e explica brevemente sua situação.
        </Typography>
        <Typography variant="body1" sx={{ color: "#4B5563" }}>
          Em pouco tempo receberá uma devolutiva e saberá se sua multa poderá
          ser anulada.
        </Typography>
        <Typography variant="body1" sx={{ color: "#4B5563" }}>
          A depender da situação, poderão ser solicitados outros documentos para
          melhor analisar o caso.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ExplainSection;
