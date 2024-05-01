import { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Card,
  CardHeader,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  useTheme,
} from "@mui/material";
import {
  FirstPage as FirstPageIcon,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  LastPage as LastPageIcon,
} from "@mui/icons-material";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(
  dateTime,
  interviewType,
  interviewer,
  status,
  feedback,
  rating
) {
  return { dateTime, interviewType, interviewer, status, feedback, rating };
}

const rows = [
  createData(
    "2023-05-20 10:00",
    "Behavioral",
    "John Doe",
    "Completed",
    "Great job!",
    4
  ),
  createData(
    "2023-05-18 14:30",
    "Technical",
    "Jane Smith",
    "Completed",
    "Needs improvement",
    2
  ),
  createData(
    "2023-05-16 09:00",
    "Behavioral",
    "John Doe",
    "Completed",
    "Great job!",
    4
  ),
  createData(
    "2023-05-14 14:30",
    "Technical",
    "Jane Smith",
    "Completed",
    "Needs improvement",
    2
  ),
  createData(
    "2023-05-12 09:00",
    "Behavioral",
    "John Doe",
    "Completed",
    "Great job!",
    4
  ),
  createData(
    "2023-05-10 14:30",
    "Technical",
    "Jane Smith",
    "Completed",
    "Needs improvement",
    2
  ),
  createData(
    "2023-05-08 09:00",
    "Behavioral",
    "John Doe",
    "Completed",
    "Great job!",
    4
  ),
  createData(
    "2023-05-06 14:30",
    "Technical",
    "Jane Smith",
    "Completed",
    "Needs improvement",
    2
  ),
  createData(
    "2023-05-04 09:00",
    "Behavioral",
    "John Doe",
    "Completed",
    "Great job!",
    4
  ),
  createData(
    "2023-05-02 14:30",
    "Technical",
    "Jane Smith",
    "Completed",
    "Needs improvement",
    2
  ),
];

const PastPracticeSessions = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Card
      variant="outlined"
      sx={{
        borderStyle: "dashed",
        backgroundColor: (theme) => theme.palette.grey[100],
        borderRadius: 2,
        boxShadow: 2,
      }}
    >
      <CardHeader title="Past Practice Sessions" />
      <Box sx={{ p: 3 }}>
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 500 }}
            aria-label="past practice sessions table"
          >
            <TableHead>
              <TableRow>
                <TableCell>Date &amp; Time</TableCell>
                <TableCell>Interview Type</TableCell>
                <TableCell>Interviewer</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Feedback</TableCell>
                <TableCell>Rating</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? rows.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : rows
              ).map((row) => (
                <TableRow key={row.dateTime}>
                  <TableCell component="th" scope="row">
                    {row.dateTime}
                  </TableCell>
                  <TableCell>{row.interviewType}</TableCell>
                  <TableCell>{row.interviewer}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>{row.feedback}</TableCell>
                  <TableCell>{row.rating}</TableCell>
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  colSpan={4}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Box>
    </Card>
  );
};

export default PastPracticeSessions;
