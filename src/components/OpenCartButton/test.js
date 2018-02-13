/* global expect, it, describe, jest, beforeEach */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { shallow, mount } from 'enzyme';
import OpenCartButton from '.';

describe('Header component', () => {
  let component;
  const openCart = jest.fn();

  beforeEach(() => {
    component = shallow(<OpenCartButton openCart={openCart} />);
  });

  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  describe('Open cart button', () => {
    beforeEach(() => {
      component = mount(<OpenCartButton openCart={openCart} />);
    });

    it('Should call the openCart function when clicked', () => {
      expect(openCart.mock.calls.length).toEqual(0);
      component.find('.open-cart-button').simulate('click');
      expect(openCart.mock.calls.length).toEqual(1);
    });
  });
});
