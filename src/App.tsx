import ApiTest from "./ApiTest";
import { Box, ThemeProvider } from "@mui/material";
import { theme } from "./util/theme";

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
          <ApiTest />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
