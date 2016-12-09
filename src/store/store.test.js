import { store } from './store';
import * as actions from '../actions/actions';
import { VisibilityFilters } from '../actions/actions';


describe('STORE', () => {
  it('should be exported correctly', () => {
    expect(store).toBeDefined();
  });
  it('addToDo action creator should work', () => {
    const expected = {
      visibilityFilter: VisibilityFilters.SHOW_ALL,
      todos: [{ 'text': 'test', 'completed': false }],
    };
    const text = 'test';
    store.dispatch(actions.addToDo(text));
    expect(store.getState()).toEqual(expected);
  });
});