/* global expect, it, describe, jest, beforeEach */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from '.';

describe('Header component', () => {
  let component;
  const openCart = jest.fn();
  const cart = [];

  beforeEach(() => {
    component = shallow(<Header openCart={openCart} cart={cart} showCart={false} />);
  });

  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  it('Should display counter value', () => {
    expect(component.find('.counter').text()).toEqual(`${cart.length}`);
  });

  describe('Open cart button', () => {
    beforeEach(() => {
      component = mount(<Header openCart={openCart} cart={cart} showCart={false} />);
    });

    it('Should exist', () => {
      expect(component.find('.open-cart-button').length).toEqual(1);
    });

    it('Should call the openCart function when clicked', () => {
      expect(openCart.mock.calls.length).toEqual(0);
      component.find('.open-cart-button').simulate('click');
      expect(openCart.mock.calls.length).toEqual(1);
    });
  });

  describe('Cart', () => {
    it('Should not exist when component render', () => {
      expect(component.find('.cart').length).toEqual(0);
    });

    it('Should exist when showCart is true', () => {
      component = mount(<Header openCart={openCart} cart={cart} showCart />);

      expect(component.find('.cart').length).toEqual(1);
    });
  });
});
