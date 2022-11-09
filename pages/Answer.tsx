import React, { FC, useState } from 'react'
import Checkbox from "@mui/material/Checkbox";
import CircleChecked from "@mui/icons-material/CheckCircleOutline"
import CircleUnchecked from "@mui/icons-material/RadioButtonUnchecked"
import ClearIcon from '@mui/icons-material/Clear';
import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
import { FormDataType } from '../types/type';

type PropsType = {
  el: FormDataType
}

export const Answer: FC<PropsType> = ({el}) => {
  
  return (
    <>
    {
      console.log(el)
    }
    </>
    )
}

export default Answer