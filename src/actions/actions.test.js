import React from 'react';
import ReactDOM from 'react-dom';
import * as actions from './actions';

describe('ACTIONS', () => {
  it('should be exported correctly', () => {
    expect(actions).toBeDefined();
  });
  it('should have an ADD_TODO action', () => {
    expect(actions.ADD_TODO).toBeDefined();
  });
  it('should have a TOGGLE_TODO action', () => {
    expect(actions.TOGGLE_TODO).toBeDefined();
  });
  it('should have a SET_VISIBILITY_FILTER action', () => {
    expect(actions.SET_VISIBILITY_FILTER).toBeDefined();
  });
  describe('VISIBILITY FILTERS', () => {
    it('should have a SHOW_ALL key/', () => {
      expect(actions.VisibilityFilters.SHOW_ALL).toBeDefined();
    });
    it('should have a SHOW_COMPLETED key/', () => {
      expect(actions.VisibilityFilters.SHOW_COMPLETED).toBeDefined();
    });
    it('should have a SHOW_ACTIVE key/', () => {
      expect(actions.VisibilityFilters.SHOW_ACTIVE).toBeDefined();
    });
  });
  describe('ACTION CREATORS', () => {
    it('addToDo action creator should exist', () => {
      expect(actions.addToDo).toBeDefined();
    });
    it('addTodo should create an action to add a To Do', () => {
      const text = 'Finish Tests';
      const expected = {
        type: actions.ADD_TODO,
        text,
      };
      expect(actions.addToDo(text)).toEqual(expected);
    });
    it('toggleToDo action creator should exist', () => {
      expect(actions.toggleToDo).toBeDefined();
    });
    it('toggleTodo should create an action to "mark" or toggle a todo', () => {
      const index = 1;
      const expected = {
        type: actions.TOGGLE_TODO,
        index
      };
      expect(actions.toggleToDo(index)).toEqual(expected);
    });
    it('setVisibilityFilter action creator should exist', () => {
      expect(actions.setVisibilityFilter).toBeDefined();
    });
    it('setVisibilityFilter should create an action to set the visibility filter', () => {
      const filter = 'SHOW_COMPLETED';
      const expected = {
        type: actions.SET_VISIBILITY_FILTER,
        filter,
      };
      expect(actions.setVisibilityFilter(filter)).toEqual(expected);
    });
  });
});