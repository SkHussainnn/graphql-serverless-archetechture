// src/YourComponent.js
import React from 'react';
import { useQuery, gql } from '@apollo/client';

const EXAMPLE_QUERY = gql`
  query GetExample {
    exampleField
  }
`;

function YourComponent() {
  const { loading, error, data } = useQuery(EXAMPLE_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <p>Data: {data.exampleField}</p>;
}

export default YourComponent;
