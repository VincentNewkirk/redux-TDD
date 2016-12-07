import  reducer, { initialState } from './reducer';
import { VisibilityFilters } from '../actions/actions';
import * as actions from '../actions/actions';


describe('REDUCER', () => {
  it('should be exported correctly', () => {
    expect(reducer).toBeDefined();
  });
  it('initialState should be exported correctly', () => {
    expect(initialState).toBeDefined();
  });
  it('it should return an initial state', () => {
    const expected = initialState;
    const actual = reducer();
    expect(actual).toEqual(expected);
  });
  it('VisibilityFilter should change the filter of the state', () => {
    const expected = {
      visibilityFilter: VisibilityFilters.SHOW_COMPLETED,
      todos: [],
    };
    const actual = reducer(initialState, actions.setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));
    expect(actual).toEqual(expected);
  });
  it('should return last state if action type isnt handled', () => {
    const expected = initialState;
    const actual = reducer(initialState, { type: 'MAGIC_THING' });
    expect(actual).toEqual(expected);
  });
  it('addToDo should add a task to the to do list. Tasks should have a key/value of text and completed', () => {
    const text = 'testing';
    const expected = {
      visibilityFilter: VisibilityFilters.SHOW_ALL,
      todos: [{ 'text':'testing', 'completed':false }],
    };
    const actual = actions.addToDo(text);
    expect(expected).toEqual(reducer(initialState, actual));
  });
});
