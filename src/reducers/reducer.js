import { combineReducers } from 'redux';
import { VisibilityFilters, SET_VISIBILITY_FILTER, ADD_TODO, TOGGLE_TODO } from '../actions/actions';

export const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: [],
};

const visibilityFilter = (state = initialState.visibilityFilter, action) => {
  switch (action && action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
  return state;
};

const todos = (state = initialState.todos, action) => {
  switch (action && action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          'text': action.text,
          'completed': false,
        }
      ];
    case TOGGLE_TODO:
      return state.map((todo, i) => {
        if (action.index === i) {
          todo['completed'] = !todo['completed'];
        }
        return todo;
      });
  }
  return state;
};

const reducer = combineReducers({
  visibilityFilter,
  todos,
});

// const reducer = (state = initialState, action) => {
//   switch (action && action.type) {
//     case SET_VISIBILITY_FILTER:
//       return {
//         visibilityFilter: action.filter,
//         todos: [...state.todos],
//       };
//     case ADD_TODO:
//       return {
//         visibilityFilter: state.visibilityFilter,

//         todos: [
//           ...state.todos,
//           {
//             'text': action.text,
//             'completed': false,
//           }
//         ]
//       };
//     case TOGGLE_TODO:
//       const newState = state.todos.map((todo, i) => {
//         if (i === action.index) {
//           todo['completed'] = !todo['completed'];
//         }
//         return todo;
//       });
//       return {
//         visibilityFilter: state.visibilityFilter,
//         todos: newState,
//       };
//   }
//   return state;
// };

export default reducer;
