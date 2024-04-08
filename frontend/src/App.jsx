import AppContent from "./components/common/AppContent";
import { BoardContextProvider } from "./contexts/BoardContext";
import DatePickerContext from "./contexts/DatePickerContext";
import { ToastContainer } from "react-toastify";
import Hotjar from "@hotjar/browser";
import ThemeProvider from "./theme";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

// Initialize Hotjar
Hotjar.init(import.meta.env.VITE_HOTJAR_ID, import.meta.env.VITE_HOTJAR_SV);

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
