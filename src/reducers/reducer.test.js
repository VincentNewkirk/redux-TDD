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
    const actual = reducer(initialState, actions.addToDo(text));
    expect(actual).toEqual(expected);
  });
  it('toggleToDo should find a todo by the index argument passed and change its completed value', () => {
    const index = 1;
    const expected = {
      visibilityFilter: VisibilityFilters.SHOW_ALL,
      todos: [
      {
        'text':'testing',
        'completed': false
      },
      {
        'text':'completed',
        'completed': true,
      }
      ],
    };
    const firstToDo = reducer(initialState, actions.addToDo('testing'));
    const secondToDo = reducer(firstToDo, actions.addToDo('completed'));
    const actual = reducer(secondToDo, actions.toggleToDo(index));
    expect(actual).toEqual(reducer(expected));
  });
});
