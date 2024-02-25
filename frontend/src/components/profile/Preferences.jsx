import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { Create } from "@mui/icons-material";

const Preferences = () => {
  const handleEdit = () => {
    // TODO: Handle edit preferences logic here
    console.log("Edit preferences");
  };

  return (
    <Card>
      <CardHeader
        title="Preferences"
        subheader="Customize your preferences."
        action={
          <Button
            variant="outlined"
            color="primary"
            startIcon={<Create />}
            onClick={handleEdit}
          >
            Add
          </Button>
        }
      />
      <CardContent
        sx={{
          m: 1,
        }}
      >
        <Typography variant="body1">No preferences set yet.</Typography>
      </CardContent>
    </Card>
  );
};

export default Preferences;
