//IMPORT ACTIONS
import { SET_VISIBILITY_FILTER } from "../actions";
//IMPORT ACTIONS' CREATORS
import { VISIBILITY } from "../actions";

/**
 * @param {Object[]} state
 * @param {Object} action
 * @returns {Object} newState
 */
const filterReducer = (state = VISIBILITY.SHOW_ALL, action) => {
  const { type, payload } = action;
  switch (payload?.visibility) {
    case VISIBILITY.SHOW_ALL:
      return payload.visibility;
    case VISIBILITY.SHOW_COMPLETED:
      return payload.visibility;
    case VISIBILITY.SHOW_IN_PROGRESS:
      return payload.visibility;

    default:
      return state;
  }
};

export default filterReducer;
