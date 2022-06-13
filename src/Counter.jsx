import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from '@apollo/client';
import styled from 'styled-components';

export const QUERY = gql`
  query ($login: String!) {
    user(login: $login) {
      id
      name
      repositories(first: 100) {
        edges {
          node {
            id
            name
            url
            createdAt
            databaseId
            descriptionHTML
            updatedAt
            isArchived
            homepageUrl
            forkCount
            __typename
          }
        }
      }
    }
  }
`;

export function Counter({ login }) {
  const { data, loading, error } = useQuery(QUERY, {
    variables: {
      login,
    },
  });

  if (loading) {
    return (
      <span
        style={{
          fontSize: '24px',
          color: 'white',
          fontWeight: 'bold',
          fontFamily: 'Roboto',
        }}
      >
        Loading...
      </span>
    );
  }

  if (error) {
    return (
      <span
        style={{
          fontSize: '24px',
          color: 'white',
          fontWeight: 'bold',
          fontFamily: 'Roboto',
        }}
      >
        Error!
      </span>
    );
  }

  if (data) {
    return <h1>{data.user.repositories.edges.length}</h1>;
  }
}

export default Counter;
