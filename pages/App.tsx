import { Box, Typography } from "@mui/material";
import Todo from "./Todo";

const fontSizePoints = {
  fontSize: {
    xs: "4rem",
    sm: "5rem",
    md: "6rem",
    lg: "6rem",
    xl: "6rem",
  },
  color: 'info.main',
  marginBottom: '0.5rem'
};

const conteiner = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: '80%'
};

const App = () => {
  return (
    <Box height="50vh" sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Box sx={conteiner}>
        <Typography variant="h1" component="div" sx={fontSizePoints}>
          ToDo
        </Typography>
        <Todo />
      </Box>
    </Box>
  );
};

export default App;
