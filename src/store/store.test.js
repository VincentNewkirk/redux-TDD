import { store } from './store';
import * as actions from '../actions/actions';

describe('STORE', () => {
  it('should be exported correctly', () => {
    expect(store).toBeDefined();
  });
  it('addToDo, toggleToDo and setVisibilityFilter should still work', () => {
    store.dispatch(actions.addToDo( 'Learn about actions'));
    store.dispatch(actions.addToDo('Learn about reducers'));
    store.dispatch(actions.addToDo('Learn about store'));
    store.dispatch(actions.toggleToDo(0));
    store.dispatch(actions.toggleToDo(1));
    store.dispatch(actions.setVisibilityFilter(actions.VisibilityFilters.SHOW_COMPLETED));
    const expected = {
      todos: [
        {
          'completed': true,
          'text': 'Learn about actions'
        },
        {
          'completed': true,
          'text': 'Learn about reducers'
        },
        {
          'completed': false,
          'text': 'Learn about store'
        }
      ],
      visibilityFilter: 'SHOW_COMPLETED'
    };
    expect(store.getState()).toEqual(expected);
  });
});