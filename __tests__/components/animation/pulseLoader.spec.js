import { create } from 'react-test-renderer';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import * as sinon from 'sinon';
import PulseLoader from '../../../src/components/animation/pulseLoader';

describe('PulseLoader', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const mockStore = configureMockStore();
      const store = mockStore({});

      const component = create(<PulseLoader
        store={store}
      />);

      const clock = sinon.useFakeTimers();
      clock.tick(3000);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
