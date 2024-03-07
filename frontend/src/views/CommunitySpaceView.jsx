import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Container,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import LoadingSpinner from "../components/common/LoadingSpinner";
import PropTypes from "prop-types";

// TODO: (SirArnoldB) - Update the CommunitySpaceView components to use the new design.

const CommunitySpaceView = ({ space }) => {
  return (
    <>
      <Container maxWidth="xl">
        {!space ? (
          <LoadingSpinner label="your space ..." />
        ) : (
          <Grid container spacing={3}>
            {/* Space Card Header */}
            <Grid item xs={12} sm={12} md={12}>
              <Card
                variant="outlined"
                sx={{
                  borderStyle: "dashed",
                  backgroundColor: (theme) => theme.palette.grey[100],
                  borderRadius: 2,
                  boxShadow: 2,
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ height: 150, objectFit: "contain" }}
                  image={
                    space.image_url ||
                    "https://img.icons8.com/doodle/48/community.png"
                  }
                  alt={space.title}
                />
                <CardHeader title={space.title} />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "center",
                      gap: 1,
                      mt: 2,
                    }}
                  >
                    <Chip label={`${space.members_count} members`} />
                    <Chip label={`${space.posts_count} posts`} />
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Posts Section */}
            <Grid xs={12} md={6} lg={8}>
              <Card>
                <CardHeader title={"Posts"} />
                <CardContent>
                  <Typography>
                    {`Welcome to ${space.title} posts section.`}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Discussion Guidelines and Tags Section */}
            <Grid
              xs={12}
              md={6}
              lg={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              {/* Discussion Guidelines */}
              <Grid xs={12} md={6} lg={4}>
                <Card>
                  <CardHeader title={"Discussion Guidelines"} />
                  <CardContent>
                    <Typography>
                      {`Welcome to ${space.title} discussion guidelines.`}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* Tags Section */}
              <Grid xs={12} md={6} lg={4}>
                <Card>
                  <CardHeader title={"Tags Section"} />
                  <CardContent>
                    <Typography>
                      {`Welcome to ${space.title} tags section.`}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Container>
    </>
  );
};

CommunitySpaceView.propTypes = {
  space: PropTypes.object.isRequired,
};

export default CommunitySpaceView;
