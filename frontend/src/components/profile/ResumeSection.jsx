import {
  Card,
  CardContent,
  Button,
  CardHeader,
  Box,
  styled,
} from "@mui/material";
import { CloudUploadRounded, Create } from "@mui/icons-material";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const ResumeSection = () => {
  const handleUpload = () => {
    // TODO: Handle file upload logic here
    console.log("Upload resume");
  };

  const handleGenerate = () => {
    // TODO: Handle generate new resume logic here
    console.log("Generate new resume");
  };

  return (
    <Card>
      <CardHeader
        title="Resume"
        subheader="Upload your resume or generate a new one."
      />
      <CardContent
        sx={{
          m: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 1,
          }}
        >
          <Button
            variant="contained"
            color="primary"
            startIcon={<CloudUploadRounded />}
            onClick={handleUpload}
          >
            Upload Resume
            <VisuallyHiddenInput type="file" />
          </Button>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<Create />}
            onClick={handleGenerate}
          >
            Generate New Resume
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ResumeSection;
