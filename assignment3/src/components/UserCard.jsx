import React from 'react';

const UserCard = ({ name, email }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 max-w-sm mx-auto my-4 border">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-600">{email}</p>
    </div>
  );
};

export default UserCard;
