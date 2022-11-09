import { ThemeProvider } from "@mui/material";
import App from "./App";
import { createTheme } from "@mui/material/styles";
import { grey, yellow, red } from "@mui/material/colors";
import { FC } from "react";

const Home: FC = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: grey[300],
      },
      secondary: {
        main: yellow[50],
        contrastText: red[700],
      },
      info: {
        main: red[700],
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    typography: {
      fontFamily: "Xanh Mono",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
};

export default Home;
