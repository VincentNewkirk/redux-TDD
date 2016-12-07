import { VisibilityFilters, SET_VISIBILITY_FILTER } from '../actions/actions';

export const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: [],
};

const reducer = (state = initialState, action) => {
  switch (action && action.type) {
    case SET_VISIBILITY_FILTER:
      return {
        visibilityFilter: action.filter,
        todos: [...state.todos],
      };
  }
  return state;
};

export default reducer;
