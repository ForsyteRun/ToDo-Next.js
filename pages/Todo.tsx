import { TextField } from "@mui/material";
import { Form, Formik, FormikHelpers } from "formik";
import React, { useState } from "react";
import { FormDataType } from "../types/type";
import Answer from "./Answer";

const responsiveConteiner = {
  backgroundColor: "secondary.main",
};

const initialValue = {
  name: "",
};

type InitialValue = typeof initialValue;

const Todo = () => {
  const [todo, setTodo] = useState<Array<FormDataType>>([]);

  const submitForm = (
    values: InitialValue,
    formikHelpers: FormikHelpers<InitialValue>
  ) => {
    const formData: FormDataType = {
      id: Math.random(),
      name: values.name,
      chacked: false,
    };
    setTodo([...todo, formData]);
    formikHelpers.resetForm();
  };

  const doneTodo = (id: number) => {
      const chackTodo: any = todo.map((el: FormDataType) => {
        return el.id === id ? {...el, chacked: !el.chacked} : el
      })
      setTodo(chackTodo)
  };

  const deleteTodo = (id: number) => {
    const delTodo = todo.filter((el: FormDataType) => {
      return el.id !== id
    })
    setTodo(delTodo)
  }

  return (
    <>
      <Formik
        initialValues={initialValue}
        onSubmit={(values, formikHelpers) => submitForm(values, formikHelpers)}
      >
        {({ handleChange, values }) => (
          <Form style={{ width: "100%" }}>
            <TextField
              id="outlined-password-input"
              label="Enter what todo"
              onChange={handleChange}
              value={values.name}
              name="name"
              color="info"
              fullWidth={true}
              sx={responsiveConteiner}
            />
          </Form>
        )}
      </Formik>
      {todo &&
        todo.map((el: FormDataType) => (
          <Answer el={el} key={el.id} doneTodo={doneTodo} deleteTodo={deleteTodo} />
        ))}
    </>
  );
};

export default Todo;
