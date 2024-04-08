import { useContext } from "react";
import { HeroImage } from "../../assets";
import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import { BoardContext } from "../../contexts/BoardContext.jsx";

const Hero = () => {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(BoardContext);

  const handleSignUpClick = () => {
    dispatch({ type: "SET_LOADING", payload: true });

    window.location.href = `/login`;
  };

  return (
    <Box
      id="home"
      sx={{
        width: "100%",
        height: "100vh",
        pt: { xs: 12, md: 24, lg: 32 },
        borderY: 1,
      }}
    >
      <Container
        sx={{
          px: { xs: 4, md: 6 },
          spacing: { xs: 10, xl: 16 },
        }}
      >
        <Grid
          container
          maxWidth="1300px"
          mx="auto"
          gap={4}
          px={{ xs: 4, sm: 6, md: 10 }}
        >
          <Grid
            item
            xs={12}
            md
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
                mb: 4,
              }}
            >
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontSize: { xs: 24, sm: 32, md: 40, xl: 54, "2xl": 60 },
                  fontWeight: "bold",
                }}
              >
                Your All-in-One Career Companion
              </Typography>
              <Typography
                sx={{
                  mx: "auto",
                  color: (theme) => theme.palette.text.secondary,
                  fontSize: { md: "xl" },
                }}
              >
                Stop surviving, start thriving. Empower Your Path, Unleash Your
                Success with EduCompanio.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 4,
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <Button
                onClick={() => handleSignUpClick()}
                color="info"
                variant="contained"
                sx={{
                  flexGrow: 0.5,
                  px: 4,
                  boxShadow: 1,
                }}
              >
                Get Started
              </Button>
              <Button
                variant="outlined"
                sx={{
                  flexGrow: 0.5,
                  px: 4,
                  boxShadow: 1,
                  "&:hover": { bgcolor: "grey.100", color: "grey.900" },
                  border: 1,
                  borderColor: "transparent",
                  bgcolor: "common.white",
                }}
              >
                Learn more
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md>
            <Paper
              component="img"
              alt="Hero"
              src={HeroImage}
              sx={{
                mx: 5,
                objectFit: "cover",
                objectPosition: "center",
                backgroundColor: "transparent",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
