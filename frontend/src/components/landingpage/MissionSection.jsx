import {
  Typography,
  Box,
  Container,
  Paper,
  List,
  ListItem,
} from "@mui/material";
import { AdaptingToLandScape } from "../../assets";

const missionStatements = [
  {
    title: "Empower Students",
    description:
      "Our mission is to empower students in their academic and professional journeys.",
  },
  {
    title: "Provide Personalized Guidance",
    description:
      "Through our AI-powered virtual mentor, the EduCompanio Assistant, we offer personalized guidance and support to help students navigate the complexities of career planning and development.",
  },
  {
    title: "Foster Collaboration and Growth",
    description:
      "By creating a community-driven platform, we aim to facilitate collaboration, skill development, and the sharing of valuable resources among students, empowering them to achieve their full potential.",
  },
];

const MissionSection = () => {
  return (
    <Box
      id="mission"
      sx={{
        width: "100%",
        py: { xs: 6, md: 8, lg: 12 },
      }}
    >
      <Container
        sx={{
          gridTemplateColumns: { lg: "repeat(2, 1fr)" },
          gap: { lg: 10 },
          display: "grid",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            spacing: 4,
          }}
        >
          <Paper
            component="p"
            sx={{
              p: 1,
              width: { xs: "fit-content", md: "max-content" },
            }}
          >
            Our Mission
          </Paper>
          <List sx={{ gap: 6, display: "grid" }}>
            {missionStatements.map((mission) => (
              <ListItem key={mission.title}>
                <Box sx={{ gap: 1 }}>
                  <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    {mission.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: (theme) => theme.palette.text.secondary }}
                  >
                    {mission.description}
                  </Typography>
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
        <Paper
          component="img"
          alt="EduCompanio Mission"
          src={AdaptingToLandScape}
          sx={{
            mx: "auto",
            aspectRatio: "auto 550/310",
            overflow: "hidden",
            borderRadius: "xl",
            objectFit: "cover",
            objectPosition: "center",
            width: { sm: "100%" },
            order: { lg: 1 },
          }}
        />
      </Container>
    </Box>
  );
};

export default MissionSection;
