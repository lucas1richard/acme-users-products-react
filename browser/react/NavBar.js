import React from 'react';

const NavBar = ({ tabs, handleTabChange, numUsers, numProducts }) => (
  <nav>
    <ul className="nav nav-tabs">
      {tabs.map(tab => (
        <li key={tab.id} className={tab.isActive ? 'active' : ''}  onClick={() => handleTabChange(tab)}>
          <a href="#">{ tab.name } ({tab.name === 'Users' ? numUsers : numProducts})</a>
        </li>
      ))}
    </ul>
  </nav>
);

NavBar.propTypes = {
  tabs: React.PropTypes.array.isRequired,
  handleTabChange: React.PropTypes.func.isRequired,
  numUsers: React.propTypes.number.isRequired,
  numProducts: React.propTypes.number.isRequired
};

export default NavBar;
