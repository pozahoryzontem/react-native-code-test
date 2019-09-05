import React from 'react';
import { create } from 'react-test-renderer';
import { Image } from 'react-native';
import UserRow from '../../../src/components/users/userRow';

describe('UserRow', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = create(<UserRow avatar="https://via.placeholder.com/300.png/09f/fffC" firstName="testFirstName" lastName="testLastName" />);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
  describe('Image', () => {
    it('should load local image when onErrorImageLoad method called', () => {
      const component = create(<UserRow avatar="https://via.placeholder.com/300.png/09f/fffC" firstName="testFirstName" lastName="testLastName" />);
      const instance = component.root;
      const image = instance.findByType(Image);
      image.props.onError();
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
