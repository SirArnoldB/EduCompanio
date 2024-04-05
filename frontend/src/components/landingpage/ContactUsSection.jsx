import { Typography, Box, Container, Button } from "@mui/material";

const ContactUsSection = () => {
  return (
    <Box
      id="contact-us"
      sx={{
        width: "100%",
        py: { xs: 6, md: 8, lg: 12 },
        bgcolor: "grey.100",
      }}
    >
      <Container
        sx={{
          gridTemplateColumns: { lg: "repeat(2, 1fr)" },
          gap: {
            lg: 10,
            xl: 16,
            xs: 4,
            md: 6,
          },
          px: { xs: 4, md: 6 },
          display: "grid",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ spacing: 2 }}>
          <Typography
            variant="h2"
            sx={{ fontWeight: "bold", letterSpacing: "tighter" }}
          >
            Join the EduCompanio Community
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mx: "auto",
              maxWidth: 600,
              color: (theme) => theme.palette.text.secondary,
            }}
          >
            {` We're always looking for passionate students, professionals, and
            collaborators to join our mission of empowering the next generation
            of leaders. Whether you're interested in contributing your
            expertise, providing feedback, or exploring partnership
            opportunities, we'd love to hear from you.`}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 4, justifyContent: "flex-end" }}>
          <Button
            href={`${import.meta.env.VITE_FEEDBACK_FORM_URL}`}
            target="_blank"
            color="info"
            variant="contained"
            sx={{
              flexGrow: 0.5,
              px: 4,
              boxShadow: 1,
            }}
          >
            Get in Touch
          </Button>
          <Button
            href="/"
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
      </Container>
    </Box>
  );
};

export default ContactUsSection;
