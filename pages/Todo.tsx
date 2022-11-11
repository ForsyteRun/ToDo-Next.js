import { breadcrumbsClasses, TextField } from "@mui/material";
import { Form, Formik, FormikHelpers } from "formik";
import React, { useState } from "react";
import { FilterType, FormDataType } from "../types/type";
import Answer from "./Answer";
import Filter from "./Filter";
import InfoTodo from "./InfoTodo";

const responsiveConteiner = {
  backgroundColor: "secondary.main",
};

const initialValue = {
  name: "",
};

type InitialValue = typeof initialValue;

const Todo = () => {
  const [todo, setTodo] = useState<Array<FormDataType>>([]);
  const [filter, setFilter] = useState<Array<FormDataType>>([]);

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
      return el.id === id ? { ...el, chacked: !el.chacked } : el;
    });
    setTodo(chackTodo);
  };

  const deleteTodo = (id: number) => {
    const delTodo = todo.filter((el: FormDataType) => {
      return el.id !== id;
    });
    setTodo(delTodo);
  };
 
  const doneFilter = (id: number) => {
    const chackTodo: any = todo.map((el: FormDataType) => {
      return el.id === id ? { ...el, chacked: !el.chacked } : el;
    });
    setFilter(chackTodo);
    setTodo(chackTodo);
  };

  const deleteFilter = (id: number) => {
    const delTodo = todo.filter((el: FormDataType) => {
      return el.id !== id;
    });
    setFilter(delTodo);
    setTodo(delTodo);
  };

  const filterTodo = (type: string) => {
    switch (type) {
      case "All":
        setFilter([])
        break
      case "Active":
        const filterFalse = todo.filter((el: FormDataType) => el.chacked === false);
        setFilter(filterFalse)
        break
      case "Complited":
        const filterTrue = todo.filter((el: FormDataType) => el.chacked === true);
        setFilter(filterTrue)
        break
      default:
        setFilter([])
    }
  };

  console.log(filter);

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
      {filter.length > 0
      ? 
      filter.map((el: FormDataType) => (
        <Filter
          el={el}
          key={el.id}
          doneFilter={doneFilter}
          deleteFilter={deleteFilter}
        />
      )) 
      : 
      todo.map((el: FormDataType) => (
        <Answer
          el={el}
          key={el.id}
          doneTodo={doneTodo}
          deleteTodo={deleteTodo}
        />
      ))
      }
      <InfoTodo todo={todo} filterTodo={filterTodo} />
    </>
  );
};

export default Todo;
