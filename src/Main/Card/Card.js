import React from 'react';
import * as Styled from './styles';

function Card(props) {
  return <Styled.StyledCard>{props.children}</Styled.StyledCard>;
}

export default Card;
