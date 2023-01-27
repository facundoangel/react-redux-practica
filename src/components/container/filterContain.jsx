import React from "react";
import { connect } from "react-redux";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";
import { setVisibility, VISIBILITY } from "../../store/actions";

export const filterContain = ({ dispatch }) => {
  const handleFilter = (filter) => {
    dispatch(setVisibility(filter));
  };

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        FILTROS DE TAREAS
      </Typography>
      <Button
        onClick={() => {
          handleFilter(VISIBILITY.SHOW_ALL);
        }}
        variant="text"
      >
        SHOW ALL
      </Button>
      <Button
        onClick={() => {
          handleFilter(VISIBILITY.SHOW_COMPLETED);
        }}
        variant="text"
      >
        SHOW COMPLETED
      </Button>
      <Button
        onClick={() => {
          handleFilter(VISIBILITY.SHOW_IN_PROGRESS);
        }}
        variant="text"
      >
        SHOW IN PROGRESS
      </Button>
    </Container>
  );
};

export default connect()(filterContain);
