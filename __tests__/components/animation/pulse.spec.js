import { create } from 'react-test-renderer';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import Pulse from '../../../src/components/animation/pulse';

describe('Pulse', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const mockStore = configureMockStore();
      const store = mockStore({});
      const props = {
        pulseSize: 200,
        startSize: 100,
        duration: 10,
      };
      const component = create(<Pulse
        store={store}
        pulseSize={props.pulseSize}
        startSize={props.startSize}
        duration={props.duration}
      />);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
