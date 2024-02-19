import { useContext } from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { BoardContext } from "../../contexts/BoardContext";

const ProtectedRoute = ({ element }) => {
  const [state] = useContext(BoardContext);
  const { user } = state;

  const isAuthenticated = user && Object.keys(user).length > 0;

  return isAuthenticated ? element : <Navigate to="/" />;
};

ProtectedRoute.propTypes = {
  element: PropTypes.node.isRequired,
};

export default ProtectedRoute;
