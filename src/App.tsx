import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import ApiTest from "./pages/ApiTest";
import { Box, ThemeProvider } from "@mui/material";
import { theme } from "./util/theme";
import WorkIndex from "./pages/WorkIndex";
import Index from "./pages/Index";

const router = createBrowserRouter([
  { path: "/", element: <Index /> },
  { path: "/test", element: <ApiTest />, },
  { path: "/works", element: <WorkIndex /> }
]);

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            bgcolor: "background.default",
            m: 0,
            minWidth: "100vw",
            minHeight: "100vh",
          }}
        >
          <RouterProvider router={router} />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
