import React from "react";
import { connect } from "react-redux";
import { addTask } from "../../store/actions";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";

export const formContainer = ({ dispatch }) => {
  const handlesubmit = (e) => {
    e.preventDefault();

    dispatch(
      addTask(e.target.name.value, Math.floor(Math.random() * 500), false)
    );

    e.target.reset();
  };

  return (
    <Box
      onSubmit={handlesubmit}
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        type="text"
        id="name"
        name="name"
        placeholder="Insert Task's name"
        label="Task"
        variant="outlined"
      />

      <Button sx={{ marginX: "7px" }} type="submit" variant="contained">
        add Task
      </Button>
    </Box>
  );
};

export default connect()(formContainer);
