import { Provider } from "react-redux";

import { Snackbar } from "@mui/material";
import { store } from "./store/store";
import AppRoutes from "./routes/AppRoutes";
import ErrorBoundary from "./components/common/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Snackbar />
        <AppRoutes />
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
