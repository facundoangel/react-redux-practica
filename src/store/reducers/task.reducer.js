//IMPORT ACTIONS
import { ADD_TASK, TOGGLE_TASK } from "../actions";
//IMPORT ACTIONS' CREATORS
import { addTask, toggleTask, setVisibility } from "../actions";

/**
 * @param {Object[]} state
 * @param {Object} action
 * @returns {Object} newState
 */
const taskReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: payload.id,
          description: payload.description,
          completed: payload.completed,
        },
      ];

    case TOGGLE_TASK:
      return state.map((task) => {
        console.log(payload.id.id);
        return task.id == payload.id.id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task;
      });

    default:
      return state;
  }
};

export default taskReducer;
