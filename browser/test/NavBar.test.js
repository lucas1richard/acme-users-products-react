import React  from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import NavBar from '../react/NavBar';

const tabs = [ { id: 1, name: 'Users', isActive: true }, { id: 2, name: 'Products', isActive: false }];
const handleTabChange = () => {};
const numUsers = 1;
const numProducts = 2;

const nav = shallow(
  <NavBar
    tabs={tabs}
    handleTabChange={handleTabChange}
    numProducts={numProducts}
    numUsers={numUsers}
  />
);

const { props } = nav.unrendered;

describe('<NavBar /> testing', () => {
  describe('Elements', () => {
    it('is a nav element', () => {
      expect(nav.type()).to.equal('nav');
    });
    it('has two children', () => {
      expect(nav.children().children().length).to.equal(tabs.length);
    });
    it('each child has only one child', () => {
      expect(nav.children().children().children().length).to.equal(tabs.length);
    });
  });

  describe('Props', () => {
    it('has a tabs property which is an array', () => {
      expect(props.tabs).to.be.ok;
      expect(Array.isArray(props.tabs)).to.be.ok;
    });
    it('has a handleTabChange property which is a function', () => {
      expect(props.handleTabChange).to.be.ok;
      expect(typeof props.handleTabChange).to.equal('function');
    });
    it('has a numUsers property which is a number', () => {
      expect(props.numUsers).to.be.ok;
      expect(typeof props.numUsers).to.equal('number');
    });
    it('has a numProducts property which is a number', () => {
      expect(props.numProducts).to.be.ok;
      expect(typeof props.numProducts).to.equal('number');
    });
  });

  describe('children text', () => {
    console.dir(nav.children().children());
    expect(true).to.be.ok;
  });
});
