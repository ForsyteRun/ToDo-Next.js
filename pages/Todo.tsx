import { TextField } from "@mui/material";
import { Form, Formik } from "formik";
import React, { useState } from "react";

const responsiveConteiner = {
  width: {
   //  xs: "80%",
   //  sm: "80%",
   //  md: "70%",
   //  lg: "60%",
   //  xl: "60%",
  },
  backgroundColor: "secondary.main",
};

const Todo = () => {
  const [text, setText] = useState("");

  return (
    <Formik
      initialValues={{ name: "" }}
      onSubmit={(values) => console.log(values)}
    >
      {({handleChange, values}) => (
        <Form style={{width: '70%'}}>
          <TextField
            id="outlined-password-input"
            label="Enter what todo"
            onChange={handleChange}
            value={values.name}
            name="name"
            color="info"
            fullWidth= {true}
            sx={responsiveConteiner}
          />
        </Form>
      )}
    </Formik>
  );
};

export default Todo;
