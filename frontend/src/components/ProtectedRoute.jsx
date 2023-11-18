import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { BoardContext } from "../contexts/BoardContext";

const ProtectedRoute = ({ element }) => {
  const [state, dispatch] = useContext(BoardContext);
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("user")) || {}
  );

  useEffect(() => {
    if (state.loading) {
      fetch(`${state.API_URL}/auth/login/success`, {
        credentials: "include",
      })
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          if (json.user) {
            setUser(json.user);
            dispatch({ type: "SET_USER", payload: json.user });
          }
          dispatch({ type: "SET_LOADING", payload: false });
        })
        .catch((error) => {
          console.log(error);
          dispatch({ type: "SET_ERROR", payload: error });
        });
    }
  }, [dispatch, state.API_URL, state.loading]);

  const isAuthenticated = user.id && user.accesstoken;

  return isAuthenticated ? element : <Navigate to="/" />;
};

ProtectedRoute.propTypes = {
  element: PropTypes.node.isRequired,
};

export default ProtectedRoute;
