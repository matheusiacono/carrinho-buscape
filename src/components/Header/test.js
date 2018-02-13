/* global expect, it, describe, jest, beforeEach */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from '.';

describe('Header component', () => {
  let component;
  const openCart = jest.fn();
  const counter = 2;

  beforeEach(() => {
    component = shallow(<Header openCart={openCart} counter={counter} />);
  });

  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  it('Should display counter value', () => {
    expect(component.find('.counter').text()).toEqual(`${counter}`);
  });

  describe('Open cart button', () => {
    it('Should exist', () => {
      expect(component.find('.open-cart-button').length).toEqual(1);
    });

    it('Should call the openCart function when clicked', () => {
      component = mount(<Header openCart={openCart} counter={counter} />);

      expect(openCart.mock.calls.length).toEqual(0);
      component.find('.open-cart-button').simulate('click');
      expect(openCart.mock.calls.length).toEqual(1);
    });
  });
});
