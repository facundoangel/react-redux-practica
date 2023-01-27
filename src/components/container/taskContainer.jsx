import { connect } from "react-redux";
import { toggleTask } from "../../store/actions";
import { VISIBILITY } from "../../store/actions";
import ListTask from "./listTask";

const prepareVisibleTask = (tasks = [], filter) => {
  switch (filter) {
    case VISIBILITY.SHOW_ALL:
      return tasks;
    case VISIBILITY.SHOW_COMPLETED:
      return tasks.filter((t) => t.completed);
    case VISIBILITY.SHOW_IN_PROGRESS:
      return tasks.filter((t) => !t.completed);
  }
};

const mapStateToProps = (state) => {
  return {
    taskList: prepareVisibleTask(state.tasks, state.filter),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onTaskClick: (id) => dispatch(toggleTask(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListTask);
