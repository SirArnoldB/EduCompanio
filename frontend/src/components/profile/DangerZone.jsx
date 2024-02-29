import { Card, CardContent, Button, CardHeader } from "@mui/material";
import { Delete } from "@mui/icons-material";

const DangerZone = () => {
  const handleDelete = () => {
    // Handle delete logic here
    console.log("Delete action");
  };

  return (
    <Card>
      <CardHeader
        title="Danger Zone"
        subheader="Proceed with caution. Actions in this section are irreversible."
      />
      <CardContent>
        <Button
          variant="outlined"
          color="error"
          startIcon={<Delete />}
          onClick={handleDelete}
          sx={{ m: 1 }}
        >
          Delete
        </Button>
      </CardContent>
    </Card>
  );
};

export default DangerZone;
