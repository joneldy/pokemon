import React, { useState } from 'react';
import PokemonList from '../components/PokemonList';
import Features from '../components/Features';
import styled from 'styled-components';
import { PokemonListContext } from '../context/PokemonListContext';
import { COLORS } from '../const/styles';

const StyledPokemonListPage = styled.div`
  background-color: ${COLORS.blue30};
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PokemonListContainer = () => {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  return (
    <PokemonListContext.Provider
      value={{
        selectedPokemon,
        setSelectedPokemon,
      }}
    >
      <StyledPokemonListPage>
        <div className="container">
          <div className="row g-0">
            <div className="col-12 col-md-4">
              <PokemonList />
            </div>
            <div className="col-12 col-md-8">
              <Features />
            </div>
          </div>
        </div>
      </StyledPokemonListPage>
    </PokemonListContext.Provider>
  );
};

export default PokemonListContainer;
