import React from "react";
import {
  Stack,
  Button,
  Typography,
  Box,
  Slide,
  useMediaQuery,
  Theme,
  Grid,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import image1 from "../assets/image1.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { generateWhatsappLink } from "../utils/sendWhatsAppMessage";

const MainSectionDesktop: React.FC = () => {
  const slideDuration = 500;

  return (
    <Box className="bg-white" sx={{ height: "100vh", overflow: "hidden" }}>
      <Grid container spacing={0} sx={{ height: "100%" }}>
        <Grid item xs={12} md={6} className="flex justify-center">
          <Box className="w-full h-full">
            <img
              src={image1}
              alt="Imagem principal"
              style={{
                width: "100%",
                height: "100vh",
                objectFit: "cover",
                borderRadius: "4px",
              }}
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          className="flex flex-col justify-between items-center"
          sx={{ height: "100%", padding: 4, margin: "0 auto" }}
        >
          <Box
            className="flex flex-col justify-between items-center"
            sx={{ height: "100%", margin: "0 auto" }}
          >
            <Slide direction="down" in={true} timeout={slideDuration * 2}>
              <Typography
                variant="button"
                sx={{
                  backgroundColor: "#34D399",
                  color: "#FFFFFF",
                  p: "4px 12px",
                  borderRadius: "16px",
                  textTransform: "none",
                  width: "40%",
                  textAlign: "center",
                }}
              >
                Assessoria Jurídica
              </Typography>
            </Slide>
            <Box>
              <Slide direction="down" in={true} timeout={slideDuration * 2}>
                <Typography
                  sx={{
                    typography: "h1",
                    textAlign: "center",
                  }}
                >
                  Defesa de Condutores e de Proprietários de Veículos
                </Typography>
              </Slide>
            </Box>
            <Slide direction="up" in={true} timeout={slideDuration * 3}>
              <Box
                className="flex flex-col flex-end items-center"
                sx={{ margin: "0 auto" }}
              >
                <Button
                  variant="contained"
                  href={generateWhatsappLink(
                    "5512997402160",
                    "Olá! Preciso do auxílio de um Advogado."
                  )}
                  rel="noopener noreferrer"
                  startIcon={<WhatsAppIcon />}
                  sx={{
                    transition: "transform 0.2s ease-in-out",
                    padding: "8px 32px",
                  }}
                >
                  Entre em contato!
                </Button>
                <Typography
                  sx={{
                    typography: "h6",
                    color: "#6B7280",
                    textAlign: "center",
                    mt: 2,
                  }}
                >
                  Saiba qual a melhor solução para o seu caso!
                </Typography>
              </Box>
            </Slide>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const MainSectionMobile: React.FC = () => {
  const slideDuration = 500;

  return (
    <Box
      sx={{
        backgroundColor: "white",
        textAlign: "center",
        py: 2,
        px: 2,
        minHeight: "70vh",
      }}
    >
      <Stack spacing={4} alignItems="center">
        <Slide direction="down" in={true} timeout={slideDuration}>
          <Typography
            variant="button"
            sx={{
              backgroundColor: "#34D399",
              color: "#FFFFFF",
              p: "4px 12px",
              borderRadius: "16px",
              textTransform: "none",
            }}
          >
            Assessoria Jurídica
          </Typography>
        </Slide>

        <Slide direction="down" in={true} timeout={slideDuration * 2}>
          <Typography
            sx={{
              typography: { xs: "h2", md: "h1" },
            }}
          >
            Defesa de Condutores e de Proprietários de Veículos
          </Typography>
        </Slide>

        <Slide direction="left" in={true} timeout={slideDuration * 3}>
          <Button
            variant="contained"
            href={generateWhatsappLink(
              "5512997402160",
              "Olá! Preciso do auxílio de um Advogado."
            )}
            rel="noopener noreferrer"
            startIcon={<WhatsAppIcon />}
            sx={{
              transition: "transform 0.2s ease-in-out",
              padding: "8px 32px",
            }}
          >
            Entre em contato!
          </Button>
        </Slide>

        <Slide direction="right" in={true} timeout={slideDuration * 3}>
          <Box sx={{ width: "100%", margin: "auto", mt: 5 }}>
            <img
              src={image1}
              alt="Imagem principal"
              style={{
                width: "100%",
                borderRadius: "8px",
                objectFit: "cover",
                height: "50vh",
              }}
            />
          </Box>
        </Slide>

        <Slide direction="up" in={true} timeout={slideDuration * 3}>
          <Box
            className="flex flex-col flex-end items-center"
            sx={{ margin: "0 auto" }}
          >
            <Button
              variant="contained"
              href={generateWhatsappLink(
                "5512997402160",
                "Olá! Preciso do auxílio de um Advogado."
              )}
              rel="noopener noreferrer"
              startIcon={<WhatsAppIcon />}
              sx={{
                transition: "transform 0.2s ease-in-out",
                padding: "8px 32px",
              }}
            >
              Entre em contato!
            </Button>
            <Typography
              sx={{
                typography: "h6",
                color: "#6B7280",
                textAlign: "center",
                mt: 2,
              }}
            >
              Saiba qual a melhor solução para o seu caso!
            </Typography>
          </Box>
        </Slide>
      </Stack>
    </Box>
  );
};

const MainSection: React.FC = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  return isMobile ? <MainSectionMobile /> : <MainSectionDesktop />;
};

export default MainSection;
