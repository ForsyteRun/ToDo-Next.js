import {
  Box,
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
} from "@mui/material";
import { FC } from "react";
import { FormDataType } from "../types/type";

type PropsType = {
  todo: Array<FormDataType>;
};

const paperStack = {
  boxShadow:
    "0 1px 1px rgba(0,0,0,0.1), 0 10px 0 -5px #f5f5f5, 0 10px 1px -4px rgba(0,0,0,0.1), 0 20px 0 -10px #f5f5f5, 0 20px 1px -9px rgba(0,0,0,0.1)",
  padding: "10px",
  alignItem: 'center'
};

const InfoTodo: FC<PropsType> = ({ todo }) => {
  return (
    <Box sx={{ width: "100%" }}>
      {todo.length > 0 && (
        <>
          <Divider />
          <Paper sx={paperStack}>
            <span>{todo.length} item left</span>
            <Stack display='inline-flex' direction='row' justifyContent='center' width='65%'>
              <Button>All</Button>
              <Button>Active</Button>
              <Button>Complited</Button>
            </Stack>
          </Paper>
        </>
      )}
    </Box>
  );
};

export default InfoTodo;
