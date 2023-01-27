//ACTIONS
export const ADD_TASK = "ADD_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

export const VISIBILITY = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_IN_PROGRESS: "SHOW_IN_PROGRESS",
};

//ACTIONS' CREATORS
/**
 *
 * @param {String} des
 * @param {Number} id
 * @param {Boolean} completed
 * @return action ADD_TASK
 */
export const addTask = (des, id, completed) => ({
  type: ADD_TASK,
  payload: { description: des, id, completed },
});

addTask();

/**
 * @param {Number} id
 * @returns action TOGGLE_TASK
 */
export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: {
    id,
  },
});

/**
 * @param {String} visibility
 * @returns action SET_VISIBILITY_FILTER
 */
export const setVisibility = (visibility) => ({
  type: SET_VISIBILITY_FILTER,
  payload: {
    visibility: visibility,
  },
});
