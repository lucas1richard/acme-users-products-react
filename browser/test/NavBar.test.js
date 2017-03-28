import React  from 'react';
import jsdom from 'jsdom';

global.document = jsdom.jsdom('<html><body></body></html>');
global.window = global.document.defaultView;

import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

import NavBar from '../react/NavBar';

const tabs = [ { id: 1, name: 'Users', isActive: true }, { id: 2, name: 'Products', isActive: false }];
const handleTabChange = () => {};
const numUsers = 1;
const numProducts = 2;

const nav = mount(
  <NavBar
    tabs={tabs}
    handleTabChange={handleTabChange}
    numProducts={numProducts}
    numUsers={numUsers}
  />
);

const props = nav.props();

describe('<NavBar /> testing', () => {
  describe('Elements', () => {
    it('has one child which is a <ul> with class nav-tabs', () => {
      expect(nav.children().type()).to.equal('ul');
      expect(nav.children().hasClass('nav-tabs')).to.equal(true);
    });
    it('has one child with two children', () => {
      expect(nav.children().children().length).to.equal(tabs.length);
    });
    it('child\'s two direct children are li elements', () => {
      expect(nav.children().find('li')).to.have.length(tabs.length);
    });
    it('each child has only one child which is an a element', () => {
      expect(nav.children().children().children().length).to.equal(tabs.length);
      expect(nav.children().children().children().find('a')).to.have.length(tabs.length);
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
    nav.find('li').at(1).simulate('click');
    console.log(nav.find('li').at(1).props());
  });
});

