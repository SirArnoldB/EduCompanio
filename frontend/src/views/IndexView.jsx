import { useState } from "react";
import { useContext } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SectionPreview from "../components/SectionPreview";
import { Indexquote } from "../assets";
import { useNavigate } from "react-router-dom";
import { BoardContext } from "../contexts/BoardContext";

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
  const [username, setUsername] = useState(null);
  const [notes, setNotes] = useState(mockNotes);
  const [internships, setInternships] = useState(mockInternships);

  const navigate = useNavigate();

  const [state, dispatch] = useContext(BoardContext);

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        {state.user.username
          ? `Hi ${state.user.username}, Welcome back to EduCompanio!`
          : "Welcome to EduCompanio!"}
      </Typography>
      <Box>
        <img
          style={{ height: "35vh", width: "80%" }}
          src={Indexquote}
          alt="quote"
        />
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
              notes.map((note) => (
                <SectionPreview title={note.title} content={note.content} />
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
              internships.map((internship) => (
                <SectionPreview
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
    </Container>
  );
};

export default IndexView;
