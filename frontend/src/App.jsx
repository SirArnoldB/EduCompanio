import AppContent from "./components/common/AppContent";
import { BoardContextProvider } from "./contexts/BoardContext";
import DatePickerContext from "./contexts/DatePickerContext";
import { ToastContainer } from "react-toastify";
import ThemeProvider from "./theme";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <BoardContextProvider>
        <DatePickerContext>
          <AppContent />
          <ToastContainer />
        </DatePickerContext>
      </BoardContextProvider>
    </ThemeProvider>
  );
}

export default App;
