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
import footerImage from "../assets/footerImage.jpg";

const FooterDesktop: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row-reverse",
        minHeight: "60vh",
      }}
    >
      <Box
        sx={{
          width: "40%",
          minHeight: "60vh",
          backgroundImage: `url(${footerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <Box
        sx={{
          width: "60%",
          backgroundColor: "rgba(16, 16, 16, 1)",
          // backgroundColor: "red",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Stack
          direction="row"
          spacing={20}
          display={"flex"}
          justifyContent="center"
          alignItems="center"
          sx={{ width: "100%", mb: 3, flexGrow: 1 }}
        >
          <Box textAlign="center">
            <Stack
              direction="column"
              spacing={1}
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h4">CAIO IKEJIRI</Typography>
              <Typography variant="h4"> ADVOGADO | OAB/SP: 511.392</Typography>
            </Stack>
          </Box>
          <Box textAlign="center">
            <Typography variant="h4" sx={{ p: 2 }}>
              DEFENDA SEUS DIREITOS
            </Typography>
            <Button
              variant="contained"
              href="https://wa.me/5512997402160"
              rel="noopener noreferrer"
              startIcon={
                <ChatBubbleOutlineIcon
                  style={{ fontSize: 15, marginRight: 2 }}
                />
              }
              sx={{
                transition: "transform 0.2s ease-in-out",
                padding: "10px 32px",
                mb: 2,
              }}
            >
              Entre em contato!
            </Button>
          </Box>
        </Stack>

        <Box sx={{ mt: "auto", pb: 1, width: "100%" }} textAlign="center">
          <Typography variant="caption" sx={{ color: "#A0A0A0" }}>
            © 2025 CaioIkejiri | Todos os direitos reservados
          </Typography>
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
        backgroundColor: "rgba(16, 16, 16, 1)",
        color: "white",
        textAlign: "center",
      }}
    >
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1, px: 4 }}>
          DEFENDA SEUS DIREITOS
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
            padding: "8px 32px",
          }}
        >
          Entre em contato!
        </Button>
      </Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "30vh",
          overflow: "hidden",
          mb: 4,
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 80,
            left: -30,
            padding: 3,
            color: "white",
            zIndex: 1,
            width: "75%",
          }}
        >
          <Typography fontSize={"12px"} sx={{ fontWeight: "bold" }}>
            CAIO IKEJIRI | ADVOGADO
            <br />
            OAB/SP: 511.392
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(${footerImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 0,
          }}
        />
      </Box>
      <Box sx={{ width: "100%", pb: 2 }}>
        <Divider
          sx={{ backgroundColor: "#34D399", mb: 2, width: "100%", mx: "auto" }}
        />
        <Stack direction="row" justifyContent="center" alignItems="center">
          <Typography variant="caption" sx={{ color: "#A0A0A0" }}>
            © 2025 CaioIkejiri | Todos os direitos reservados
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

const Footer: React.FC = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  return isMobile ? <FooterMobile /> : <FooterDesktop />;
};

export default Footer;
