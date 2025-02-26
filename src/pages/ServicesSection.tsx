import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  Slide,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import GavelIcon from "@mui/icons-material/Gavel";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import BrokenImageIcon from "@mui/icons-material/BrokenImage";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: 1,
    title: "Ações Indenizatórias",
    description:
      "Equipe especializada em resolver com eficiência casos relacionados a ações indenizatórias no trânsito. Buscamos a justa compensação por danos materiais e morais decorrentes de acidentes e outras ocorrências.",
    icon: <GavelIcon style={{ color: "#34D399", fontSize: "48px" }} />,
  },
  {
    id: 2,
    title: "Suspensão do Direito de Dirigir",
    description:
      "Defenda-se em processos de suspensão da CNH. Garantimos a melhor estratégia para você, analisando cada detalhe do processo administrativo para reverter a suspensão.",
    icon: <DriveEtaIcon style={{ color: "#34D399", fontSize: "48px" }} />,
  },
  {
    id: 3,
    title: "Transferência Judicial de Documentos",
    description:
      "Apoio especializado em processos de transferência judicial de documentos, de forma rápida e segura. Resolvemos pendências burocráticas para garantir a regularização de seus documentos.",
    icon: <FileCopyIcon style={{ color: "#34D399", fontSize: "48px" }} />,
  },
  {
    id: 4,
    title: "Ações Contra Seguradora",
    description:
      "Assessoria completa para problemas com seguradoras, garantindo seus direitos como consumidor. Atuamos em casos de negativa de cobertura, indenizações não pagas e outras disputas.",
    icon: <AssignmentIcon style={{ color: "#34D399", fontSize: "48px" }} />,
  },
  {
    id: 5,
    title: "Ação Anulatória",
    description:
      "Procedimentos legais para anular penalidades de trânsito aplicadas de maneira indevida. Analisamos a legalidade das multas e atuamos para cancelar autuações injustas.",
    icon: <ReportProblemIcon style={{ color: "#FF0000", fontSize: "48px" }} />,
  },
  {
    id: 6,
    title: "Acidente de Trânsito",
    description:
      "Análise e defesa em processos de responsabilidade em acidentes de trânsito. Defendemos seus interesses em casos de colisões, atropelamentos e outras ocorrências.",
    icon: <DirectionsCarIcon style={{ color: "#FF0000", fontSize: "48px" }} />,
  },
  {
    id: 7,
    title: "PPD (Permissão Para Dirigir)",
    description:
      "Auxílio para obtenção de benefícios e concessões especiais no trânsito para pessoas com deficiência. Facilitamos o acesso a isenções de impostos, vagas especiais e outros direitos.",
    icon: <BrokenImageIcon style={{ color: "#FF0000", fontSize: "48px" }} />,
  },
  {
    id: 8,
    title: "Problemas de Carro",
    description:
      "Suporte para resolução legal de disputas envolvendo manutenção e venda de veículos. Atuamos em casos de vícios ocultos, defeitos de fabricação e descumprimento de contratos.",
    icon: <ReportProblemIcon style={{ color: "#FF0000", fontSize: "48px" }} />,
  },
];

const ServicesSection: React.FC = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleOpenDialog = (service: Service) => {
    setSelectedService(service);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setTimeout(() => setSelectedService(null), 300); 
  };

  return (
    <Box
      sx={{
        py: 6,
        px: 4,
        backgroundColor: "#A7F3D0",
        textAlign: "center",
        minHeight: "90vh",
      }}
    >
      <Typography variant="h3" gutterBottom>
        Serviços Personalizados para Você
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: "gray", maxWidth: "600px", margin: "0 auto" }}
        gutterBottom
      >
        Conheça mais sobre os serviços prestados e escolha o que atende melhor
        às suas necessidades.
      </Typography>

      <Grid container spacing={4} justifyContent="center" mt={1}>
        {services.map((service) => (
          <Grid key={service.id} item xs={12} sm={6} md={4} lg={3}>
            <Box
              sx={{
                p: 3,
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                backgroundColor: "#000",
                border: "2px groove #FFFFFF",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "25vh",
                transition:
                  "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  cursor: "pointer",
                },
              }}
              onClick={() => handleOpenDialog(service)}
            >
              {service.icon}
              <Typography
                variant="h6"
                sx={{
                  mt: 2,
                  fontWeight: "bold",
                  color: "#FFFFFF",
                  textAlign: "center",
                }}
              >
                {service.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        TransitionComponent={Slide}
        keepMounted
        aria-labelledby="service-dialog-title"
        aria-describedby="service-dialog-description"
      >
        {selectedService && (
          <>
            <DialogTitle
              id="service-dialog-title"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontWeight: "bold",
              }}
            >
              {selectedService.title}
              <IconButton onClick={handleCloseDialog}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <Typography
                variant="body2"
                sx={{ color: "#000", lineHeight: "1.6", mt: 1 }}
              >
                {selectedService.description}
              </Typography>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default ServicesSection;
