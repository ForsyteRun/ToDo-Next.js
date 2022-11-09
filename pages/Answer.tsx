import React, { FC, useState } from "react";
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
  TextField,
} from "@mui/material";
import { FormDataType } from "../types/type";

type PropsType = {
  el: FormDataType;
};

export const Answer: FC<PropsType> = ({ el }) => {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem
        key={el.id}
        secondaryAction={
          <IconButton edge="end" aria-label="comments">
            <ClearIcon />
          </IconButton>
        }
        disablePadding
      >
        <ListItemButton role={undefined} onClick={() => console.log(111)} dense>
          <ListItemIcon>
            <Checkbox
              edge="start"
              //checked={checked.indexOf(value) !== -1}
              tabIndex={-1}
              disableRipple
              inputProps={{ "aria-labelledby": String(el.id) }}
            />
          </ListItemIcon>
          <ListItemText id={String(el.id)} primary={el.name} />
        </ListItemButton>
      </ListItem>
    </List>
  )
}

export default Answer;
