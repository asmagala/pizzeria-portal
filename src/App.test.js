import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('First test', () => {
  it('renders without crashing', () => {
    const component = shallow(<App />);
    expect(component).toBeTruthy();
  });
});