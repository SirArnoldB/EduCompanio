import AppContent from "./components/AppContent";
import ThemeProvider from "./theme";
import { BoardContextProvider } from "./contexts/BoardContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <BoardContextProvider>
        <AppContent />
        <ToastContainer />
      </BoardContextProvider>
    </ThemeProvider>
  );
}

export default App;
