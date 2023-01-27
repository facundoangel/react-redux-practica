import React from "react";
import PropTypes from "prop-types";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const Task = ({ handleClick, task }) => {
  return (
    <>
      <ListItem
        disablePadding
        sx={{
          textDecoration: task.completed ? "line-through" : "none",
        }}
      >
        <ListItemButton component="button" onClick={() => handleClick(task)}>
          <ListItemText
            primary={`id:${task.id} description:${task.description} completed:${
              task.completed ? "SI" : "NO"
            }`}
          />
        </ListItemButton>
      </ListItem>
      <Divider />
    </>
  );
};

Task.propTypes = {
  handleClick: PropTypes.func.isRequired,
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Task;
