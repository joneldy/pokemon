import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLazyQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from './query';
import Spinner from '../Spinner';
import PokemonItem from './PokemonItem';
import Pagination from '../Pagination';
import { COLORS, Fonts } from '../../const/styles';

const StyledPokemonList = styled.div`
  background-color: ${COLORS.darkBlue};
  padding: 40px 40px 0px 40px;
  height: 619px;
`;

const SyledPagination = styled.div`
  background-color: ${COLORS.black20};
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 10px;

  .pagination {
    flex-wrap: wrap;
    margin-top: inherit;
    margin-bottom: inherit;
  }
  .page-item.active {
    .page-link {
      border: none;
    }
  }
  .page-link {
    ${{ ...Fonts.h3 }}
    background: ${COLORS.darkBlue};
    color: ${COLORS.white20};
    border-radius: 5px;
    border: none;
    padding: 5px 12px;
    margin-right: 2px;
    box-sizing: border-box;
    font-size: 14px;
    font-weight: bold;
  }
`;

const PokemonList = () => {
  const [getPokemons, { loading, data }] = useLazyQuery(GET_POKEMONS, {
    fetchPolicy: 'network-only',
  });
  const [page, setPage] = useState(0);

  useEffect(() => {
    getPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!data) return null;

  if (loading) return <Spinner />;

  // handle pagination flow
  const limit = 6;
  const total = 100;
  let { pokemons = [] } = data;
  const pageCount = total ? Math.ceil(total / limit) : 0;
  let results = total ? pokemons.slice(page * limit, page * limit + 6) : [];

  const onPageChange = ({ selected }) => {
    setPage(Number(selected));
  };

  return (
    <div>
      <StyledPokemonList>
        {results.map((item) => (
          <PokemonItem key={item.id} item={item} />
        ))}
      </StyledPokemonList>
      {pageCount > 0 && (
        <SyledPagination>
          <Pagination
            forcePage={page}
            onPageChange={onPageChange}
            pageCount={pageCount}
            pageRangeDisplayed={3}
          />
        </SyledPagination>
      )}
    </div>
  );
};

export default PokemonList;
