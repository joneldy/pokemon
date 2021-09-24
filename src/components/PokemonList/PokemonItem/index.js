import React from 'react';
import { PokemonListContext } from '../../../context/PokemonListContext';
import styled from 'styled-components';
import { COLORS, Fonts } from '../../../const/styles';

const StyledList = styled.li`
  margin-bottom: 15px;
  background-color: ${COLORS.grey};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 20px 20px;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }

  .imageContainer {
    width: 44px;
    height: 44px;
    margin-right: 10px;
  }
  .producImage {
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
  .product_number {
    ${{ ...Fonts.h3 }}
    font-size:16px;
    font-weight: 700;
    color: ${COLORS.darkYellow};
    margin-right: 10px;
    margin-left: 10px;
  }
  .product_name {
    ${{ ...Fonts.h3 }};
    color: ${COLORS.darkWhite};
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
  }
`;

const PokemonItem = ({ item }) => {
  const { setSelectedPokemon } = React.useContext(PokemonListContext);
  const { image, number, name } = item;

  const handlePreview = (id) => {
    setSelectedPokemon(item);
  };

  return (
    <StyledList onClick={handlePreview}>
      <div className="imageContainer">
        <img src={image} alt="productImage" className="producImage" />
      </div>
      <span className="product_number">#{number}</span>
      <span className="product_name">{name}</span>
    </StyledList>
  );
};

export default PokemonItem;
