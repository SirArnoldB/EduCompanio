import { Box, Card, CardHeader, Typography } from "@mui/material";

const Favorites = () => {
  return (
    <Card
      sx={{
        height: "auto",
      }}
    >
      <CardHeader title="Favorites" />
      <Box p={3}>
        <Typography variant="body1">
          No favorites yet. Start exploring and favorite the items you love!
        </Typography>
      </Box>
    </Card>
  );
};

export default Favorites;
