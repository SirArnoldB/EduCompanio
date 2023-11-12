import { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import Board from "../components/Board";
import InternshipsAPI from "../services/internships";
import StatusesAPI from "../services/statuses";
import LoadingSpinner from "../components/LoadingSpinner";

/**
 * Renders the InternshipsView component.
 * @returns {JSX.Element} InternshipsView component UI.
 */
const InternshipsView = () => {
  const [internships, setInternships] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [internshipColumns, setInternshipColumns] = useState({});
  const [loadingColumns, setLoadingColumns] = useState(true);

  useEffect(() => {
    const getInternships = async () => {
      const data = await InternshipsAPI.getAllInternships();
      setInternships(data);
    };
    const getStatuses = async () => {
      const data = await StatusesAPI.getAllInternshipStatuses();
      setStatuses(data);
    };
    getInternships();
    getStatuses();
  }, []);

  useEffect(() => {
    const columns = {};
    statuses.forEach((status) => {
      columns[status.id] = {
        name: status.status,
        items: internships.filter(
          (internship) => internship.status_id === status.id
        ),
      };
    });
    console.log("Columns: ", columns);
    setInternshipColumns(columns);
    setLoadingColumns(false);
  }, [internships, statuses]);

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Internships 📌
      </Typography>
      {loadingColumns ? (
        <LoadingSpinner label="internships" />
      ) : (
        <Board boardType="internship" columns={internshipColumns} />
      )}
    </Container>
  );
};

export default InternshipsView;
