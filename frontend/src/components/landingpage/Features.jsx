import { Typography, Box, Container, Paper, Grid, Button } from "@mui/material";
import { useContext } from "react";
import { BoardContext } from "../../contexts/BoardContext";

const eduCompanioFeatures = [
  {
    title: "Personalized Career Roadmap",
    description:
      "The EduCompanio Assistant, our AI-powered virtual mentor, provides personalized guidance and recommendations to help you navigate your academic and professional journey.",
  },
  {
    title: "Internship and Job Tracking",
    description:
      "Stay on top of your internship and job applications with our dedicated tracking tools, and explore a community-driven job board for exclusive student-shared opportunities.",
  },
  {
    title: "Interview Preparation",
    description:
      "Enhance your interview skills through peer-to-peer mock interviews and AI-powered virtual interviews, designed to provide realistic practice and personalized feedback.",
  },
  {
    title: "Skill Development and Projects",
    description:
      "Track your personal projects and participate in community-driven open-source projects to build real-world skills and collaborate with other students.",
  },
  {
    title: "Centralized Note-Taking",
    description:
      "Organize your academic and career-related notes in one place, ensuring you have quick access to important information when you need it.",
  },
  {
    title: "Curated Resources and Community",
    description:
      "Explore a wide range of resources shared by students, covering topics like organization, skills, health, and finance, and engage with your peers in dedicated discussion spaces.",
  },
];

const Features = () => {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(BoardContext);

  const handleGetStarted = () => {
    dispatch({ type: "SET_LOADING", payload: true });

    window.location.href = `/login`;
  };

  return (
    <Box
      id="features"
      sx={{
        width: "100%",
        py: { xs: 6, md: 8, lg: 12 },
      }}
    >
      <Container
        sx={{
          spacing: 12,
          px: { xs: 4, md: 6 },
        }}
      >
        <Box
          sx={{
            pl: { xs: 0, sm: 4 },
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <Paper
            component="div"
            sx={{
              borderRadius: "lg",
              bgcolor: "grey.10",
              px: 3,
              py: 1,
            }}
          >
            EduCompanio Features
          </Paper>
          <Typography
            variant="h2"
            sx={{ fontWeight: "bold", letterSpacing: "tighter" }}
          >
            Streamlining Your Academic and Professional Journey
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: 900,
              color: (theme) => theme.palette.text.secondary,
              fontSize: { md: "xl", lg: "base", xl: "xl" },
              lineHeight: "relaxed",
            }}
          >
            EduCompanio offers a comprehensive platform to help students manage
            their academic and professional development, from organizing their
            notes and projects to preparing for interviews and exploring job
            opportunities.
          </Typography>
        </Box>
        <Grid
          container
          mx="auto"
          items="start"
          gap={8}
          sx={{
            my: 4,
          }}
        >
          {eduCompanioFeatures.map((feature, index) => (
            <Grid item xs={12} sm key={index}>
              <Box
                sx={{
                  gap: 1,
                }}
              >
                <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                  {feature.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: (theme) => theme.palette.text.secondary }}
                >
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            onClick={() => handleGetStarted()}
            color="info"
            variant="contained"
            sx={{
              flexGrow: 0.25,
              boxShadow: 1,
            }}
          >
            Get Started
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Features;
