import gql from 'graphql-tag';

export const GET_POKEMONS = gql`
query {
    pokemons(first: 100) {
      id
      number
      name
      image
      classification
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
    }
  }
`;