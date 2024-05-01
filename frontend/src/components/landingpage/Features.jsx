import { Typography, Box, Container, Paper, Grid, Button } from "@mui/material";
import { useContext } from "react";
import { BoardContext } from "../../contexts/BoardContext";
import { RoadMap, Internship, InterviewPrep, SkillDev, NoteTaking, Resources } from "../../assets";

const eduCompanioFeatures = [
  {
    title: "Personalized Career Roadmap",
    image: RoadMap,
    description:
      "The EduCompanio Assistant, our AI-powered virtual mentor, provides personalized guidance and recommendations to help you navigate your academic and professional journey.",
  },
  {
    title: "Internship and Job Tracking",
    image: Internship,
    description:
      "Stay on top of your internship and job applications with our dedicated tracking tools, and explore a community-driven job board for exclusive student-shared opportunities.",
  },
  {
    title: "Interview Preparation",
    image: InterviewPrep,
    description:
      "Enhance your interview skills through peer-to-peer mock interviews and AI-powered virtual interviews, designed to provide realistic practice and personalized feedback.",
  },
  {
    title: "Skill Development and Projects",
    image: SkillDev,
    description:
      "Track your personal projects and participate in community-driven open-source projects to build real-world skills and collaborate with other students.",
  },
  {
    title: "Centralized Note-Taking",
    image: NoteTaking,
    description:
      "Organize your academic and career-related notes in one place, ensuring you have quick access to important information when you need it.",
  },
  {
    title: "Curated Resources and Community",
    image: Resources,
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
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <Typography
            component="div"
            sx={{
              borderRadius: "lg",
              bgcolor: "grey.10",
              py: 1,
            }}
          >
            What we offer
          </Typography>
          <Typography
            variant="h3"
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
              <img src= {feature.image} alt="a laptop"  />
              <Box
                sx={{
                  gap: 1,
                  backgroundColor: "#f1f1f1",
                  px: 2.5,
                  py: 0.8,
                  border: "1px solid #f1f1f1",
                  borderRadius: "0 0 10px 10px"
                }}
              >
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
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
