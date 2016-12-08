import { VisibilityFilters, SET_VISIBILITY_FILTER, ADD_TODO, TOGGLE_TODO } from '../actions/actions';

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
    case ADD_TODO:
      return {
        visibilityFilter: state.visibilityFilter,

        todos: [
          ...state.todos,
          {
            'text': action.text,
            'completed': false,
          }
        ]
      };
    case TOGGLE_TODO:
      const newState = state.todos.map((todo, i) => {
        if (i === action.index) {
          todo['completed'] = !todo['completed'];
        }
        return todo;
      });
      return {
        visibilityFilter: state.visibilityFilter,
        todos: newState,
      };
  }
  return state;
};

export default reducer;
