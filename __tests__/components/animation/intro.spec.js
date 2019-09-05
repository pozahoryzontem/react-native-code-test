import { create } from 'react-test-renderer';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as sinon from 'sinon';
import Intro from '../../../src/components/animation/intro';

describe('Intro', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const mockStore = configureMockStore([thunk]);

      const mockNavigation = { navigate: jest.fn() };

      const store = mockStore({});

      const component = create(<Intro store={store} navigation={mockNavigation} />);
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('should match to snapshot1', () => {
      const clock = sinon.useFakeTimers();
      const mockStore = configureMockStore([thunk]);
      const mockNavigation = { navigate: jest.fn() };

      const store = mockStore({});

      create(<Intro store={store} navigation={mockNavigation} />);
      clock.tick(3000);

      expect(mockNavigation.navigate).toBeCalled();
    });
  });
});
