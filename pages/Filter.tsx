import React, { FC } from "react";
import Checkbox from "@mui/material/Checkbox";
import CircleChecked from "@mui/icons-material/CheckCircleOutline";
import CircleUnchecked from "@mui/icons-material/RadioButtonUnchecked";
import ClearIcon from "@mui/icons-material/Clear";
import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { FormDataType } from "../types/type";

type PropsType = {
  el: FormDataType;
  doneFilter: (id:number) => void
  deleteFilter: (id:number) => void 
};

export const Filter: FC<PropsType> = ({ el, doneFilter, deleteFilter }) => {
 
  const chackTodoFn = {
    textDecoration: el.chacked ? 'line-through' : ''
  }
console.log('filter');

  return (

    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      <ListItem
        key={el.id}
        secondaryAction={
          <IconButton edge="end" aria-label="comments" onClick={()=>deleteFilter(el.id)}>
            <ClearIcon />
          </IconButton>
        }
        disablePadding
      >
        <ListItemButton role={undefined} onClick={() => doneFilter(el.id)} dense>
          <ListItemIcon>
            <Checkbox
              checked={el.chacked ? true : false}
              edge="start"
              icon={<CircleUnchecked />}
              checkedIcon={<CircleChecked />}
              tabIndex={-1}
              inputProps={{ "aria-labelledby": String(el.id) }}
            />
          </ListItemIcon>
          <ListItemText id={String(el.id)} primary={el.name} sx={chackTodoFn} />
        </ListItemButton>
      </ListItem>
    </List>
  )
}

export default Filter;
