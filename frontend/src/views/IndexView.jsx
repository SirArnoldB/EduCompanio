import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, Typography } from "@mui/material";
import SectionPreview from "../components/common/SectionPreview";
import { BoardContext } from "../contexts/BoardContext";
import DashboardStats from "../components/dashboard/DashboardStats";
import LoadingSpinner from "../components/common/LoadingSpinner";

const IndexView = () => {
  const mockNotes = [
    {
      title: "Introduction to React",
      content: "React is a JavaScript library for building user interfaces.",
    },
    {
      title: "Introduction to Node.js",
      content:
        "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
    },
    {
      title: "Introduction to MongoDB",
      content:
        "MongoDB is a document-oriented NoSQL database used for high volume data storage.",
    },
  ];

  const mockInternships = [
    {
      company: "Google",
      position: "Software Engineering Intern",
    },
    {
      company: "Facebook",
      position: "Product Management Intern",
    },
    {
      company: "Microsoft",
      position: "Data Science Intern",
    },
  ];
  const [notes, setNotes] = useState(mockNotes);
  const [internships, setInternships] = useState(mockInternships);

  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(BoardContext);

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        {state.user.displayName
          ? `Hi ${state.user.displayName}, 👋 Welcome back to EduCompanio!`
          : "Welcome to EduCompanio!"}
      </Typography>

      {state.LOAD_USER_DATA ? (
        <LoadingSpinner label="your account ..." />
      ) : (
        <>
          <Box sx={{ mt: 5 }}>
            <Typography variant="h5" sx={{ mb: 5 }}>
              Your Dashboard Stats
            </Typography>
            <DashboardStats />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", mt: 5 }}>
            <Box sx={{ width: "95%" }}>
              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 5 }}>
                <Button variant="contained" onClick={() => navigate("/notes")}>
                  View All
                </Button>
              </Box>
              <Box
                style={{
                  padding: "20px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                {notes.length > 0 ? (
                  notes.map((note, index) => (
                    <SectionPreview
                      key={index}
                      title={note.title}
                      content={note.content}
                    />
                  ))
                ) : (
                  <Typography variant="h6" style={{ color: "#000000" }}>
                    No Notes yet
                  </Typography>
                )}
              </Box>
            </Box>

            <Box sx={{ width: "95%" }}>
              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 5 }}>
                <Button
                  variant="contained"
                  onClick={() => navigate("/internships")}
                >
                  View All
                </Button>
              </Box>
              <Box
                style={{
                  padding: "20px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                {internships.length > 0 ? (
                  internships.map((internship, index) => (
                    <SectionPreview
                      key={index}
                      title={internship.company}
                      content={internship.position}
                    />
                  ))
                ) : (
                  <Typography variant="h6">No Internships yet</Typography>
                )}
              </Box>
            </Box>
          </Box>
        </>
      )}
    </Container>
  );
};

export default IndexView;
