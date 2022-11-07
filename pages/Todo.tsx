import { Paper, TextField } from "@mui/material"

const responsiveConteiner ={
   position: 'relative',
   top: '20%',
   left: '50%',
   transform: 'translateX(-50%)',
   width: {
      xs: '80%',
      sm: '80%',
      md: '70%',
      lg: '60%',
      xl: '60%'
   },
   backgroundColor: 'secondary.main', 
}

const Todo = () => {
  return (
    <TextField id="filled-basic" color= "info" label="Enter what todo" variant="filled" sx={responsiveConteiner}>Todo</TextField>
  )
}

export default Todo
