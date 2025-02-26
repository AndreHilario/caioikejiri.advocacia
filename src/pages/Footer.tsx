import React from "react";
import {
  Box,
  Button,
  Typography,
  Divider,
  Stack,
  useMediaQuery,
  Theme,
} from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import footerImage from "../assets/footerImage.jpg"; // Importa a imagem

const FooterDesktop: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row-reverse",
        height: "60vh",
      }}
    >
      <Box
        sx={{
          width: "30%",
          height: "60vh",
          backgroundImage: `url(${footerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />

      <Box
        sx={{
          width: "70%",
          backgroundColor: "#000",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "space-between",
          pt: 18,
        }}
      >
        <Box>
          <Typography variant="h2" sx={{ fontWeight: "bold", mb: 4, px: 4 }}>
            Pronto para defender seus direitos?
          </Typography>
          <Button
            variant="contained"
            href="https://wa.me/5512997402160"
            rel="noopener noreferrer"
            startIcon={
              <ChatBubbleOutlineIcon style={{ fontSize: 15, marginRight: 2 }} />
            }
            sx={{
              transition: "transform 0.2s ease-in-out",
              padding: "10px 32px",
            }}
          >
            Falar agora no WhatsApp
          </Button>
        </Box>

        <Box sx={{ width: "100%", pb: 2 }}>
          <Divider
            sx={{
              backgroundColor: "#34D399",
              mb: 2,
              width: "100%",
              mx: "auto",
            }}
          />
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ gap: 1 }}
          >
            <Typography variant="caption" sx={{ color: "#A0A0A0" }}>
              © 2025 AndreHilario | Todos os direitos reservados
            </Typography>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

const FooterMobile: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#000",
        color: "white",
        textAlign: "center",
      }}
    >
      {/* Pergunta e Botão */}
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, px: 4 }}>
          Pronto para defender seus direitos?
        </Typography>
        <Button
          variant="contained"
          href="https://wa.me/5512997402160"
          rel="noopener noreferrer"
          startIcon={
            <ChatBubbleOutlineIcon style={{ fontSize: 15, marginRight: 2 }} />
          }
          sx={{
            transition: "transform 0.2s ease-in-out",
            padding: "10px 32px",
          }}
        >
          Falar agora no WhatsApp
        </Button>
      </Box>

      {/* Imagem entre o botão e os direitos */}
      <Box
        sx={{
          width: "100%",
          height: "45vh",
          backgroundImage: `url(${footerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          mb: 4,
          borderRadius: "10px"
        }}
      />

      {/* Divider e Direitos Reservados */}
      <Box sx={{ width: "100%", pb: 2 }}>
        <Divider
          sx={{ backgroundColor: "#34D399", mb: 2, width: "100%", mx: "auto" }}
        />
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ gap: 1 }}
        >
          <Typography variant="caption" sx={{ color: "#A0A0A0" }}>
            © 2025 AndreHilario | Todos os direitos reservados
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

const Footer: React.FC = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  ); // Define se é mobile
  return isMobile ? <FooterMobile /> : <FooterDesktop />; // Renderiza conforme o tamanho da tela
};

export default Footer;
