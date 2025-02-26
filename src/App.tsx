import { Box, Divider, Stack, Typography } from "@mui/material";
import Header from "./components/header/Header";
import ExplainSection from "./pages/ExplainSection";
import FeaturesSection from "./pages/FeaturesSection";
import Footer from "./pages/Footer";
import MainSection from "./pages/MainSection";
import { MuiThemeProvider } from "./providers/MuiThemeProvider";

function App() {
  return (
    <MuiThemeProvider>
      <>
        <Header />
        <MainSection />
        <ExplainSection />
        <FeaturesSection />
        <Footer />
        <Box
          sx={{
            backgroundColor: "#000",
            py: 2,
            px: 2,
            width: "100%"
          }}
        >
          <Divider
            sx={{
              backgroundColor: "#34D399",
              mb: 2,
              width: "100%",
              mx: "auto",
              mt: 2
            }}
          />

          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{
              gap: 1,
            }}
          >
            <Typography variant="caption" sx={{ color: "#A0A0A0" }}>
              © 2025 AndreHilario | Todos os direitos reservados
            </Typography>
          </Stack>
        </Box>
      </>
    </MuiThemeProvider>
  );
}

export default App;
