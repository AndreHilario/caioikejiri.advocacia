import React from "react";
import { Stack, Button, Typography, Box, Slide } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Slider from "react-slick";
import carrossel1 from "../assets/carrossel1.png";
import carrossel2 from "../assets/carrossel2.jpg";
import carrossel3 from "../assets/carrossel3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainSection: React.FC = () => {
  const slideDuration = 500;

  const settings = {
    dots: false, // Mostra os pontos de navegação
    infinite: true, // Permite que o carrossel seja infinito
    speed: 3000, // Velocidade da transição em milissegundos
    slidesToShow: 1, // Quantidade de slides visíveis por vez
    slidesToScroll: 1, // Quantidade de slides a serem percorridos por vez
    autoplay: true, // Inicia o carrossel automaticamente
    autoplaySpeed: 3000, // Intervalo entre os slides em milissegundos
    pauseOnHover: true, // Pausa o carrossel ao passar o mouse
    arrows: false, // Oculta as setas de navegação
    adaptiveHeight: true, // Ajusta a altura do carrossel ao conteúdo
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        textAlign: "center",
        py: 5,
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
            Defenda Seus Direitos no Trânsito
          </Typography>
        </Slide>
        <Slide direction="left" in={true} timeout={slideDuration * 3}>
          <Typography
            sx={{
              typography: { xs: "h6", md: "h3" },
              maxWidth: "700px",
              color: "#6B7280",
            }}
          >
            Conteste multas e defenda-se em processos de suspensão ou cassação
            da sua CNH
          </Typography>
        </Slide>
        <Slide direction="right" in={true} timeout={slideDuration * 3}>
          <Box sx={{ maxWidth: "90%", margin: "auto", mt: 5 }}>
            <Slider {...settings}>
              <div>
                <img
                  src={carrossel1}
                  alt="Depoimento Cliente 1"
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    objectFit: "cover",
                    height: "500px",
                  }}
                />
              </div>
              <div>
                <img
                  src={carrossel2}
                  alt="Caso de Sucesso 2"
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    objectFit: "cover",
                    height: "500px",
                  }}
                />
              </div>
              <div>
                <img
                  src={carrossel3}
                  alt="Serviços Especializados 3"
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    objectFit: "cover",
                    height: "500px",
                  }}
                />
              </div>
            </Slider>
          </Box>
        </Slide>
        <Slide direction="up" in={true} timeout={slideDuration * 3}>
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
        </Slide>
      </Stack>
    </Box>
  );
};

export default MainSection;
