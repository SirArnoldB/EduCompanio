import { Box, Container, Grid, Link, Typography } from "@mui/material";
import Logo from "../common/Logo";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Box
      component="footer"
      bgcolor="grey.100"
      sx={{
        py: { xs: 4, md: 6, lg: 8 },
      }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Logo />
            <Typography variant="body2" color="text.secondary" mt={2}>
              Your All-in-One Career Companion
            </Typography>
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography
              variant="button"
              fontWeight="bold"
              color="text.secondary"
              mb={2}
            >
              Product
            </Typography>
            <nav>
              <Link
                href="#home"
                color="inherit"
                underline="hover"
                display="block"
                mb={1}
              >
                Home
              </Link>
              <Link
                href="#features"
                color="inherit"
                underline="hover"
                display="block"
                mb={1}
              >
                Features
              </Link>
              <Link
                href="#contact-us"
                color="inherit"
                underline="hover"
                display="block"
                mb={1}
              >
                Contact Us
              </Link>
              <Link
                href="/login"
                color="inherit"
                underline="hover"
                display="block"
                mb={1}
              >
                Login
              </Link>
            </nav>
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography
              variant="button"
              fontWeight="bold"
              color="text.secondary"
              mb={2}
            >
              EduCompanio
            </Typography>
            <nav>
              <Link
                href="/"
                color="inherit"
                underline="hover"
                display="block"
                mb={1}
              >
                About Us
              </Link>
              <Link
                href="#mission"
                color="inherit"
                underline="hover"
                display="block"
                mb={1}
              >
                Mission
              </Link>
            </nav>
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography
              variant="button"
              fontWeight="bold"
              color="text.secondary"
              mb={2}
            >
              Contact
            </Typography>
            <Link
              href={`${import.meta.env.VITE_FEEDBACK_FORM_URL}`}
              target="_blank"
              color="inherit"
              underline="hover"
              display="block"
              mb={1}
            >
              Get in Touch
            </Link>
          </Grid>
        </Grid>
        <Box
          mt={{ xs: 3, md: 6 }}
          textAlign="center"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            {` © ${currentYear} EduCompanio. All rights reserved.`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Made with ❤️ by Arnold and John
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
