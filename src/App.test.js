import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as actions from './actions/actions';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe('ACTIONS', () => {
  it('should be defined and exist', () => {
    expect(actions).toBeDefined();
  });
});
