import React from "react";
import { Typography, Stack, Grid } from "@mui/material";
import { CheckCircle, AccessTime, DocumentScanner } from "@mui/icons-material";
import image from "../assets/explainImage.jpeg";

const ExplainSection: React.FC = () => {
  return (
    <Grid
      container
      sx={{
        backgroundColor: "#000",
        textAlign: "center",
        minHeight: "50vh",
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={{ py: 8 }}
        display={"flex"}
        flexDirection={"column"}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            mb: 4,
            mt: 2,
            color: "#FFFFFF",
          }}
        >
          Como Funciona?
        </Typography>

        <Stack
          spacing={2}
          sx={{
            px: 2,
            textAlign: "left",
            flexGrow: 1,
            justifyContent: "space-around",
            height: "100%",
          }}
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <CheckCircle sx={{ color: "#34D399", fontSize: 30 }} />
            <Typography variant="body1" sx={{ color: "#FFFFFF" }}>
              Se você foi surpreendido com uma busca e apreensão, está pagando
              juros altos no seu financiamento, sofreu um acidente por conta de
              um objeto na pista etc., entre em contato!
            </Typography>
          </Stack>

          <Stack direction="row" spacing={2} alignItems="center">
            <DocumentScanner sx={{ color: "#34D399", fontSize: 30 }} />
            <Typography variant="body1" sx={{ color: "#FFFFFF" }}>
              Explique sua situação e seu caso será cuidadosamente analisado.
            </Typography>
          </Stack>

          <Stack direction="row" spacing={2} alignItems="center">
            <AccessTime sx={{ color: "#34D399", fontSize: 30 }} />
            <Typography variant="body1" sx={{ color: "#FFFFFF" }}>
              Em pouco tempo, você receberá uma devolutiva com a melhor solução.
            </Typography>
          </Stack>
        </Stack>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <img
          src={image}
          alt="Ilustração de trânsito"
          style={{
            width: "100%",
            objectFit: "cover",
            borderRadius: "4px",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default ExplainSection;
