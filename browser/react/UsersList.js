import React from 'react';

const UsersList = ({ users }) => (
  <ul className="list-group">
    { users.map(user => <li key={user.id} className="list-group-item">{user.name}</li>) }
  </ul>
);

UsersList.propTypes = {
  users: React.PropTypes.array.isRequired
};

export default UsersList;
