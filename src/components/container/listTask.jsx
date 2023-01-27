import React from "react";
import PropTypes from "prop-types";
import Task from "../pure/task";
import List from "@mui/material/List";
import { Container } from "@mui/system";
import FormContainer from "./formContainer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const ListTask = ({ taskList, onTaskClick }) => {
  return (
    <>
      <Container
        sx={{
          paddingTop: "100px",
        }}
      >
        <Box sx={{ maxWidth: "60%" }}>
          <Typography variant="h5" gutterBottom>
            LISTA DE TAREAS IMPLEMENTANDO REDUX
          </Typography>
          <List>
            {taskList.map((task, index) => (
              <Task key={index} task={task} handleClick={onTaskClick} />
            ))}
          </List>
          <FormContainer />
        </Box>
      </Container>
    </>
  );
};

ListTask.propTypes = {
  taskList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
  onTaskClick: PropTypes.func.isRequired,
};

export default ListTask;
