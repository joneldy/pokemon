import React from 'react';
import { PokemonListContext } from '../../context/PokemonListContext';
import styled from 'styled-components';
import { COLORS, Fonts } from '../../const/styles';

const StyledFeature = styled.div`
  background-color: ${COLORS.blue20};
  height: 694px;

  .w-100 {
    width: 100% !important;
  }
  .name {
    ${{ ...Fonts.h3 }}
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 44px;
    color: ${COLORS.darkWhite};
  }
  .number {
    ${{ ...Fonts.h3 }}
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 44px;
    color: ${COLORS.darkYellow};
  }
  .descriptionList {
    margin: 14px 0 0 0;
    padding: 0;

    li {
      color: #fff;
      list-style: none;
      padding: 3px;

      label {
        ${{ ...Fonts.h3 }}
        font-size: 14px;
        font-weight: 700;
        margin-right: 10px;
      }
      span {
        ${{ ...Fonts.h3 }}
        font-size: 14px;
        font-weight: normal;
      }
    }
  }
`;

const StyledHeader = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #2d2f36;
  padding: 0 40px;
`;

const StyledContent = styled.div`
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledProductImage = styled.div`
  margin-top: 20px;
  width: 500px;
  height: 300px;
  background: ${(props) => `url(${props.url}) no-repeat top center`};
  background-size: contain;
`;

const Features = () => {
  const { selectedPokemon = {} } = React.useContext(PokemonListContext);

  if (!selectedPokemon)
    return (
      <StyledFeature>
        <StyledHeader>&nbsp; </StyledHeader>
        <StyledContent>
          <div class="card mt-3 text-cente  w-100">
            <div class="card-body">
              <h3 class="card-text text-center">Please select a pokemon</h3>
            </div>
          </div>
        </StyledContent>
      </StyledFeature>
    );

  const { name, image, number, classification, weight, height } =
    selectedPokemon;

  return (
    <StyledFeature>
      <StyledHeader>
        <span className="name">{name}</span>
        <span className="number">#{number}</span>
      </StyledHeader>
      <StyledContent>
        <StyledProductImage url={image} />
        <ul className="descriptionList">
          <li>
            <label>classification: </label>
            {classification}
          </li>
          <li>
            <label>Weight: </label>
            <span>
              {' '}
              min: {weight.minimum} - max: {weight.maximum}
            </span>
          </li>
          <li>
            <label>Height: </label>
            <span>
              {' '}
              min: {height.minimum} - max: {height.maximum}
            </span>
          </li>
        </ul>
      </StyledContent>
    </StyledFeature>
  );
};

export default Features;
