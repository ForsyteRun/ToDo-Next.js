import { Box, Typography } from "@mui/material";
import Todo from "./Todo";

const titlePoints = {
  fontSize: {
    xs: "3rem",
    sm: "5rem",
    md: "6rem",
    lg: "6rem",
    xl: "6rem",
  },
  color: 'info.main',
  marginBottom: '0.5rem',
  
};

const conteiner = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const App = () => {
  return (
    <Box height="100vh" sx={{
      margin: '0 auto',
      maxWidth: '550px',
      minWidth: '320px',
      padding: '20px 0'
    }}>
      <Box sx={conteiner}>
        <Typography variant="h1" component="div" sx={titlePoints}>
          ToDo
        </Typography>
        <Todo />
      </Box>
    </Box>
  );
};

export default App;
