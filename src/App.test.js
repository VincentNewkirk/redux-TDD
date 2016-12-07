import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { VisibilityFilters } from './actions/actions';
import reducer from './reducers/reducer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe('ACTIONS', () => {
  it('should be exported correctly', () => {
    expect(VisibilityFilters).toBeDefined();
  });
  it('should have a SHOW_ALL action', () => {
    expect(VisibilityFilters.SHOW_ALL).toBeDefined();
  });
  it('should have a SHOW_COMPLETED action', () => {
    expect(VisibilityFilters.SHOW_COMPLETED).toBeDefined();
  });
  it('should have a SHOW_ACTIVE action', () => {
    expect(VisibilityFilters.SHOW_ACTIVE).toBeDefined();
  });
});

// describe('REDUCER', () => {
//   it('should be exported correctly', () => {
//     expect(reducer).toBeDefined();
//   });
// });
