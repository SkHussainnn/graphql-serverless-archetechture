// src/App.js
import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data.users.map(user => (
        <div key={user.id}>
          <p>User ID: {user.id}</p>
          <p>User Name: {user.name}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
