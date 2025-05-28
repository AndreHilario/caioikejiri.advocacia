import { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  IconButton,
  Collapse,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { generateWhatsappLink } from "../utils/sendWhatsAppMessage";

const cardData = [
  {
    id: 1,
    title: "Reajustes Abusivos de Planos de Saúde",
    description:
      "Seu plano de saúde aumentou de forma inexplicável? Muitos reajustes são ilegais e você não precisa aceitá-los. Busque seus direitos e garanta a estabilidade da sua mensalidade.",
  },
  {
    id: 2,
    title: "Negativa de Pedido de Internação Urgente",
    description:
      "Diante de uma emergência, a negativa de internação é inaceitável. Não permita que a burocracia do plano de saúde coloque sua saúde em risco. Conte com o apoio jurídico para reverter essa situação.",
  },
  {
    id: 3,
    title:
      "Negativa de Cobertura de Tratamento do Transtorno do Espectro Autista",
    description:
      "Seu plano de saúde negou a cobertura de terapias essenciais para o TEA? A lei garante o acesso a tratamentos adequados. Lute pelos direitos de quem precisa e assegure o desenvolvimento pleno.",
  },
  {
    id: 4,
    title: "Negativa de Pedido de Cirurgia Reparadora",
    description:
      "Após procedimentos como a cirurgia bariátrica ou mastectomia, a cirurgia reparadora é um direito fundamental. Não deixe que o plano de saúde ignore sua saúde e bem-estar. Saiba como reverter essa negativa.",
  },
];

export const LandingPageSection = () => {
  const [expanded, setExpanded] = useState(null);

  const handleExpand = (id: any) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh", // garante que a altura seja da viewport inteira
        backgroundColor: "#FFFFF0",
        py: { xs: 5, md: 12 },
        px: { xs: 2, sm: 3, md: 5 },
        overflowX: "hidden",
        boxSizing: "border-box",
        display: "flex", // necessário para centralização vertical
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column", // organiza os filhos em coluna
        transition: "background 0.3s",
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, sm: 4 }}
        justifyContent="center"
        alignItems="flex-start"
        sx={{ mb: 6, mx: "auto", width: "100%", flexWrap: "wrap" }}
      >
        {cardData.map((card) => {
          const isOpen = expanded === card.id;
          return (
            <Grid item xs={12} sm={6} md={3} key={card.id}>
              <Card
                elevation={isOpen ? 8 : 2}
                sx={{
                  borderRadius: 3,
                  p: 0,
                  boxShadow: isOpen ? 8 : 6,
                  background: isOpen
                    ? "linear-gradient(135deg, #0B3B60 65%, #3383A2 100%)"
                    : "linear-gradient(135deg, #FAFAFA 80%, #F0F1F3 100%)",
                  position: "relative",
                  height: isOpen ? "auto" : 180,
                  transition: "all 0.35s cubic-bezier(0.4, 1.2, 0.2, 1)",
                  width: "100%",
                  boxSizing: "border-box",
                  mx: { xs: 0, sm: 0.5 },
                  mt: 1.5,
                  overflow: "hidden",
                  border: isOpen ? "none" : "1px solid #1A304D",
                  "&:hover": {
                    boxShadow: isOpen ? 10 : 6,
                    transform: isOpen ? "scale(1.00)" : "scale(1.01)",
                    transition: "all 0.25s ease-in-out",
                  },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "stretch",
                    height: isOpen ? "auto" : 180,
                    transition: "height 0.3s cubic-bezier(0.4, 1.2, 0.2, 1)",
                  }}
                >
                  <CardContent
                    sx={{
                      flex: "1 1 auto",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      py: isOpen ? 3 : 2,
                      px: 2,
                      minHeight: 80,
                      color: isOpen ? "#fff" : "#1A304D",
                    }}
                  >
                    <Typography
                      variant="h6"
                      component="div"
                      gutterBottom
                      sx={{
                        fontWeight: 600,
                        textAlign: "center",
                        color: isOpen ? "#fff" : "#1A304D",
                        fontSize: 18,
                      }}
                    >
                      {card.title}
                    </Typography>
                  </CardContent>
                  {/* Se NÃO estiver expandido, mostra só o botão de expandir */}
                  {!isOpen && (
                    <Box
                      sx={{ display: "flex", justifyContent: "center", mb: 1 }}
                    >
                      <IconButton
                        aria-label="Expandir"
                        onClick={() => handleExpand(card.id)}
                        sx={{
                          color: "#1976d2",
                          fontSize: 28,
                        }}
                      >
                        <ExpandMoreIcon />
                      </IconButton>
                    </Box>
                  )}
                  <Collapse in={isOpen} unmountOnExit>
                    {/* Description só quando expandido */}
                    <CardContent
                      sx={{
                        pt: 2,
                        pb: 2,
                        px: 2,
                        textAlign: "center",
                        background: "rgba(255,255,255,0.12)",
                        borderRadius: 2,
                        color: "#fff",
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{ fontSize: 15, color: "#fff" }}
                      >
                        {card.description}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          mt: 2,
                        }}
                      >
                        <IconButton
                          aria-label="Fechar"
                          onClick={() => handleExpand(card.id)}
                          sx={{
                            color: "#fff",
                            fontSize: 28,
                          }}
                        >
                          <ExpandLessIcon />
                        </IconButton>
                      </Box>
                    </CardContent>
                  </Collapse>
                </Box>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: { xs: 6, md: 12 },
          px: { xs: 1, sm: 2 },
        }}
      >
        <Button
          variant="contained"
          size="large"
          href={generateWhatsappLink(
            "5512997402160",
            "Olá! Preciso do auxílio de um Advogado."
          )}
          rel="noopener noreferrer"
          sx={{
            padding: { xs: "12px 10px", sm: "14px 40px" },
            boxShadow: 3,
            borderRadius: 8,
            letterSpacing: 1,
            fontSize: { xs: "0.96rem", sm: "1.15rem" },
            width: { xs: "100%", sm: "auto" },
            maxWidth: 400,
            whiteSpace: "normal",
            textAlign: "center",
            lineHeight: 1.4,
            transition: "transform 0.2s",
            "&:hover": { transform: "scale(1.03)", boxShadow: 8 },
          }}
        >
          Converse com um advogado{"\n"}especializado
        </Button>
      </Box>
    </Box>
  );
};
