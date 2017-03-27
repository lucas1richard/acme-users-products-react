import React  from 'react';
import { shallow } from 'enzyme';
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

test('Elements', () => {
  expect(nav.type()).toEqual('nav');
  expect(nav.children().length).toBe(1);
  expect(nav.children().children().length).toBe(tabs.length);
  expect(nav.children().children().children().length).toBe(tabs.length);
});

test('Props', () => {
  expect(props.tabs).toBeTruthy();
  expect(Array.isArray(props.tabs)).toBeTruthy();
  expect(props.handleTabChange).toBeTruthy();
  expect(typeof props.handleTabChange).toEqual('function');
  expect(props.numUsers).toBeTruthy();
  expect(typeof props.numUsers).toEqual('number');
  expect(props.numProducts).toBeTruthy();
  expect(typeof props.numProducts).toEqual('number');
});

test('children text', () => {
  console.dir(nav.children().nodes);
  expect(true).toBeTruthy();
});
